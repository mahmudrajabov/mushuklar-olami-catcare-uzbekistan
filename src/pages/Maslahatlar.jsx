import React, { useState } from "react";
import { Sun, Snowflake, Leaf, CheckCircle2, XCircle, ListChecks, HelpCircle, ClipboardList } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import InfoCard from "@/components/InfoCard";
import {
  Accordion, AccordionItem, AccordionTrigger, AccordionContent
} from "@/components/ui/accordion";

const CHECKLISTS = [
  {
    id: "adopt", icon: ClipboardList, title: "Adapsiyadan oldin tayyorgarlik",
    items: [
      "Veterinarni oldindan tanlash",
      "Moliyaviy imkoniyatni baholash (kalkulyatordan foydalaning)",
      "Uyda xavfsiz muhit yaratish",
      "Oila a’zolari bilan maslahatlashish",
      "Boshpanadan mushuk haqida ma’lumol olish"
    ]
  },
  {
    id: "newcat", icon: ListChecks, title: "Yangi mushuk ro‘yxati",
    items: [
      "Ovqat va suv idishlari",
      "Tosh quti va tosh",
      "Tashuvchi (carrier)",
      "O‘yinchoqlar va scratch post",
      "Uyqu joyi",
      "Veterinarga tashrif rejalashtirish"
    ]
  },
  {
    id: "emergency", icon: ClipboardList, title: "Shoshilinch holat ro‘yxati",
    items: [
      "Veterinariya klinikasi telefon raqami",
      "24/7 shoshilinch klinikaning manzili",
      "Tashuvchi doim tayyor",
      "Mushuk tibbiy hujjatlari (emlash daftarchasi)",
      "Transport uchun iliq/yengil kiyim himoyasi"
    ]
  },
  {
    id: "responsible", icon: ListChecks, title: "Mas’ul adapsiya ro‘yxati",
    items: [
      "Butun umrlik mas’uliyatga tayyorlik",
      "Sterilizatsiya/kastratsiya rejasi",
      "Muntazam veterinariya tekshiruvi",
      "Mehribon va barqaror muhit",
      "Sayohat va bayramlar uchun reja"
    ]
  }
];

const FAQ = [
  { q: "Mushukni qanchalik tez-tez veterinarga olib borish kerak?", a: "Sog‘lom mushuk uchun yiliga kamida bir marta profilaktik tekshiruv tavsiya etiladi. Keksa mushuklar uchun 6 oyda bir marta. Emlash jadvalini veterinar belgilaydi." },
  { q: "Mushukni vanna qilish kerakmi?", a: "Mushuklar ko‘pincha o‘zini tozalaydi va hammomga muhtoj emas. Faqat ifloslangan yoki veterinar tavsiyasi bo‘yicha, maxsus mushuk shampuni bilan yuving." },
  { q: "Mushuk qancha uxlaydi?", a: "Kattalar kuniga odatda 12–16 soat uxlaydi. Mushukchalar va keksa mushuklar undan ham ko‘p. Bu tabiiy ritm." },
  { q: "Nima uchun sterilizatsiya muhim?", a: "U giperpopulyatsiyani insoniy tarzda nazorat qiladi va ba’zi kasalliklar xavfini kamaytiradi. Vaqtini veterinar bilan maslahatlashing." },
  { q: "Mushukni qanday tanishtirish kerak?", a: "Yangi mushukni alohida xonada bir necha kun ushlang, keyin hid orqali tanishtiring. To‘g‘ridan-to‘g‘ri uchrashuvga shoshilmang — bosqichma-bosqich." }
];

const PLANTS_SAFE = ["O‘rgimchak o‘simlik (spider)", "Boston ferns", "Areca palma", "O‘rgimchak o‘t", "Kashich guli (calathea)"];
const PLANTS_DANGER = ["Lily (zambak)", "Azalea", "Dieffenbachia", "Sariq lola", "Aloe (ba’zi turlari)"];

