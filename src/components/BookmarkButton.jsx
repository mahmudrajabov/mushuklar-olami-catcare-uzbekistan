import React, { useState, useEffect } from "react";
import { Bookmark, BookmarkCheck } from "lucide-react";
import { isBookmarked, toggleBookmark } from "@/lib/storage";

export default function BookmarkButton({ item, className = "" }) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(isBookmarked(item.id));
    const handler = () => setActive(isBookmarked(item.id));
    window.addEventListener("bookmarks-changed", handler);
    return () => window.removeEventListener("bookmarks-changed", handler);
  }, [item.id]);

  const onClick = () => {
    const now = toggleBookmark(item);
    setActive(now);
  };

  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      title={active ? "Saqlanganlardan olib tashlash" : "Saqlab qo‘yish"}
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
        active
          ? "bg-primary text-primary-foreground"
          : "bg-secondary text-secondary-foreground hover:bg-primary/10"
      } ${className}`}
    >
      {active ? <BookmarkCheck className="h-3.5 w-3.5" /> : <Bookmark className="h-3.5 w-3.5" />}
      {active ? "Saqlangan" : "Saqlash"}
    </button>
  );
}