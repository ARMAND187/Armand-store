"use client";

import { useLanguage } from "@/components/LanguageProvider";

const PAYMENT_METHODS = [
  {
    id: "fib",
    name: "FIB",
    logo: "/logo-fib.svg",
  },
  {
    id: "fastpay",
    name: "FastPay",
    logo: "/logo-fastpay.png",
  },
  {
    id: "zaincash",
    name: "ZainCash",
    logo: "/logo-zaincash.jpg",
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

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {PAYMENT_METHODS.map((m) => (
            <div
              key={m.id}
              className="glass-card flex flex-col items-center justify-center gap-6 p-8"
            >
              <div className="h-16 w-full flex items-center justify-center">
                <img
                  src={m.logo}
                  alt={`${m.name} logo`}
                  className="max-h-full max-w-full object-contain drop-shadow-sm"
                  loading="lazy"
                />
              </div>
              <span className="font-bold text-base text-white">{m.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
