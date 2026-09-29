import React from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import {
  Home, Sparkles, UtensilsCrossed, Bath, Stethoscope, Calculator, Cat,
  Heart, Scale, ShieldCheck, Lightbulb, ArrowRight
} from "lucide-react";

const ICONS = { Home, Sparkles, UtensilsCrossed, Bath, Stethoscope, Calculator, Cat, Heart, Scale, ShieldCheck, Lightbulb };

export default function CategoryCard({ category, featured = false }) {
  const Icon = ICONS[category.icon] || Sparkles;
  return (
    <Link to={category.path} className="group block h-full">
      <Card className={`h-full rounded-3xl border-2 border-border p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl ${featured ? "md:p-7" : ""}`}>
        <div className="flex items-start justify-between">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            <Icon className="h-6 w-6" />
          </span>
          <ArrowRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
        </div>
        <h3 className="mt-4 font-bold text-foreground leading-snug">{category.label}</h3>
        <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{category.blurb}</p>
      </Card>
    </Link>
  );
}