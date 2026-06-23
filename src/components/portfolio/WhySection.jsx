import React from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export default function WhySection() {
  const { lang } = useLanguage();
  const t = translations[lang].why;
  return (
    <section className="py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="text-sm font-mono text-[#3E5C76] tracking-widest uppercase mb-3">{t.label}</p>
            <h2 className="font-heading text-3xl md:text-4xl text-[#1A1A1A] leading-tight">
              {t.title}
            </h2>
          </div>
          <div className="lg:col-span-8">
            <p className="text-lg text-[#1A1A1A] leading-relaxed mb-6 font-body">{t.p1}</p>
            <p className="text-base text-[#757575] leading-relaxed font-body">{t.p2}</p>
          </div>
        </div>
      </div>
    </section>
  );
}