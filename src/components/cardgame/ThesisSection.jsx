import React from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export default function ThesisSection() {
  const { lang } = useLanguage();
  const t = translations[lang].suite.thesis;
  return (
    <div className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="border-l-2 border-[#3E5C76] pl-8 py-4 max-w-3xl">
          <p className="text-xl md:text-2xl text-[#1A1A1A] leading-relaxed font-heading italic mb-4">
            {t.quote}
          </p>
          <p className="text-sm text-[#757575] font-body">
            {t.p}
          </p>
        </div>
      </div>
    </div>
  );
}