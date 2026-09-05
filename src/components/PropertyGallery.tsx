"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

/** Bildegalleri med fullskjerm-lightbox (klikk, piltaster, swipe-vennlig). */
export function PropertyGallery({ images, title }: { images: string[]; title: string }) {
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

  // Thumbnails: alle bortsett fra hovedbildet (index 0), men lightbox browser hele settet.
  const thumbs = images.slice(1, 13);

  return (
    <>
      <div className="gallery-grid">
        {thumbs.map((image, i) => (
          <button
            key={image}
            type="button"
            className="gallery-thumb"
            style={{ backgroundImage: `url(${image})` }}
            onClick={() => setOpen(i + 1)}
            aria-label={`${title} – bilde ${i + 2}`}
          />
        ))}
      </div>

      {open !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={close}>
          <button className="lightbox-close" type="button" onClick={close} aria-label="Lukk">
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
              aria-label="Forrige"
            >
              <ChevronLeft />
            </button>
          )}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="lightbox-img"
            src={images[open]}
            alt={`${title} – bilde ${open + 1}`}
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
              aria-label="Neste"
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
