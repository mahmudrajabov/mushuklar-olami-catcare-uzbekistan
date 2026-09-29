import React, { useState } from "react";
import { Siren, X, Phone } from "lucide-react";

const WARNING_SIGNS = [
  "Og‘ir yoki tez nafas olish, nafas qisishi",
  "Holsizlik, javob bermaslik yoki hushsizlik",
  "Qayt qilish yoki diareya (ayniqsa qonli)",
  "Siydik muammosi yoki og‘riq bilan urinish",
  "Tana haroratining keskin o‘zgarishi",
  "Shikast, qon ketish yoki kuchli og‘riq",
  "Ko‘z, quloq yoki og‘izda keskin o‘zgarish"
];

export default function EmergencyButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="emergency-pulse fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-destructive px-5 py-3.5 text-sm font-bold text-destructive-foreground shadow-xl hover:scale-105 transition-transform"
      >
        <Siren className="h-5 w-5" />
        <span className="hidden sm:inline">SHOSHILINCH YORDAM</span>
        <span className="sm:hidden">YORDAM</span>
      </button>

      {open && (
        <div className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center p-4">
          <div className="absolute inset-0 bg-navy/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="relative w-full max-w-lg rounded-3xl bg-card shadow-2xl border border-destructive/30 max-h-[85vh] overflow-y-auto">
            <div className="sticky top-0 flex items-center justify-between bg-destructive text-destructive-foreground px-5 py-4 rounded-t-3xl">
              <div className="flex items-center gap-2">
                <Siren className="h-5 w-5" />
                <h3 className="font-bold">Shoshilinch yordam eslatmasi</h3>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Yopish" className="rounded-full p-1 hover:bg-white/20">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-5 space-y-4">
              <p className="text-sm text-muted-foreground">
                Quyidagi holatlarda <strong className="text-foreground">darhol</strong> veterinarga
                murojaat qiling. Bu alomatlar jiddiy muammo belgisi bo‘lishi mumkin.
              </p>
              <ul className="space-y-2">
                {WARNING_SIGNS.map((s, i) => (
                  <li key={i} className="flex items-start gap-2 rounded-2xl bg-destructive/5 p-3 text-sm">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-destructive" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
              <div className="rounded-2xl bg-navy text-cream p-4 text-sm">
                <p className="font-semibold mb-1 flex items-center gap-2">
                  <Phone className="h-4 w-4" /> Transport va xavfsizlik
                </p>
                <p className="text-cream/80">
                  Mushukni qattiq qo‘rqitmasdan, qulay tashuvchi bilan sokin
                  ko‘chiring. Issiqlik/sovuqdan himoya qiling va yo‘lda
                  sukunat saqlang.
                </p>
              </div>
              <p className="text-xs text-muted-foreground border-t border-border pt-3">
                Bu ma’lumot ta’limiy xarakterda. Diagnoz qo‘yilmaydi — har doim
                malakali veterinarga murojaat qiling.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}