export default function Maslahatlar() {
  const [checked, setChecked] = useState({});

  const toggle = (key) => setChecked((c) => ({ ...c, [key]: !c[key] }));

  return (
    <div>
      <PageHero
        eyebrow="Kundalik parvarish"
        title="Foydali maslahatlar"
        description="Mavsumiy parvarish, o‘simliklar, adapsiya va shoshilinch holatlar uchun ro‘yxatlar va tez-tez beriladigan savollar."
      />

      {/* Seasonal */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <SectionHeading id="mavsum" eyebrow="Mavsumiy parvarish" title="Yoz va qishda g‘amxo‘rlik" />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <InfoCard icon={Sun} tone="accent" title="Yozda">
            <ul className="space-y-2 mt-2">
              <li>Doimiy yangi suv va soya</li>
              <li>Issiq avtomobilda mushuk qoldirmang</li>
              <li>Quyosh urishi va issiqlikdan himoya</li>
              <li>Parazitlardan muntazam himoya</li>
            </ul>
          </InfoCard>
          <InfoCard icon={Snowflake} title="Qishda">
            <ul className="space-y-2 mt-2">
              <li>Ilq va quruq uyqu joyi</li>
              <li>Isitgichlardan xavfsiz masofa</li>
              <li>Antifriz va kimyodan saqlang</li>
              <li>Ko‘cha mushuklar uchun iliq boshpana</li>
            </ul>
          </InfoCard>
        </div>
      </section>

      {/* Plants */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <SectionHeading eyebrow="O‘simliklar" title="Xavfsiz va xavfli o‘simliklar" />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border-2 border-green-500/30 bg-green-500/5 p-6">
            <h3 className="flex items-center gap-2 font-bold mb-4"><Leaf className="h-5 w-5 text-green-600" /> Xavfsiz o‘simliklar</h3>
            <ul className="space-y-2">
              {PLANTS_SAFE.map((p) => (
                <li key={p} className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-green-600" />{p}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border-2 border-destructive/30 bg-destructive/5 p-6">
            <h3 className="flex items-center gap-2 font-bold mb-4"><XCircle className="h-5 w-5 text-destructive" /> Xavfli o‘simliklar</h3>
            <ul className="space-y-2">
              {PLANTS_DANGER.map((p) => (
                <li key={p} className="flex items-center gap-2 text-sm"><XCircle className="h-4 w-4 text-destructive" />{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Checklists */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <SectionHeading id="checklist" eyebrow="Ro‘yxatlar" title="Amaliy tayyorgarlik ro‘yxatlari" description="Bosib belgilang va tayyorgarlikni kuzating." />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {CHECKLISTS.map((cl) => {
            const Icon = cl.icon;
            return (
              <div key={cl.id} className="rounded-3xl border-2 border-border bg-card p-6">
                <h3 className="flex items-center gap-2 font-bold mb-4">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary"><Icon className="h-4 w-4" /></span>
                  {cl.title}
                </h3>
                <ul className="space-y-2">
                  {cl.items.map((item) => {
                    const key = `${cl.id}-${item}`;
                    const done = !!checked[key];
                    return (
                      <li key={item}>
                        <button
                          onClick={() => toggle(key)}
                          className="flex w-full items-center gap-2 rounded-2xl p-2 text-left text-sm hover:bg-secondary transition-colors"
                        >
                          <span className={`inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2 ${done ? "bg-primary border-primary text-primary-foreground" : "border-border"}`}>
                            {done && <CheckCircle2 className="h-3.5 w-3.5" />}
                          </span>
                          <span className={done ? "line-through text-muted-foreground" : ""}>{item}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <SectionHeading eyebrow="Savol-javob" title="Tez-tez beriladigan savollar" />
        <div className="mt-8 max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="rounded-3xl border-2 border-border overflow-hidden">
            {FAQ.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-border last:border-0">
                <AccordionTrigger className="px-5 py-4 text-left font-semibold hover:no-underline">
                  <span className="flex items-center gap-2"><HelpCircle className="h-4 w-4 text-primary shrink-0" />{f.q}</span>
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-4 text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}