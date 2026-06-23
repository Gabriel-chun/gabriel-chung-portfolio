import React from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export default function SuiteHero({ suiteImage }) {
  const { lang } = useLanguage();
  const t = translations[lang].suite.hero;
  return (
    <div className="pt-20 md:pt-28 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <p className="text-sm font-mono text-[#3E5C76] tracking-widest uppercase mb-6">
              {t.label}
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A] leading-tight mb-6">
              {t.title}
            </h2>
            <p className="text-lg text-[#757575] leading-relaxed mb-4 font-body">
              {t.desc1}
            </p>
            <p className="text-base text-[#757575] leading-relaxed font-body">
              {t.desc2}
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded overflow-hidden">
              <img
                src={suiteImage}
                alt="Abstract decision tree with metallic wires and glass nodes"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}