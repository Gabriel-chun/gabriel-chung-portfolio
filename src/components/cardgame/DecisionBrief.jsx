import React from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export default function DecisionBrief() {
  const { lang } = useLanguage();
  const t = translations[lang].suite.brief;
  return (
    <div className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-mono text-[#3E5C76] tracking-widest uppercase mb-3">{t.label}</p>
        <h3 className="font-heading text-2xl md:text-3xl text-[#1A1A1A] leading-tight mb-8">
          {t.title}
        </h3>
        <div className="max-w-3xl bg-[#F9F9F7] border border-[#E0DDD8] rounded-lg shadow-lg p-8">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#3E5C76]" />
            <p className="text-xs font-mono text-[#757575] uppercase tracking-wider">
              {t.headerLabel}
            </p>
          </div>
          <div className="space-y-5">
            {t.fields.map((field) => (
              <div key={field.label}>
                <p className="text-xs font-mono text-[#3E5C76] uppercase tracking-wider mb-1">
                  {field.label}
                </p>
                <p className="text-sm text-[#1A1A1A] leading-relaxed font-body">{field.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}