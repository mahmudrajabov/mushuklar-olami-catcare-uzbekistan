import React from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { getCategoryById } from "@/data/content";
import BookmarkButton from "@/components/BookmarkButton";

export default function ArticleCard({ article }) {
  const cat = getCategoryById(article.categoryId);
  return (
    <Card className="flex h-full flex-col rounded-3xl border-2 border-border p-5 transition-all hover:shadow-lg hover:border-primary/30">
      <div className="flex items-center justify-between gap-2">
        {cat && (
          <Link to={cat.path} className="pill bg-secondary text-secondary-foreground hover:bg-primary/10">
            {cat.label}
          </Link>
        )}
        <BookmarkButton item={article} />
      </div>
      <h3 className="mt-3 font-bold text-foreground leading-snug">{article.title}</h3>
      <p className="mt-2 flex-1 text-sm text-muted-foreground leading-relaxed">{article.excerpt}</p>
      <Link
        to={`${article.path}${article.anchor}`}
        className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all"
      >
        O‘qish <ArrowRight className="h-4 w-4" />
      </Link>
    </Card>
  );
}