import React, { useState, useEffect, useMemo } from "react";
import { Utensils, Trash2, Syringe, Bug, Scissors, Gamepad2, Ambulance, Calculator, Info, RotateCcw } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import InfoCard from "@/components/InfoCard";
import { getCalcSettings, saveCalcSettings } from "@/lib/storage";

// Approximate monthly ranges in so'm. Estimates only — vary by city, brand, clinic.
const ITEMS = [
  { id: "food", label: "Ovqat", icon: Utensils, min: 80000, max: 600000, step: 10000, default: 250000, desc: "Quruq/ho‘l ovqat, brandga qarab" },
  { id: "litter", label: "Tosh (litter)", icon: Trash2, min: 30000, max: 200000, step: 5000, default: 80000, desc: "Oylik tosh sarfi" },
  { id: "vaccine", label: "Emlash (oylik o‘rtacha)", icon: Syringe, min: 0, max: 150000, step: 5000, default: 30000, desc: "Yillik emlash oylikka taqsimlanganda" },
  { id: "parasite", label: "Parazitlardan himoya", icon: Bug, min: 20000, max: 120000, step: 5000, default: 40000, desc: "Burga, qon, ichak parazitlari" },
  { id: "grooming", label: "Grooming", icon: Scissors, min: 0, max: 200000, step: 10000, default: 50000, desc: "Professional grooming yoki uyda vositalar" },
  { id: "toys", label: "O‘yinchoq va aksessuar", icon: Gamepad2, min: 20000, max: 200000, step: 5000, default: 50000, desc: "O‘yinchoq, scratch post va boshqa" },
  { id: "emergency", label: "Veterinar zaxira (shoshilinch)", icon: Ambulance, min: 0, max: 500000, step: 25000, default: 100000, desc: "Kutilmagan xarajatlar uchun oylik zaxira" }
];

const fmt = (n) => new Intl.NumberFormat("uz-UZ").format(Math.round(n)) + " so‘m";

export default function Xarajatlar() {
  const [values, setValues] = useState(() => {
    const saved = getCalcSettings();
    const init = {};
    ITEMS.forEach((it) => { init[it.id] = saved?.[it.id] ?? it.default; });
    return init;
  });

  useEffect(() => {
    saveCalcSettings(values);
  }, [values]);

  const total = useMemo(() => Object.values(values).reduce((a, b) => a + b, 0), [values]);

  const reset = () => {
    const init = {};
    ITEMS.forEach((it) => { init[it.id] = it.default; });
    setValues(init);
  };

  return (
    <div>
      <PageHero
        eyebrow="Etika va xarajatlar"
        title="Xarajatlar kalkulyatori"
        description="Oylik mushuk xarajatlarini taxminiy hisoblang. Qiymatlar o‘zgartiriladi va brauzeringizda saqlanadi."
      />

      <div className="mx-auto max-w-7xl px-4">
        <InfoCard icon={Info} tone="accent" title="Taxminiy qiymatlar haqida">
          Barcha raqamlar <strong>taxminiy</strong> va umumiy ma’lumot uchun. Haqiqiy
          narxlar shahar, brend, klinik va mushuk ehtiyojiga qarab o‘zgaradi.
          Aniq narxlar uchun mahalliy do‘kon va klinikalardan so‘rang.
        </InfoCard>
      </div>

      <section className="mx-auto max-w-7xl px-4 py-12">
        <SectionHeading id="kalkulyator" eyebrow="Kalkulyator" title="Oylik xarajatlarni hisoblang" />

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          {/* Sliders */}
          <div className="space-y-5">
            {ITEMS.map((it) => {
              const Icon = it.icon;
              const val = values[it.id];
              return (
                <div key={it.id} className="rounded-3xl border-2 border-border bg-card p-5">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="font-semibold leading-tight">{it.label}</p>
                        <p className="text-xs text-muted-foreground">{it.desc}</p>
                      </div>
                    </div>
                    <span className="font-bold text-primary whitespace-nowrap">{fmt(val)}</span>
                  </div>
                  <input
                    type="range"
                    min={it.min}
                    max={it.max}
                    step={it.step}
                    value={val}
                    onChange={(e) => setValues((v) => ({ ...v, [it.id]: Number(e.target.value) }))}
                    className="mt-4 w-full accent-primary"
                    aria-label={it.label}
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>{fmt(it.min)}</span>
                    <span>{fmt(it.max)}</span>
                  </div>
                </div>
              );
            })}
            <button
              onClick={reset}
              className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-semibold hover:bg-primary/10 transition-colors"
            >
              <RotateCcw className="h-4 w-4" /> Standart qiymatlarga qaytarish
            </button>
          </div>

          {/* Total card */}
          <div className="lg:sticky lg:top-24 h-fit">
            <div className="rounded-[2rem] bg-navy text-cream p-7 shadow-xl">
              <div className="flex items-center gap-2 text-cream/70 text-sm font-semibold">
                <Calculator className="h-4 w-4" /> Oylik taxminiy jami
              </div>
              <p className="mt-3 text-4xl font-bold text-primary">{fmt(total)}</p>
              <p className="mt-1 text-sm text-cream/60">taxminan oyiga</p>

              <div className="mt-6 space-y-2 border-t border-cream/10 pt-4">
                {ITEMS.map((it) => (
                  <div key={it.id} className="flex justify-between text-sm">
                    <span className="text-cream/70">{it.label}</span>
                    <span className="font-medium">{fmt(values[it.id])}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-cream/10 p-3 text-xs text-cream/70">
                Sozlamalar brauzeringizda saqlanadi — sahifani qayta ochsangiz
                qiymatlar saqlanadi.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info cards */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <SectionHeading eyebrow="Tushuntirish" title="Xarajatlar haqida umumiy ma’lumot" />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <InfoCard icon={Utensils} title="Ovqat">Sifatli ovqat sog‘liq uchun investitsiya — arzon ovqat keyinchalik veterinariya xarajatiga aylanishi mumkin.</InfoCard>
          <InfoCard icon={Syringe} title="Emlash">Profilaktika davolashdan arzon — yillik emlash muhim xarajat.</InfoCard>
          <InfoCard icon={Ambulance} title="Zaxira">Shoshilinch xarajatlar uchun oylik zaxira ajratish tavsiya etiladi.</InfoCard>
        </div>
      </section>
    </div>
  );
}