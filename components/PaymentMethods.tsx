"use client";

import { useLanguage } from "@/components/LanguageProvider";

const PAYMENT_METHODS = [
  {
    id: "fib",
    abbr: "FI",
    name: "FIB",
    gradient: "from-emerald-500 to-emerald-600",
    glow: "shadow-emerald-500/20",
    border: "border-emerald-500/20",
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
  },
  {
    id: "fastpay",
    abbr: "FP",
    name: "FastPay",
    gradient: "from-orange-500 to-amber-500",
    glow: "shadow-orange-500/20",
    border: "border-orange-500/20",
    bg: "bg-orange-500/10",
    text: "text-orange-400",
  },
  {
    id: "zaincash",
    abbr: "ZC",
    name: "ZainCash",
    gradient: "from-red-500 to-rose-600",
    glow: "shadow-red-500/20",
    border: "border-red-500/20",
    bg: "bg-red-500/10",
    text: "text-red-400",
  },
];

export default function PaymentMethods() {
  const { t } = useLanguage();

  return (
    <section
      className="py-20 sm:py-24 bg-[#050B18]"
      aria-labelledby="payment-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-blue-400 text-xs font-bold tracking-[0.2em] uppercase mb-3">Local payment</p>
          <h2
            id="payment-heading"
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            {t("payment_heading")}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {PAYMENT_METHODS.map((m) => (
            <div
              key={m.id}
              className={`glass-card flex flex-col items-center justify-center gap-3 p-7`}
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${m.gradient} text-white font-extrabold text-lg flex items-center justify-center shadow-lg ${m.glow}`}
                aria-hidden="true"
              >
                {m.abbr}
              </div>
              <span className={`font-bold text-base ${m.text}`}>{m.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
