"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { trackPaymentClick } from "@/lib/analytics";

const PAYMENT_METHODS = [
  {
    id: "fib",
    name: "FIB",
    logo: "/logo-fib.svg",
    imgClass: "h-12 sm:h-16 w-auto",
  },
  {
    id: "fastpay",
    name: "FastPay",
    logo: "/logo-fastpay.png",
    // Increased by ~30% from h-8 to h-10/11 so it is comparable to FIB
    imgClass: "h-14 sm:h-18 w-auto",
  },
  {
    id: "zaincash",
    name: "ZainCash",
    logo: "/logo-zaincash-trans.png",
    // Make ZainCash ~2x larger and slightly brighter/higher contrast for readability against dark navy
    imgClass: "h-40 sm:h-48 w-auto scale-[1.3] brightness-[1.4] contrast-125", 
  },
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

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          {PAYMENT_METHODS.map((m) => (
            <div
              key={m.id}
              className="glass-card flex-1 w-full flex flex-col items-center justify-center gap-6 p-8 cursor-pointer"
              onClick={() => trackPaymentClick(m.name)}
              role="button"
              tabIndex={0}
              aria-label={`Pay with ${m.name}`}
              onKeyDown={(e) => e.key === 'Enter' && trackPaymentClick(m.name)}
            >
              <div className="h-24 sm:h-32 w-full flex items-center justify-center">
                <img
                  src={m.logo}
                  alt={`${m.name} logo`}
                  className={`object-contain drop-shadow-sm ${m.imgClass}`}
                  loading="lazy"
                />
              </div>
              <span className="font-bold text-base sm:text-lg text-white">{m.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
