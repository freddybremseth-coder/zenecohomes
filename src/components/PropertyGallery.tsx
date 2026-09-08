"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Images, X } from "lucide-react";

/** Premium filmstrip + full-screen lightbox for property imagery. */
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

  if (images.length <= 1) return null;

  // Main image is rendered above the gallery. Keep the filmstrip editorial and calm.
  const thumbs = images.slice(1, 7);

  return (
    <>
      <section className="property-filmstrip" aria-label={`Bilder av ${title}`}>
        <div className="property-filmstrip-head">
          <div>
            <span className="property-filmstrip-kicker">Galleri</span>
            <strong>{images.length} bilder</strong>
          </div>
          <button type="button" className="property-gallery-all" onClick={() => setOpen(0)}>
            <Images size={17} /> Se alle bilder
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
                style={{ backgroundImage: `url(${image})` }}
                onClick={() => setOpen(imageIndex)}
                aria-label={`${title} – bilde ${imageIndex + 1}`}
              >
                <span className="gallery-thumb-index">{String(imageIndex + 1).padStart(2, "0")}</span>
                {isLastVisible && remaining > 0 && (
                  <span className="gallery-thumb-more">+{remaining} bilder</span>
                )}
              </button>
            );
          })}
        </div>
      </section>

      {open !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={`Galleri – ${title}`} onClick={close}>
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
              aria-label="Forrige bilde"
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
              aria-label="Neste bilde"
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
