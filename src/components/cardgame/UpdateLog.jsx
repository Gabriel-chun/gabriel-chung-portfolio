import React from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { translations, logStatusStyles } from "@/lib/translations";

export default function UpdateLog() {
  const { lang } = useLanguage();
  const t = translations[lang].suite.updateLog;
  return (
    <div className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-mono text-[#3E5C76] tracking-widest uppercase mb-3">{t.label}</p>
        <h3 className="font-heading text-2xl md:text-3xl text-[#1A1A1A] leading-tight mb-4">
          {t.title}
        </h3>
        <p className="text-sm text-[#757575] font-body mb-10 max-w-2xl">
          {t.description}
        </p>
        <div className="max-w-3xl space-y-0">
          {t.entries.map((entry, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-2 h-2 rounded-full bg-[#3E5C76] mt-1.5 flex-shrink-0" />
                {i < t.entries.length - 1 && <div className="w-px flex-1 bg-[#E0DDD8]" />}
              </div>
              <div className="pb-8">
                <p className={`text-xs font-mono uppercase tracking-wider mb-1 ${logStatusStyles[entry.statusKey] || "text-[#757575]"}`}>
                  {entry.statusLabel}
                </p>
                <h4 className="text-sm font-medium text-[#1A1A1A] mb-1 font-body">{entry.title}</h4>
                <p className="text-sm text-[#757575] leading-relaxed font-body">{entry.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}