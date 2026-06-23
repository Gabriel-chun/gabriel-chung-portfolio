import React from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export default function ProblemSection() {
  const { lang } = useLanguage();
  const t = translations[lang].suite.problem;
  return (
    <div className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-mono text-[#3E5C76] tracking-widest uppercase mb-3">{t.label}</p>
        <h3 className="font-heading text-2xl md:text-3xl text-[#1A1A1A] leading-tight mb-8">
          {t.title}
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <p className="text-sm font-mono text-[#757575] uppercase tracking-wider mb-4">
              {t.lossLabel}
            </p>
            <div className="flex flex-wrap gap-2">
              {t.lossCauses.map((cause) => (
                <span
                  key={cause}
                  className="text-xs font-mono text-[#C84C0C] bg-[#C84C0C]/8 border border-[#C84C0C]/20 px-3 py-1.5 rounded"
                >
                  {cause}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-mono text-[#757575] uppercase tracking-wider mb-4">
              {t.questionsLabel}
            </p>
            <div className="space-y-2">
              {t.questions.map((q) => (
                <div key={q} className="flex items-start gap-2">
                  <span className="text-[#3E5C76] mt-1 text-xs">→</span>
                  <p className="text-sm text-[#1A1A1A] font-body">{q}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}