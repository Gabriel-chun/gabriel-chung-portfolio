import React from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export default function FooterSection() {
  const { lang } = useLanguage();
  const t = translations[lang].footer;
  return (
    <footer className="py-8 px-6 border-t border-[#E0DDD8]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-[#757575] font-mono">
          © {new Date().getFullYear()} {t.copyright}
        </p>
        <p className="text-xs text-[#757575] font-body">
          {t.tagline}
        </p>
      </div>
    </footer>
  );
}