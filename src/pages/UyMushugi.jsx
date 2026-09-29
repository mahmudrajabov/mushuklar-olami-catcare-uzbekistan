import React from "react";
import { Home, TreePine, ShieldCheck, AlertTriangle, Tag } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import InfoCard from "@/components/InfoCard";
import CaptionedImage from "@/components/CaptionedImage";
import { IMAGES } from "@/data/content";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";

const COMPARISON = [
  { aspect: "Xavfsizlik", indoor: "Yuqori — tiriklik va transport xavfi kam", outdoor: "Past — transport, yirtqichlar va boshqa mushuklar" },
  { aspect: "Ovqatga kirish", indoor: "Barqaror, nazorat ostida", outdoor: "Nopredvidumum — ov va begona ovqat" },
  { aspect: "Kasallik/parazit xavfi", indoor: "Past", outdoor: "Yuqori — parazitlar, yuqumli kasalliklar" },
  { aspect: "Inson bilan muloqot", indoor: "Doimiy, yaqin", outdoor: "Chegaralangan, ko‘pincha mustaqil" },
  { aspect: "Faollik darajasi", indoor: "O‘yin va boyitish kerak", outdoor: "Yuqori tabiiy faollik" },
  { aspect: "Hayot davomiyligi", indoor: "Odatda ancha uzun (15+ yil)", outdoor: "Odatda qisqaroq (xavflarga bog‘liq)" },
  { aspect: "Veterinarga kirish", indoor: "Oson va muntazam", outdoor: "Qiyinroq, kamroq muntazam" },
  { aspect: "Ob-havo xavfi", indoor: "Himoyali", outdoor: "Issiqlik, sovuq va namlik xavfi" }
];

export default function UyMushugi() {
  return (
    <div>
      <PageHero
        eyebrow="Etika va xarajatlar"
        title="Uy mushugi va ko‘cha mushugi"
        description="Indoor va outdoor hayot taqqosi — xavfsizlik, kasallik, faollik va hayot davomiyligi bo‘yicha."
      />

      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-6 md:grid-cols-2">
          <CaptionedImage src={IMAGES.indoor} alt="Deraza oldida o‘tirgan uy mushugi" caption="Indoor mushuk — xavfsiz va kuzatiladigan muhitda" />
          <CaptionedImage src={IMAGES.outdoor} alt="Bog‘da maxsus kamar bilan ko‘cha mushugi" caption="Outdoor vaqt — nazorat va kamar bilan xavfsiz" />
        </div>
      </section>

      {/* Comparison table */}
      <section className="mx-auto max-w-7xl px-4 py-8">
        <SectionHeading id="taqqos" eyebrow="Taqqoslash" title="Indoor va outdoor: to‘liq jadval" />
        <div className="mt-8 rounded-3xl border-2 border-border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-secondary">
                <TableHead className="font-bold">Mezon</TableHead>
                <TableHead className="font-bold">Uy mushugi (indoor)</TableHead>
                <TableHead className="font-bold">Ko‘cha mushugi (outdoor)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {COMPARISON.map((r) => (
                <TableRow key={r.aspect}>
                  <TableCell className="font-semibold align-top">{r.aspect}</TableCell>
                  <TableCell className="align-top text-muted-foreground">{r.indoor}</TableCell>
                  <TableCell className="align-top text-muted-foreground">{r.outdoor}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

      {/* Pros and cons */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border-2 border-green-500/30 bg-green-500/5 p-6">
            <h3 className="flex items-center gap-2 font-bold mb-4"><Home className="h-5 w-5 text-green-600" /> Indoor afzalliklari</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2"><ShieldCheck className="h-4 w-4 text-green-600 shrink-0 mt-0.5" /> Xavfsiz, uzoq umr</li>
              <li className="flex gap-2"><ShieldCheck className="h-4 w-4 text-green-600 shrink-0 mt-0.5" /> Kasallik va parazit xavfi past</li>
              <li className="flex gap-2"><ShieldCheck className="h-4 w-4 text-green-600 shrink-0 mt-0.5" /> Doimiy veterinariya nazorati</li>
            </ul>
            <h4 className="font-semibold mt-5 mb-2 text-sm">Risklar</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2"><AlertTriangle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" /> Yetarli o‘yin va boyitish kerak</li>
              <li className="flex gap-2"><AlertTriangle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" /> Semirish xavfi — vazn nazorati</li>
            </ul>
          </div>
          <div className="rounded-3xl border-2 border-amber-500/30 bg-amber-500/5 p-6">
            <h3 className="flex items-center gap-2 font-bold mb-4"><TreePine className="h-5 w-5 text-amber-600" /> Outdoor afzalliklari</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2"><ShieldCheck className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" /> Tabiiy faollik va tadqiqot</li>
              <li className="flex gap-2"><ShieldCheck className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" /> Boyitilgan muhit</li>
            </ul>
            <h4 className="font-semibold mt-5 mb-2 text-sm">Risklar</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2"><AlertTriangle className="h-4 w-4 text-destructive shrink-0 mt-0.5" /> Transport va yirtqich xavfi</li>
              <li className="flex gap-2"><AlertTriangle className="h-4 w-4 text-destructive shrink-0 mt-0.5" /> Kasallik, parazit va jang xavfi</li>
              <li className="flex gap-2"><AlertTriangle className="h-4 w-4 text-destructive shrink-0 mt-0.5" /> Qisqaroq umr ko‘rish ehtimoli</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Safe outdoor */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <SectionHeading eyebrow="Xavfsiz outdoor" title="Nazorat va bosqichma-bosqich moslashuv" />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <InfoCard icon={ShieldCheck} title="Nazorat ostida">
            Outdoor vaqt doimo nazorat ostida bo‘lishi kerak. Maxsus kamar yoki
            xavfsiz bog‘ (catio) ishlating.
          </InfoCard>
          <InfoCard icon={Tag} title="Identifikatsiya">
            Mikrochip va yaxlit yorliq (medalyon) mushuk yo‘qolsa tez topishga
            yordam beradi.
          </InfoCard>
          <InfoCard icon={TreePine} title="Bosqichma-bosqich">
            Mushukni outdoorga asta-sekin, qisqa vaqt bilan ko‘niktiring. Har doim
            qaytish yo‘lini o‘rgating.
          </InfoCard>
        </div>
      </section>
    </div>
  );
}