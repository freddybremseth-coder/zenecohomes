"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Images } from "lucide-react";
import { ResilientImage } from "@/components/ResilientImage";

type Props = { images: string[]; title: string; locale: "no" | "en" | "de" };

export function PropertyHeroGallery({ images, title, locale }: Props) {
  const [active, setActive] = useState(0);
  if (!images.length) return null;
  const text = locale === "no"
    ? {prev:"Forrige bilde",next:"Neste bilde",count:"Bilde"}
    : locale === "de"
      ? {prev:"Vorheriges Bild",next:"Nächstes Bild",count:"Bild"}
      : {prev:"Previous image",next:"Next image",count:"Image"};
  return (
    <div className="property-hero-gallery" aria-label={`${title} – ${text.count.toLowerCase()}galleri`}>
      <ResilientImage
        src={images[active]}
        alt={`${title} – ${text.count.toLowerCase()} ${active + 1}`}
        fill
        priority={active === 0}
        sizes="100vw"
        style={{ objectFit: "cover" }}
      />
      {images.length > 1 && (
        <div className="property-hero-gallery-controls">
          <button type="button" aria-label={text.prev} onClick={() => setActive((index) => (index - 1 + images.length) % images.length)}><ChevronLeft size={22} /></button>
          <span aria-live="polite"><Images size={15} /> {active + 1} / {images.length}</span>
          <button type="button" aria-label={text.next} onClick={() => setActive((index) => (index + 1) % images.length)}><ChevronRight size={22} /></button>
        </div>
      )}
    </div>
  );
}
