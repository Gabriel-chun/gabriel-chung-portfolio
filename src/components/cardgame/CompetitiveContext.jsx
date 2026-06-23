import React from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { translations, contextStatusColors } from "@/lib/translations";

export default function CompetitiveContext() {
  const { lang } = useLanguage();
  const t = translations[lang].suite.context;
  return (
    <div className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-mono text-[#3E5C76] tracking-widest uppercase mb-3">{t.label}</p>
        <h3 className="font-heading text-2xl md:text-3xl text-[#1A1A1A] leading-tight mb-4">
          {t.title}
        </h3>
        <p className="text-sm text-[#757575] font-body mb-4 max-w-3xl">
          {t.p1}
        </p>
        <p className="text-sm text-[#757575] font-body mb-10 max-w-3xl">
          {t.p2}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.items.map((item, i) => (
            <article key={i} className="border border-[#E0DDD8] bg-white rounded p-5 flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-[#757575]">{item.game}</span>
                <span className={`text-xs font-mono px-2 py-0.5 rounded ${contextStatusColors[item.statusKey] || "bg-[#F0F0EE] text-[#757575]"}`}>
                  {item.statusLabel}
                </span>
              </div>
              <h4 className="text-sm font-medium text-[#1A1A1A] mb-1 font-body">{item.context}</h4>
              <p className="text-xs text-[#757575] font-mono mb-3">{item.period}</p>
              <p className="text-sm text-[#757575] leading-relaxed mb-3 flex-1 font-body">{item.testingNote}</p>
              <div className="border-t border-[#F0F0EE] pt-3 space-y-1.5">
                <p className="text-xs text-[#757575] font-body">
                  <span className="font-mono text-[#3E5C76]">{lang === "en" ? "Focus:" : "重點："}</span> {item.keyFocus}
                </p>
                <p className="text-xs text-[#757575] font-body">
                  <span className="font-mono text-[#3E5C76]">{lang === "en" ? "Prototype:" : "原型："}</span> {item.relatedPrototype}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}