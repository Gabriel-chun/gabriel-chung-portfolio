import React from "react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export default function DecisionFramework() {
  const { lang } = useLanguage();
  const t = translations[lang].suite.framework;
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

        <div className="overflow-x-auto pb-4">
          <div className="flex items-start gap-0 min-w-max">
            {t.stages.map((stage, i) => (
              <React.Fragment key={stage}>
                <div className="flex flex-col items-center w-36">
                  <div className="w-full border border-[#3E5C76]/30 bg-[#F9F9F7] rounded px-3 py-4 text-center">
                    <p className="text-xs font-medium text-[#1A1A1A] font-body">{stage}</p>
                  </div>
                </div>
                {i < t.stages.length - 1 && (
                  <div className="flex items-center px-1 pt-4">
                    <ArrowRight size={14} className="text-[#3E5C76]/50" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}