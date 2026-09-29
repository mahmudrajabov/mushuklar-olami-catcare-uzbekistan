import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Bookmark, Trash2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import { getBookmarks, toggleBookmark } from "@/lib/storage";
import { getCategoryById } from "@/data/content";

export default function Bookmarks() {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const load = () => setBookmarks(getBookmarks());
    load();
    window.addEventListener("bookmarks-changed", load);
    return () => window.removeEventListener("bookmarks-changed", load);
  }, []);

  const remove = (item) => {
    toggleBookmark(item);
  };

  return (
    <div>
      <PageHero
        eyebrow="Sizning to‘plamingiz"
        title="Saqlangan maqolalar"
        description="Siz saqlab qo‘ygan maqolalar bu yerda — brauzeringizda saqlanadi."
      />

      <section className="mx-auto max-w-7xl px-4 py-10">
        {bookmarks.length === 0 ? (
          <div className="text-center py-16">
            <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-secondary mb-4">
              <Bookmark className="h-8 w-8 text-muted-foreground" />
            </span>
            <h3 className="text-xl font-bold mb-2">Hozircha hech narsa saqlanmagan</h3>
            <p className="text-muted-foreground mb-6">Maqolalardagi “Saqlash” tugmasi orqali shu yerga qo‘shing.</p>
            <Link to="/" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 font-semibold text-primary-foreground hover:opacity-90 transition-opacity">
              Bosh sahifaga qaytish
            </Link>
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {bookmarks.map((b) => {
              const cat = getCategoryById(b.categoryId);
              return (
                <div key={b.id} className="rounded-3xl border-2 border-border bg-card p-5">
                  {cat && (
                    <Link to={cat.path} className="pill bg-secondary text-secondary-foreground hover:bg-primary/10 mb-3 inline-flex">
                      {cat.label}
                    </Link>
                  )}
                  <h3 className="font-bold leading-snug">{b.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{b.excerpt}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <Link to={`${b.path}${b.anchor}`} className="text-sm font-semibold text-primary hover:underline">
                      O‘qish
                    </Link>
                    <button
                      onClick={() => remove(b)}
                      className="inline-flex items-center gap-1.5 rounded-full bg-destructive/10 px-3 py-1.5 text-xs font-semibold text-destructive hover:bg-destructive/20 transition-colors"
                    >
                      <Trash2 className="h-3.5 w-3.5" /> Olib tashlash
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}