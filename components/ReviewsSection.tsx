"use client";

import FadeIn from "./FadeIn";
import { useLanguage } from "./LanguageProvider";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 mb-4 text-yellow-400">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? "fill-current" : "text-gray-600 stroke-current fill-none"}`}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  const { t } = useLanguage();

  const reviews = [
    { name: "Ahmed K.", role: t("review_1_role"), text: t("review_1_text"), rating: 5 },
    { name: "Sara M.", role: t("review_2_role"), text: t("review_2_text"), rating: 5 },
    { name: "Ali R.", role: t("review_3_role"), text: t("review_3_text"), rating: 5 },
    { name: "Yusuf", role: t("review_4_role"), text: t("review_4_text"), rating: 5 },
    { name: "Rami", role: t("review_5_role"), text: t("review_5_text"), rating: 5 },
    { name: "Hassan", role: t("review_6_role"), text: t("review_6_text"), rating: 5 },
    { name: "Lina", role: t("review_7_role"), text: t("review_7_text"), rating: 5 },
    { name: "Tarik", role: t("review_8_role"), text: t("review_8_text"), rating: 5 },
    { name: "Omar", role: t("review_9_role"), text: t("review_9_text"), rating: 5 },
    { name: "Dilan", role: t("review_10_role"), text: t("review_10_text"), rating: 5 },
  ];

  return (
    <section className="py-24 relative z-10 bg-white/[0.02] border-y border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 mb-12">
        <FadeIn direction="up">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-white">
              {t("reviews_heading_1")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">{t("reviews_heading_2")}</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              {t("reviews_subheading")}
            </p>
          </div>
        </FadeIn>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden flex [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <div className="flex w-max animate-marquee gap-6 px-3">
          {/* Duplicate list twice for seamless infinite scrolling */}
          {[...reviews, ...reviews].map((review, i) => (
            <div key={i} className="glass-card p-8 rounded-3xl w-[320px] sm:w-[400px] h-full flex flex-col relative overflow-hidden group shrink-0">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              
              <StarRating rating={review.rating} />
              <p className="text-gray-300 leading-relaxed mb-8 relative z-10 flex-1">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-gray-700 to-gray-500 flex items-center justify-center text-white font-bold text-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold">{review.name}</h4>
                  <span className="text-sm text-gray-400">{review.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
