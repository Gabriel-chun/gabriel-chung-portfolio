import React from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export default function Demonstrates() {
  const { lang } = useLanguage();
  const t = translations[lang].suite.demonstrates;
  return (
    <div className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-mono text-[#3E5C76] tracking-widest uppercase mb-3">{t.label}</p>
        <h3 className="font-heading text-2xl md:text-3xl text-[#1A1A1A] leading-tight mb-8">
          {t.title}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl">
          {t.items.map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="text-[#3E5C76] font-mono text-xs mt-0.5">{String(i + 1).padStart(2, '0')}</span>
              <p className="text-sm text-[#1A1A1A] font-body">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}