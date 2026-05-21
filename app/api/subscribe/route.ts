import { NextRequest, NextResponse } from "next/server"

// Required env vars — add these to .env.local once Luke provides them:
//   MAILCHIMP_API_KEY   → Account → Extras → API Keys
//   MAILCHIMP_LIST_ID   → Audience → Settings → Audience name & defaults
//   MAILCHIMP_DC        → the suffix after the dash in the API key (e.g. "us14")

export async function POST(req: NextRequest) {
  const { email } = await req.json()

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Valid email required" }, { status: 400 })
  }

  const apiKey  = process.env.MAILCHIMP_API_KEY
  const listId  = process.env.MAILCHIMP_LIST_ID
  const dc      = process.env.MAILCHIMP_DC

  if (!apiKey || !listId || !dc) {
    // Credentials not yet configured — return success in dev so the UI works
    console.warn("Mailchimp env vars not set. Skipping API call.")
    return NextResponse.json({ success: true })
  }

  const url = `https://${dc}.api.mailchimp.com/3.0/lists/${listId}/members`

  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`anystring:${apiKey}`).toString("base64")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email_address: email,
      status: "subscribed",
      tags: ["website-footer"],
    }),
  })

  const data = await res.json()

  // 400 with "Member Exists" is fine — treat as success
  if (res.ok || data.title === "Member Exists") {
    return NextResponse.json({ success: true })
  }

  console.error("Mailchimp error:", data)
  return NextResponse.json({ error: data.detail ?? "Subscription failed" }, { status: 500 })
}
