"use client";

import { useLanguage } from "@/components/LanguageProvider";

const PAYMENT_METHODS = [
  {
    id: "fib",
    name: "FIB",
    logo: "/logo-fib.svg",
    imgClass: "h-10 w-auto",
  },
  {
    id: "fastpay",
    name: "FastPay",
    logo: "/logo-fastpay.png",
    imgClass: "h-8 w-auto",
  },
  {
    id: "zaincash",
    name: "ZainCash",
    logo: "/logo-zaincash.jpg",
    imgClass: "h-14 w-auto rounded-xl", 
  },
];

export default function PaymentMethods() {
  const { t } = useLanguage();

  return (
    <section
      className="py-16 sm:py-20 bg-[#050B18]"
      aria-labelledby="payment-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <p className="text-blue-400 text-xs font-bold tracking-[0.2em] uppercase mb-3">Local payment</p>
          <h2
            id="payment-heading"
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            {t("payment_heading")}
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          {PAYMENT_METHODS.map((m) => (
            <div
              key={m.id}
              className="glass-card flex-1 w-full flex flex-col items-center justify-center gap-5 p-6"
            >
              <div className="h-16 w-full flex items-center justify-center">
                <img
                  src={m.logo}
                  alt={`${m.name} logo`}
                  className={`object-contain drop-shadow-sm ${m.imgClass}`}
                  loading="lazy"
                />
              </div>
              <span className="font-bold text-sm text-white">{m.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
