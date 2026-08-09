"use client";

import { useLanguage } from "@/components/LanguageProvider";

const PAYMENT_METHODS = [
  {
    id: "fib",
    name: "FIB",
    fullName: "First Iraqi Bank",
    color: "from-green-500 to-green-600",
    bg: "bg-green-50",
    border: "border-green-100",
    text: "text-green-700",
  },
  {
    id: "fastpay",
    name: "FastPay",
    fullName: "FastPay",
    color: "from-orange-500 to-orange-600",
    bg: "bg-orange-50",
    border: "border-orange-100",
    text: "text-orange-700",
  },
  {
    id: "zaincash",
    name: "ZainCash",
    fullName: "ZainCash",
    color: "from-red-500 to-red-600",
    bg: "bg-red-50",
    border: "border-red-100",
    text: "text-red-700",
  },
];

export default function PaymentMethods() {
  const { t } = useLanguage();

  return (
    <section
      className="py-16 sm:py-20 bg-gray-50"
      aria-labelledby="payment-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2
            id="payment-heading"
            className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight"
          >
            {t("payment_heading")}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {PAYMENT_METHODS.map((method) => (
            <div
              key={method.id}
              className={`flex flex-col items-center justify-center ${method.bg} border ${method.border} rounded-2xl p-6 transition-transform hover:-translate-y-0.5`}
            >
              {/* Text logo */}
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${method.color} text-white font-extrabold text-lg shadow-sm mb-3`}
                aria-hidden="true"
              >
                {method.name.slice(0, 2)}
              </div>
              <span className={`font-bold text-base ${method.text}`}>{method.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
