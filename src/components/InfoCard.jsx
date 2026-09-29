import React from "react";
import { Card, CardContent } from "@/components/ui/card";

// Generic info card with optional icon, title, body and tone.
export default function InfoCard({ icon: Icon, title, children, tone = "default", className = "" }) {
  const tones = {
    default: "bg-card text-card-foreground border-border",
    primary: "bg-primary/5 border-primary/20",
    accent: "bg-accent/5 border-accent/20",
    danger: "bg-destructive/5 border-destructive/20",
    navy: "bg-navy text-cream border-navy"
  };
  return (
    <Card className={`overflow-hidden rounded-3xl border-2 ${tones[tone]} ${className}`}>
      <CardContent className="p-6">
        {Icon && (
          <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Icon className="h-5 w-5" />
          </div>
        )}
        {title && <h3 className="text-lg font-bold mb-2">{title}</h3>}
        <div className="text-sm leading-relaxed text-muted-foreground [&_strong]:text-foreground">
          {children}
        </div>
      </CardContent>
    </Card>
  );
}