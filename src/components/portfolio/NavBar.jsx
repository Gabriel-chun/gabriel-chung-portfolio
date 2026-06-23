import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export default function NavBar() {
  const { lang, setLang } = useLanguage();
  const t = translations[lang].nav;
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleLang = () => setLang(lang === "en" ? "zh" : "en");

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#F9F9F7]/95 backdrop-blur-sm border-b border-[#E0DDD8]" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-14">
        <a href="#portfolio" className="font-heading text-lg text-[#1A1A1A] tracking-tight">
          {t.name}
        </a>
        <div className="hidden md:flex items-center gap-8">
          {t.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#757575] hover:text-[#1A1A1A] transition-colors font-body"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggleLang}
            className="text-sm text-[#3E5C76] hover:text-[#2E4A62] font-medium font-body border border-[#3E5C76]/30 px-3 py-1 rounded transition-colors"
          >
            {lang === "en" ? "中文" : "EN"}
          </button>
        </div>
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleLang}
            className="text-sm text-[#3E5C76] font-medium font-body border border-[#3E5C76]/30 px-2.5 py-1 rounded"
          >
            {lang === "en" ? "中文" : "EN"}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-[#1A1A1A]"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-[#F9F9F7] border-b border-[#E0DDD8] px-6 pb-4">
          {t.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-sm text-[#757575] hover:text-[#1A1A1A] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}