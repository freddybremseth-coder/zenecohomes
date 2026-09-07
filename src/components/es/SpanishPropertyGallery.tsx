"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export function SpanishPropertyGallery({ images, title }: { images: string[]; title: string }) {
  const [open, setOpen] = useState<number | null>(null);
  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (delta: number) => setOpen((i) => (i === null ? i : (i + delta + images.length) % images.length)),
    [images.length],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      else if (event.key === "ArrowLeft") step(-1);
      else if (event.key === "ArrowRight") step(1);
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open, close, step]);

  const thumbs = images.slice(1, 13);

  return (
    <>
      <div className="gallery-grid">
        {thumbs.map((image, index) => (
          <button
            key={`${image}-${index}`}
            type="button"
            className="gallery-thumb"
            style={{ backgroundImage: `url(${image})` }}
            onClick={() => setOpen(index + 1)}
            aria-label={`${title} – imagen ${index + 2}`}
          />
        ))}
      </div>
      {open !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Galería de imágenes" onClick={close}>
          <button className="lightbox-close" type="button" onClick={close} aria-label="Cerrar">
            <X />
          </button>
          {images.length > 1 && (
            <button
              className="lightbox-nav prev"
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                step(-1);
              }}
              aria-label="Imagen anterior"
            >
              <ChevronLeft />
            </button>
          )}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="lightbox-img"
            src={images[open]}
            alt={`${title} – imagen ${open + 1}`}
            onClick={(event) => event.stopPropagation()}
          />
          {images.length > 1 && (
            <button
              className="lightbox-nav next"
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                step(1);
              }}
              aria-label="Imagen siguiente"
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
