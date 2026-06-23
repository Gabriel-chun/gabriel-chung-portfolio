import React from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export default function ProductOpportunity() {
  const { lang } = useLanguage();
  const t = translations[lang].suite.opportunity;
  return (
    <div className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="text-sm font-mono text-[#3E5C76] tracking-widest uppercase mb-3">{t.label}</p>
            <h3 className="font-heading text-2xl md:text-3xl text-[#1A1A1A] leading-tight mb-4">
              {t.title}
            </h3>
            <p className="text-base text-[#757575] leading-relaxed font-body">
              {t.description}
            </p>
          </div>
          <div className="lg:col-span-7">
            <p className="text-xs font-mono text-[#757575] uppercase tracking-wider mb-4">
              {t.directionsLabel}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {t.directions.map((d) => (
                <div key={d} className="flex items-start gap-2">
                  <span className="text-[#3E5C76] mt-0.5 text-xs">→</span>
                  <p className="text-sm text-[#1A1A1A] font-body">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}