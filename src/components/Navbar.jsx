import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  Home, Sparkles, UtensilsCrossed, Bath, Stethoscope, Calculator, Cat,
  Heart, Scale, ShieldCheck, Lightbulb, Menu, X, Search, Bookmark, PawPrint
} from "lucide-react";
import { CATEGORIES, CATEGORY_GROUPS, searchArticles } from "@/data/content";
import ThemeToggle from "@/components/ThemeToggle";

const ICONS = { Home, Sparkles, UtensilsCrossed, Bath, Stethoscope, Calculator, Cat, Heart, Scale, ShieldCheck, Lightbulb };

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const searchRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  const results = query.trim() ? searchArticles(query).slice(0, 6) : [];

  const onSearchSubmit = (e) => {
    e.preventDefault();
    if (results.length) {
      const first = results[0];
      navigate(`${first.path}${first.anchor}`);
      setSearchOpen(false);
      setQuery("");
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? "py-2" : "py-3"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4">
          <div
            className={`flex items-center justify-between gap-3 rounded-full border border-border/60 px-4 py-2 transition-all duration-300 ${
              scrolled ? "glass-card shadow-lg" : "bg-card/40 backdrop-blur-sm"
            }`}
          >
            {/* Logo */}
            <Link to="/" aria-label="Mahmud Rajabov — bosh sahifa" className="flex items-center gap-2.5 shrink-0">
              <img
                src="/m-cat-emblem.svg"
                alt="Mahmud Rajabov — mushuk emblemasi"
                className="h-7 w-7 sm:h-8 sm:w-8 shrink-0"
              />
              <span className="font-heading font-bold text-foreground leading-tight">
                Mahmud Rajabov
                <span className="hidden sm:block text-[10px] font-medium text-muted-foreground">CatCare Uzbekistan</span>
              </span>
            </Link>

            {/* Desktop quick nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {CATEGORIES.slice(0, 5).map((c) => (
                <Link
                  key={c.id}
                  to={c.path}
                  className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                    location.pathname === c.path
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground/80 hover:bg-secondary"
                  }`}
                >
                  {c.label.length > 18 ? c.label.split(" ")[0] : c.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setSearchOpen((v) => !v)}
                aria-label="Qidirish"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-secondary-foreground hover:bg-primary/10 transition-colors"
              >
                <Search className="h-4 w-4" />
              </button>
              <Link
                to="/saqlanganlar"
                aria-label="Saqlangan maqolalar"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-secondary-foreground hover:bg-primary/10 transition-colors"
              >
                <Bookmark className="h-4 w-4" />
              </Link>
              <ThemeToggle />
              <button
                onClick={() => setMenuOpen(true)}
                aria-label="Menyuni ochish"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Search dropdown */}
          {searchOpen && (
            <div ref={searchRef} className="mx-auto max-w-7xl mt-2 px-4">
              <form onSubmit={onSearchSubmit} className="glass-card rounded-3xl p-4 shadow-xl">
                <div className="flex items-center gap-2">
                  <Search className="h-4 w-4 text-muted-foreground" />
                  <input
                    autoFocus
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Misol: Mushugim nima yeyishi kerak?"
                    className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                {results.length > 0 && (
                  <ul className="mt-3 divide-y divide-border">
                    {results.map((r) => (
                      <li key={r.id}>
                        <Link
                          to={`${r.path}${r.anchor}`}
                          className="block py-2.5 hover:text-primary"
                          onClick={() => { setSearchOpen(false); setQuery(""); }}
                        >
                          <span className="font-semibold text-sm">{r.title}</span>
                          <span className="block text-xs text-muted-foreground">{r.excerpt}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
                {query.trim() && results.length === 0 && (
                  <p className="mt-3 text-sm text-muted-foreground">Hech narsa topilmadi. Boshqa so‘z bilan urinib ko‘ring.</p>
                )}
              </form>
            </div>
          )}
        </div>
      </header>

      {/* Mega menu drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] lg:z-50">
          <div className="absolute inset-0 bg-navy/50 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-full max-w-md overflow-y-auto bg-background shadow-2xl">
            <div className="flex items-center justify-between p-5 border-b border-border">
              <div className="flex items-center gap-2">
                <PawPrint className="h-5 w-5 text-primary" />
                <span className="font-heading font-bold">Kategoriyalar</span>
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Yopish"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-secondary hover:bg-primary/10"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-5 space-y-6">
              {CATEGORY_GROUPS.map((group) => (
                <div key={group}>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">{group}</h4>
                  <ul className="space-y-1">
                    {CATEGORIES.filter((c) => c.group === group).map((c) => {
                      const Icon = ICONS[c.icon] || PawPrint;
                      return (
                        <li key={c.id}>
                          <Link
                            to={c.path}
                            className="flex items-start gap-3 rounded-2xl p-3 hover:bg-secondary transition-colors"
                          >
                            <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                              <Icon className="h-4 w-4" />
                            </span>
                            <span>
                              <span className="block font-semibold text-foreground">{c.label}</span>
                              <span className="block text-xs text-muted-foreground">{c.blurb}</span>
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}