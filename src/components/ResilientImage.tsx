"use client";

import Image, { type ImageProps } from "next/image";
import { useEffect, useState, type ImgHTMLAttributes } from "react";

/**
 * A missing remote image must never leave a broken-image icon on public pages.
 * The fallback is a known local site asset; if even that fails we display a
 * neutral, labelled panel rather than attributing a random picture to a town.
 */
export function ResilientImage({
  src,
  alt,
  fallbackSrc = "/assets/areas.jpg",
  className,
  style,
  onError,
  ...props
}: Omit<ImageProps, "src"> & { src: string; fallbackSrc?: string }) {
  const [current, setCurrent] = useState(src || fallbackSrc);
  const [unavailable, setUnavailable] = useState(false);

  useEffect(() => {
    setCurrent(src || fallbackSrc);
    setUnavailable(false);
  }, [src, fallbackSrc]);

  if (unavailable) {
    return (
      <div
        role="img"
        aria-label={typeof alt === "string" ? `${alt} – bilde ikke tilgjengelig` : "Bilde ikke tilgjengelig"}
        className={`resilient-image-placeholder ${className || ""}`}
        style={style}
      >
        <span>Bilde ikke tilgjengelig</span>
      </div>
    );
  }

  return (
    <Image
      {...props}
      src={current}
      alt={alt}
      className={className}
      style={style}
      onError={(event) => {
        onError?.(event);
        if (current !== fallbackSrc) setCurrent(fallbackSrc);
        else setUnavailable(true);
      }}
    />
  );
}

/** Same fallback for legacy <img> content and CMS images (no optimizer). */
export function ResilientNativeImage({
  src,
  alt,
  className,
  fallbackSrc = "/assets/areas.jpg",
  ...props
}: ImgHTMLAttributes<HTMLImageElement> & { fallbackSrc?: string }) {
  const [current, setCurrent] = useState(src || fallbackSrc);
  const [unavailable, setUnavailable] = useState(false);
  useEffect(() => {
    setCurrent(src || fallbackSrc);
    setUnavailable(false);
  }, [src, fallbackSrc]);

  if (unavailable) {
    return <div className={`resilient-image-placeholder ${className || ""}`} role="img" aria-label={`${alt || "Foto"} – bilde ikke tilgjengelig`}>Bilde ikke tilgjengelig</div>;
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      {...props}
      src={current}
      alt={alt || ""}
      className={className}
      onError={(event) => {
        props.onError?.(event);
        if (current !== fallbackSrc) setCurrent(fallbackSrc);
        else setUnavailable(true);
      }}
    />
  );
}
