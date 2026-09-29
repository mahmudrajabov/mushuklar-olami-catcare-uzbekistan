import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Image } from "@/components/ui/image";

export default function PageHero({ eyebrow, title, description, image, imageAlt, imageCaption }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 py-10 md:py-14">
        <nav className="flex items-center gap-1 text-xs text-muted-foreground mb-5">
          <Link to="/" className="hover:text-primary">Bosh sahifa</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground font-medium">{title}</span>
        </nav>
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            {eyebrow && <span className="pill bg-primary/10 text-primary mb-3">{eyebrow}</span>}
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">{title}</h1>
            {description && (
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-xl">{description}</p>
            )}
          </div>
          {image && (
            <figure className="overflow-hidden rounded-3xl border border-border shadow-lg">
              <div className="relative aspect-[4/3]">
                <Image src={image} alt={imageAlt} className="h-full w-full object-cover" />
              </div>
              {imageCaption && (
                <figcaption className="px-4 py-3 text-center text-sm font-medium text-muted-foreground bg-card">
                  {imageCaption}
                </figcaption>
              )}
            </figure>
          )}
        </div>
      </div>
    </section>
  );
}