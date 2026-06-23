import React from "react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export default function MethodSection() {
  const { lang } = useLanguage();
  const t = translations[lang].method;
  return (
    <section id="method" className="py-20 md:py-28 px-6 bg-[#F0F0EE]">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-mono text-[#3E5C76] tracking-widest uppercase mb-3">{t.label}</p>
        <h2 className="font-heading text-3xl md:text-4xl text-[#1A1A1A] leading-tight mb-12">
          {t.title}
        </h2>

        <div className="overflow-x-auto pb-4 mb-12">
          <div className="flex items-start gap-0 min-w-max">
            {t.stages.map((stage, i) => (
              <React.Fragment key={stage.label}>
                <div className="flex flex-col items-center w-36">
                  <div className="w-full border border-[#3E5C76]/30 bg-white rounded px-3 py-4 text-center">
                    <p className="text-sm font-medium text-[#1A1A1A] mb-1 font-body">{stage.label}</p>
                    <p className="text-xs text-[#757575] font-body leading-snug">{stage.description}</p>
                  </div>
                </div>
                {i < t.stages.length - 1 && (
                  <div className="flex items-center px-1 pt-6">
                    <ArrowRight size={16} className="text-[#3E5C76]/50" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-mono text-[#757575] tracking-widest uppercase mb-4">{t.appliedLabel}</p>
          <div className="flex flex-wrap gap-2">
            {t.applications.map((app) => (
              <span
                key={app}
                className="inline-block px-3 py-1.5 text-xs font-mono text-[#3E5C76] bg-white border border-[#E0DDD8] rounded"
              >
                {app}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}