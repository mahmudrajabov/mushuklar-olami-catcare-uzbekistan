import React from "react";

export default function SectionHeading({ eyebrow, title, description, align = "left", id }) {
  return (
    <div id={id} className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""} scroll-mt-24`}>
      {eyebrow && (
        <span className="pill bg-primary/10 text-primary mb-3">{eyebrow}</span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">{title}</h2>
      {description && (
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{description}</p>
      )}
    </div>
  );
}