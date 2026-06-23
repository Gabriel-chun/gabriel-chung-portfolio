import React from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export default function FollowUpNote() {
  const { lang } = useLanguage();
  const t = translations[lang].suite.followUp;
  return (
    <div className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl border border-[#E0DDD8] bg-white rounded p-6">
          <p className="text-xs font-mono text-[#757575] uppercase tracking-wider mb-3">
            {t.label}
          </p>
          <p className="text-sm text-[#757575] leading-relaxed font-body">
            {t.text}
          </p>
        </div>
      </div>
    </div>
  );
}