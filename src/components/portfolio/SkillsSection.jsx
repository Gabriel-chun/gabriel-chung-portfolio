import React from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export default function SkillsSection() {
  const { lang } = useLanguage();
  const t = translations[lang].skills;
  return (
    <section className="py-20 md:py-28 px-6 bg-[#F0F0EE]">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-mono text-[#3E5C76] tracking-widest uppercase mb-3">{t.label}</p>
        <h2 className="font-heading text-3xl md:text-4xl text-[#1A1A1A] leading-tight mb-10">
          {t.title}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {t.items.map((skill) => (
            <div
              key={skill}
              className="border border-[#E0DDD8] bg-white rounded px-4 py-3"
            >
              <p className="text-sm text-[#1A1A1A] font-body font-medium">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}