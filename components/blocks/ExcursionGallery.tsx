"use client"
import { useState } from "react"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import { Play } from "lucide-react"

type PhotoItem = { kind: "photo"; src: string }
type VideoItem = { kind: "video"; youtubeId: string }
type GalleryItem = PhotoItem | VideoItem

const items: GalleryItem[] = [
  { kind: "video", youtubeId: "R6UUD8D742A" },
  { kind: "video", youtubeId: "TGGLniY20Mc" },
  { kind: "photo", src: "/excursion-gallery/excursion-01.webp" },
  { kind: "video", youtubeId: "IVHXOWJESvU" },
  { kind: "photo", src: "/excursion-gallery/excursion-02.webp" },
  { kind: "photo", src: "/excursion-gallery/excursion-03.webp" },
  { kind: "video", youtubeId: "gqNLr7KuqXM" },
  { kind: "photo", src: "/excursion-gallery/excursion-04.webp" },
  { kind: "photo", src: "/excursion-gallery/excursion-05.webp" },
  { kind: "video", youtubeId: "rEmyXSwjRTM" },
  { kind: "photo", src: "/excursion-gallery/excursion-06.webp" },
  { kind: "photo", src: "/excursion-gallery/excursion-07.webp" },
  { kind: "video", youtubeId: "buleHIMqb_o" },
  { kind: "photo", src: "/excursion-gallery/excursion-10.webp" },
  { kind: "photo", src: "/excursion-gallery/excursion-11.webp" },
  { kind: "video", youtubeId: "EeyapEvLnMs" },
  { kind: "photo", src: "/excursion-gallery/excursion-12.webp" },
  { kind: "photo", src: "/excursion-gallery/excursion-14.webp" },
  { kind: "video", youtubeId: "y34nPsnnCuQ" },
  { kind: "photo", src: "/excursion-gallery/excursion-15.webp" },
  { kind: "photo", src: "/excursion-gallery/excursion-16.webp" },
  { kind: "video", youtubeId: "T3L-uzyeBa8" },
  { kind: "photo", src: "/excursion-gallery/excursion-18.webp" },
  { kind: "photo", src: "/excursion-gallery/excursion-19.webp" },
  { kind: "video", youtubeId: "G9Z_7cCWVrA" },
  { kind: "photo", src: "/excursion-gallery/excursion-20.webp" },
  { kind: "photo", src: "/excursion-gallery/excursion-21.webp" },
  { kind: "video", youtubeId: "PA4SJy1IzRg" },
  { kind: "photo", src: "/excursion-gallery/excursion-22.webp" },
  { kind: "photo", src: "/excursion-gallery/excursion-23.webp" },
  { kind: "video", youtubeId: "V6IE1IBrR7g" },
  { kind: "photo", src: "/excursion-gallery/excursion-24.webp" },
  { kind: "photo", src: "/excursion-gallery/excursion-25.webp" },
  { kind: "video", youtubeId: "oR_yXhH_3DY" },
  { kind: "photo", src: "/excursion-gallery/excursion-26.webp" },
  { kind: "video", youtubeId: "vmvb94X1yb4" },
  { kind: "photo", src: "/excursion-gallery/excursion-27.webp" },
  { kind: "video", youtubeId: "i1fCEIkpgfc" },
  { kind: "photo", src: "/excursion-gallery/excursion-28.webp" },
  { kind: "video", youtubeId: "MVkc7cDR9dY" },
  { kind: "photo", src: "/excursion-gallery/excursion-29.webp" },
  { kind: "photo", src: "/excursion-gallery/excursion-30.webp" },
]

const slides = items.map(item =>
  item.kind === "photo"
    ? { src: item.src }
    : { src: `https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`, youtubeId: item.youtubeId }
)

export function ExcursionGallery() {
  const [index, setIndex] = useState(-1)

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {items.map((item, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className="aspect-square overflow-hidden rounded-sm cursor-pointer focus:outline-none relative group"
            aria-label={item.kind === "video" ? `Play excursion video ${i + 1}` : `View excursion photo ${i + 1}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.kind === "photo"
                ? item.src
                : `https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`}
              alt=""
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
            {item.kind === "video" && (
              <div className="absolute inset-0 flex items-center justify-center" style={{ background: "rgba(10,14,20,0.35)" }}>
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
                  style={{ background: "rgba(10,14,20,0.55)" }}
                >
                  <Play size={18} fill="white" style={{ color: "white", marginLeft: "2px" }} />
                </div>
              </div>
            )}
          </button>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides}
        on={{ view: ({ index: i }) => setIndex(i) }}
        styles={{ container: { backgroundColor: "rgba(10,14,20,0.97)" } }}
        render={{
          slide: ({ slide }) => {
            if (!("youtubeId" in slide) || !slide.youtubeId) return undefined
            return (
              <div className="flex items-center justify-center w-full h-full px-4">
                <div style={{ width: "100%", maxWidth: "900px", aspectRatio: "16/9" }}>
                  <iframe
                    src={`https://www.youtube.com/embed/${slide.youtubeId}?autoplay=1`}
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    style={{ width: "100%", height: "100%", border: "none", borderRadius: "4px" }}
                  />
                </div>
              </div>
            )
          }
        }}
      />
    </>
  )
}
