import React from "react";
import { Link } from "react-router-dom";
import { AlertTriangle, ExternalLink } from "lucide-react";
import { CATEGORIES } from "@/data/content";

export default function Footer() {
  return (
    <footer className="bg-navy text-cream mt-20">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" aria-label="Mahmud Rajabov — bosh sahifa" className="inline-flex items-center gap-2.5 mb-4">
              <img
                src="/m-cat-emblem.svg"
                alt="Mahmud Rajabov — mushuk emblemasi"
                className="h-7 w-7 shrink-0"
              />
              <span className="font-heading font-bold text-lg">Mushuklar Olami</span>
            </Link>
            <p className="text-sm leading-relaxed text-cream/70 max-w-md">
              O‘zbekistonda mushuklar bilan mas’ul tarzda g‘amxo‘rlik qilishni
              rag‘batlantiruvchi ta’limiy platforma. Bizning maqsadimiz —
              bilimli, mehribon va xabardor mushuk egalarini ko‘paytirish.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-cream">Bo‘limlar</h4>
            <ul className="space-y-2 text-sm text-cream/70">
              {CATEGORIES.slice(1, 7).map((c) => (
                <li key={c.id}>
                  <Link to={c.path} className="hover:text-primary">{c.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-cream">Foydali manbalar</h4>
            <ul className="space-y-2 text-sm text-cream/70">
              <li>
                <a href="https://icatcare.org/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-primary">
                  International Cat Care <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a href="https://catfriendly.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-primary">
                  Cat Friendly Homes (AAFP) <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <Link to="/saqlanganlar" className="hover:text-primary">Saqlangan maqolalar</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-3xl bg-cream/5 border border-cream/10 p-5">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div className="text-sm text-cream/80 leading-relaxed">
              <p className="font-semibold text-cream mb-1">Ta’limiy ogohlantirish</p>
              <p>
                Ushbu sayt faqat ma’lumot berish maqsadida yaratilgan va
                veterinariya maslahati yoki tibbiy diagnoz o‘rnini bosmaydi.
                Sog‘liq muammolarida har doim veterinarga murojaat qiling.
                Huquqiy ma’lumotlar hudud va qonunchilikka qarab o‘zgarishi
                mumkin — rasmiy manbalarni tekshiring.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-cream/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-cream/60">
          <p>© {new Date().getFullYear()} Mushuklar Olami — CatCare Uzbekistan. Ta’limiy loyiha.</p>
          <p>Sevgi va g‘amxo‘rlik bilan yaratilgan 🐾</p>
        </div>
      </div>
    </footer>
  );
}