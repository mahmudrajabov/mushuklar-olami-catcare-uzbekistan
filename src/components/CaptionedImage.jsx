import React from "react";
import { Image } from "@/components/ui/image";

// Content image with required alt text and visible caption.
export default function CaptionedImage({ src, alt, caption, className = "", imgClassName = "", fittingType = "fill" }) {
  return (
    <figure className={`overflow-hidden rounded-3xl border border-border bg-card shadow-sm ${className}`}>
      <div className="relative w-full aspect-[4/3]">
        <Image src={src} alt={alt} fittingType={fittingType} className={`h-full w-full object-cover ${imgClassName}`} />
      </div>
      {caption && (
        <figcaption className="px-4 py-3 text-center text-sm font-medium text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}