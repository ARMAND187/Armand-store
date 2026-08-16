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
    imgClass: "scale-[1.5] brightness-[1.4] contrast-125", 
  },
  {
    id: "qicard",
    name: "Qi Card",
    logo: "/logo-qicard.png",
    imgClass: "scale-110 drop-shadow-md rounded-lg", 
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {PAYMENT_METHODS.map((m) => (
            <div
              key={m.id}
              className="glass-card w-full flex flex-row items-center justify-start gap-2 sm:gap-4 p-3 sm:p-5 cursor-pointer hover:bg-white/5 transition-colors"
              onClick={() => trackPaymentClick(m.name)}
              role="button"
              tabIndex={0}
              aria-label={`Pay with ${m.name}`}
              onKeyDown={(e) => e.key === 'Enter' && trackPaymentClick(m.name)}
            >
              <div className="h-10 w-14 sm:h-12 sm:w-16 flex items-center justify-center shrink-0">
                <img
                  src={m.logo}
                  alt={`${m.name} logo`}
                  className={`max-h-full max-w-full object-contain drop-shadow-sm ${m.imgClass}`}
                  loading="lazy"
                />
              </div>
              <span className="font-bold text-sm sm:text-base text-white text-left whitespace-nowrap">{m.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
