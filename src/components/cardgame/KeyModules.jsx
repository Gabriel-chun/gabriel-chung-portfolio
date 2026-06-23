import React from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export default function KeyModules() {
  const { lang } = useLanguage();
  const t = translations[lang].suite.modules;
  return (
    <div className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-mono text-[#3E5C76] tracking-widest uppercase mb-3">{t.label}</p>
        <h3 className="font-heading text-2xl md:text-3xl text-[#1A1A1A] leading-tight mb-8">
          {t.title}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {t.items.map((mod) => (
            <div key={mod} className="border border-[#E0DDD8] bg-white rounded px-4 py-3 text-center">
              <p className="text-xs font-medium text-[#1A1A1A] font-body">{mod}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}