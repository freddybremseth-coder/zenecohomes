"use client";

import { Children, useRef, useState, type ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

export function TestimonialCarousel({ children }: { children: ReactNode }) {
  const slides = Children.toArray(children);
  const [active, setActive] = useState(0);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const move = (direction: number) => setActive((current) => (current + direction + slides.length) % slides.length);

  return (
    <div className="home-testimonial-carousel" role="region" aria-roledescription="karusell" aria-label="Kundeomtaler"
      onTouchStart={(event) => {
        const touch = event.touches[0];
        touchStart.current = { x: touch.clientX, y: touch.clientY };
      }}
      onTouchCancel={() => { touchStart.current = null; }}
      onTouchEnd={(event) => {
        if (!touchStart.current) return;
        const touch = event.changedTouches[0];
        const dx = touch.clientX - touchStart.current.x;
        const dy = touch.clientY - touchStart.current.y;
        if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) move(dx < 0 ? 1 : -1);
        touchStart.current = null;
      }}>
      <div className="home-testimonial-slide" aria-live="polite" aria-atomic="true">
        {slides[active]}
      </div>
      <div className="home-carousel-controls">
        <button type="button" onClick={() => move(-1)} aria-label="Forrige kundeomtale"><ArrowLeft size={20} /></button>
        <span aria-live="polite">{active + 1} / {slides.length}</span>
        <button type="button" onClick={() => move(1)} aria-label="Neste kundeomtale"><ArrowRight size={20} /></button>
      </div>
      <div className="center-action"><Link className="text-button" href="/kundeomtaler">Se alle kundeomtaler <ArrowRight size={16} /></Link></div>
    </div>
  );
}
