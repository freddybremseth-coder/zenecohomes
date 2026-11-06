"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Images, X } from "lucide-react";
import { ResilientImage, ResilientNativeImage } from "@/components/ResilientImage";

/** Premium filmstrip + full-screen lightbox for property imagery. */
export function PropertyGallery({ images, title, locale = "no" }: { images: string[]; title: string; locale?: "no" | "en" | "de" }) {
  const words = locale === "de"
    ? { images: "Bilder", gallery: "Galerie", all: "Alle Bilder ansehen", image: "Bild", close: "Schließen", prev: "Vorheriges Bild", next: "Nächstes Bild" }
    : locale === "en"
      ? { images: "images", gallery: "Gallery", all: "View all images", image: "image", close: "Close", prev: "Previous image", next: "Next image" }
      : { images: "bilder", gallery: "Galleri", all: "Se alle bilder", image: "bilde", close: "Lukk", prev: "Forrige bilde", next: "Neste bilde" };
  const [open, setOpen] = useState<number | null>(null);
  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (delta: number) => setOpen((i) => (i === null ? i : (i + delta + images.length) % images.length)),
    [images.length],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") step(-1);
      else if (e.key === "ArrowRight") step(1);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, close, step]);

  if (images.length <= 1) return null;

  // Main image is rendered above the gallery. Keep the filmstrip editorial and calm.
  const thumbs = images.slice(1, 7);

  return (
    <>
      <section className="property-filmstrip" aria-label={`${words.gallery}: ${title}`}>
        <div className="property-filmstrip-head">
          <div>
            <span className="property-filmstrip-kicker">{words.gallery}</span>
            <strong>{images.length} {words.images}</strong>
          </div>
          <button type="button" className="property-gallery-all" onClick={() => setOpen(0)}>
            <Images size={17} /> {words.all}
          </button>
        </div>

        <div className="gallery-grid gallery-filmstrip">
          {thumbs.map((image, i) => {
            const imageIndex = i + 1;
            const isLastVisible = i === thumbs.length - 1;
            const remaining = images.length - (imageIndex + 1);
            return (
              <button
                key={`${image}-${imageIndex}`}
                type="button"
                className="gallery-thumb gallery-thumb-2027"

                onClick={() => setOpen(imageIndex)}
                aria-label={`${title} – ${words.image} ${imageIndex + 1}`}
              >
                <ResilientImage src={image} alt={`${title} – ${words.image} ${imageIndex + 1}`} fill sizes="(max-width: 980px) 68vw, 16vw" style={{ objectFit: "cover" }} />
                <span className="gallery-thumb-index">{String(imageIndex + 1).padStart(2, "0")}</span>
                {isLastVisible && remaining > 0 && (
                  <span className="gallery-thumb-more">+{remaining} {words.images}</span>
                )}
              </button>
            );
          })}
        </div>
      </section>

      {open !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${words.gallery} – ${title}`} onClick={close}>
          <button className="lightbox-close" type="button" onClick={close} aria-label={words.close}>
            <X />
          </button>
          {images.length > 1 && (
            <button
              className="lightbox-nav prev"
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              aria-label={words.prev}
            >
              <ChevronLeft />
            </button>
          )}
          <ResilientNativeImage
            className="lightbox-img"
            src={images[open]}
            alt={`${title} – ${words.image} ${open + 1}`}
            onClick={(e) => e.stopPropagation()}
          />
          {images.length > 1 && (
            <button
              className="lightbox-nav next"
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              aria-label={words.next}
            >
              <ChevronRight />
            </button>
          )}
          <div className="lightbox-count">
            {open + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
