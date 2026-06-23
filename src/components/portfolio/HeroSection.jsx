import React from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export default function HeroSection({ heroImage }) {
  const { lang } = useLanguage();
  const t = translations[lang].hero;
  return (
    <section id="portfolio" className="pt-28 pb-20 md:pt-36 md:pb-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <p className="text-sm font-mono text-[#3E5C76] tracking-widest uppercase mb-6">
              {t.label}
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] leading-tight mb-6">
              {t.titlePre}{" "}
              <span className="italic text-[#3E5C76]">{t.titleHighlight}</span>
            </h1>
            <p className="text-lg md:text-xl text-[#757575] leading-relaxed mb-4 max-w-2xl font-body">
              {t.desc1}
            </p>
            <p className="text-base text-[#757575] leading-relaxed mb-8 max-w-2xl font-body">
              {t.desc2}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#card-game-suite"
                className="inline-flex items-center px-5 py-3 bg-[#3E5C76] text-white text-sm font-medium rounded hover:bg-[#2E4A62] transition-colors focus:outline-none focus:ring-2 focus:ring-[#3E5C76] focus:ring-offset-2"
              >
                {t.cta1}
              </a>
              <a
                href="#projects"
                className="inline-flex items-center px-5 py-3 border border-[#E0DDD8] text-[#1A1A1A] text-sm font-medium rounded hover:bg-[#F0F0EE] transition-colors focus:outline-none focus:ring-2 focus:ring-[#3E5C76] focus:ring-offset-2"
              >
                {t.cta2}
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded overflow-hidden">
              <img
                src={heroImage}
                alt="Abstract glass architectural layers representing structured thought"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}