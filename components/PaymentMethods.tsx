"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { trackPaymentClick } from "@/lib/analytics";

const PAYMENT_METHODS = [
  {
    id: "fib",
    name: "FIB",
    logo: "/logo-fib.svg",
    imgClass: "scale-110",
  },
  {
    id: "fastpay",
    name: "FastPay",
    logo: "/logo-fastpay.png",
    imgClass: "scale-125",
  },
  {
    id: "zaincash",
    name: "ZainCash",
    logo: "/logo-zaincash-trans.png",
    imgClass: "scale-[2.2] brightness-[1.5] contrast-125", 
  },
  {
    id: "qicard",
    name: "Qi Card",
    logo: "/logo-qicard.svg",
    imgClass: "scale-[1.5]", 
  }
];

export default function PaymentMethods() {
  const { t } = useLanguage();

  return (
    <section
      className="relative z-10"
      aria-labelledby="payment-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <p className="section-eyebrow mb-3">{t("payment_eyebrow")}</p>
          <h2
            id="payment-heading"
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            {t("payment_heading")}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {PAYMENT_METHODS.map((m) => (
            <div
              key={m.id}
              className="glass-card w-full flex flex-col items-center justify-center gap-4 sm:gap-6 p-6 sm:p-8 cursor-pointer hover:bg-white/5 transition-colors"
              onClick={() => trackPaymentClick(m.name)}
              role="button"
              tabIndex={0}
              aria-label={`Pay with ${m.name}`}
              onKeyDown={(e) => e.key === 'Enter' && trackPaymentClick(m.name)}
            >
              <div className="h-16 w-24 sm:h-20 sm:w-32 flex items-center justify-center">
                <img
                  src={m.logo}
                  alt={`${m.name} logo`}
                  className={`max-h-full max-w-full object-contain drop-shadow-sm ${m.imgClass}`}
                  loading="lazy"
                />
              </div>
              <span className="font-bold text-sm sm:text-lg text-white text-center whitespace-nowrap">{m.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
