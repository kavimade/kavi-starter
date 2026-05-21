import { NextRequest, NextResponse } from "next/server"

// Required env vars — add to .env.local when ready:
//   RESEND_API_KEY   → resend.com → API Keys
//   CONTACT_TO_EMAIL → recipient address (e.g. LukeKetterhagen@gmail.com)
//   CONTACT_FROM     → verified sender (e.g. contact@yourdomain.com)

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json()

  if (!name || !email || !email.includes("@") || !message) {
    return NextResponse.json({ error: "All fields are required" }, { status: 400 })
  }

  const apiKey  = process.env.RESEND_API_KEY
  const toEmail = process.env.CONTACT_TO_EMAIL
  const from    = process.env.CONTACT_FROM

  if (!apiKey || !toEmail || !from) {
    // Not yet configured — return success in dev so the UI works
    console.warn("Contact env vars not set. Skipping email send.")
    return NextResponse.json({ success: true })
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to:       [toEmail],
      reply_to: email,
      subject:  `New message from ${name}`,
      text:     `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html:     `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><br/><p>${message.replace(/\n/g, "<br/>")}</p>`,
    }),
  })

  if (res.ok) {
    return NextResponse.json({ success: true })
  }

  const data = await res.json()
  console.error("Resend error:", data)
  return NextResponse.json({ error: "Message could not be sent. Please try emailing directly." }, { status: 500 })
}
