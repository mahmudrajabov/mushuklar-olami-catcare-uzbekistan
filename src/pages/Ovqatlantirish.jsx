import React from "react";
import { Droplets, CheckCircle2, AlertTriangle, Utensils, Baby, User, Clock, Stethoscope } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import InfoCard from "@/components/InfoCard";
import CaptionedImage from "@/components/CaptionedImage";
import { IMAGES } from "@/data/content";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";

const FOOD_TYPES = [
  { title: "Ho‘l ovqat (wet food)", text: "Yuqori namlik tarkibi suv balansini saqlaydi. Palatabillik yuqori, kaloriyada pastroq — semirish xavfini kamaytiradi." },
  { title: "Quruq ovqat (dry food)", text: "Qulay saqlash va tish tozalanishiga yordam. Yetarli suv ichish shart, chunki namligi past." },
  { title: "Tabiiy ovqat", text: "Pishirilgan go‘sht, sabzavot va tovuq. To‘liq muvozanatli retseptni veterinardan oling — yetishmaydigan moddalar xavfli." }
];

const SAFE = ["Pishirilgan tovuq va turkiya", "Pishirilgan baliq (suyaksiz)", "Tvorog (kam yog‘li)", "Sabzi va qovoq (pishirilgan)", "Ovqatlash uchun yalpiz", "Pishirilgan guruch (kam miqdorda)"];
const DANGEROUS = [
  { name: "Shokolad", why: "Teobromin zaharli — qayt qilish va yurak muammosi." },
  { name: "Piyoz va sarimsoq", why: "Qizil qon tanachalarini buzadi — anemiya xavfi." },
  { name: "Uzum va mayiz", why: "Buyrak yetishmovchiligini keltirib chiqaradi." },
  { name: "Spirtli ichimliklar", why: "Jiddiy zaharlanish va koma xavfi." },
  { name: "Suyaklar (ayniqsa pishgan)", why: "Bo‘linib ichakka zarar yetkazadi." },
  { name: "Zaharli o‘simliklar", why: "Lily, azalea, dieffenbachia mushuk uchun zaharli." }
];

const SCHEDULE = [
  { age: "Mushukcha (2–6 oy)", freq: "Kuniga 3–4 marta", note: "Yuqori kaloriyali mushukcha ovqati" },
  { age: "O‘smir (6–12 oy)", freq: "Kuniga 2–3 marta", note: "O‘smirlikdan katta ovqatga o‘tish" },
  { age: "Katta (1–7 yil)", freq: "Kuniga 2 marta", note: "Vazn nazorati muhim" },
  { age: "Keksa (7+ yil)", freq: "Kuniga 2 marta (kichik porsiyalar)", note: "Yumshoq ovqat va qo‘shimcha suv" }
];

export default function Ovqatlantirish() {
  return (
    <div>
      <PageHero
        eyebrow="Kundalik parvarish"
        title="To‘g‘ri ovqatlantirish"
        description="Ovqat turlari, xavfsiz va xavfli mahsulotlar, yoshga qarab ovqatlash jadvali va suv muhimligi."
        image={IMAGES.nutrition}
        imageAlt="Yog‘och pol ustida toza ovqat idishi"
        imageCaption="Toza, muvozanatli ovqat mushuk sog‘ligining asosi"
      />

      <section className="mx-auto max-w-7xl px-4 py-12">
        <SectionHeading id="turlari" eyebrow="Ovqat turlari" title="Ho‘l, quruq va tabiiy ovqat" />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {FOOD_TYPES.map((f) => (
            <InfoCard key={f.title} icon={Utensils} title={f.title}>{f.text}</InfoCard>
          ))}
        </div>
        <div className="mt-6">
          <InfoCard icon={Droplets} tone="primary" title="Toza suv — hayot uchun shart">
            Mushuklar tabiatan kam suv ichadi. <strong>Doimiy yangi, toza suv</strong> saqlang va
            nam ovqat yoki favvora bilan suv iste’molini oshiring. Suv idishi ovqatdan uzoqda bo‘lsin.
          </InfoCard>
        </div>
      </section>

      {/* Safe vs dangerous */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <SectionHeading id="xavfli" eyebrow="Xavfsizlik" title="Xavfsiz va xavfli mahsulotlar" />
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border-2 border-green-500/30 bg-green-500/5 p-6">
            <h3 className="flex items-center gap-2 font-bold mb-4"><CheckCircle2 className="h-5 w-5 text-green-600" /> Xavfsiz (o‘lchov bilan)</h3>
            <ul className="space-y-2">
              {SAFE.map((s) => (
                <li key={s} className="flex items-start gap-2 text-sm">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />{s}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border-2 border-destructive/30 bg-destructive/5 p-6">
            <h3 className="flex items-center gap-2 font-bold mb-4"><AlertTriangle className="h-5 w-5 text-destructive" /> Xavfli — berish mumkin emas</h3>
            <ul className="space-y-2">
              {DANGEROUS.map((d) => (
                <li key={d.name} className="rounded-2xl bg-destructive/10 p-3">
                  <p className="font-semibold text-sm">{d.name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{d.why}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Schedule table */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <SectionHeading id="jadval" eyebrow="Ovqatlash jadvali" title="Yoshga qarab ovqatlash tartibi" />
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          <div className="rounded-3xl border-2 border-border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-secondary">
                  <TableHead className="font-bold">Yosh</TableHead>
                  <TableHead className="font-bold"> chastotasi</TableHead>
                  <TableHead className="font-bold">Eslatma</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {SCHEDULE.map((r) => (
                  <TableRow key={r.age}>
                    <TableCell className="font-semibold align-top">{r.age}</TableCell>
                    <TableCell className="align-top">{r.freq}</TableCell>
                    <TableCell className="text-muted-foreground align-top">{r.note}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="space-y-4">
            <InfoCard icon={Baby} title="Mushukcha">Yuqori oqsil va kaloriya, tez-tez kichik porsiyalar.</InfoCard>
            <InfoCard icon={User} title="Katta mushuk">Muvozanatli ovqat, vazn nazorati.</InfoCard>
            <InfoCard icon={Clock} title="Keksa mushuk">Yumshoq ovqat, qo‘shimcha suv, oson hazm bo‘ladigan retsept.</InfoCard>
          </div>
        </div>
        <div className="mt-8">
          <InfoCard icon={Stethoscope} tone="accent" title="Tibbiy dieta uchun eslatma">
            Maxsus tibbiy dieta (buyrak, allergiya, semizlik) <strong>faqat veterinar
            tavsiyasi bilan</strong> tanlanishi kerak. Bu ma’lumot umumiy xarakterda va
            tibbiy maslahat o‘rnini bosmaydi.
          </InfoCard>
        </div>
        <div className="mt-8">
          <CaptionedImage src={IMAGES.nutrition} alt="Toza ovqat idishi yog‘och pol ustida" caption="Ovqat idishini har kuni yuving va yangi porsiyada bering" />
        </div>
      </section>
    </div>
  );
}