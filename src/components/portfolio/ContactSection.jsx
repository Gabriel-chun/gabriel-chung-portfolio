import React from "react";
import { Mail, Linkedin, Github, ExternalLink } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

const icons = [Mail, Linkedin, Github, ExternalLink];

export default function ContactSection() {
  const { lang } = useLanguage();
  const t = translations[lang].contact;
  return (
    <section id="contact" className="py-20 md:py-28 px-6 border-t border-[#E0DDD8]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="text-sm font-mono text-[#3E5C76] tracking-widest uppercase mb-3">{t.label}</p>
            <h2 className="font-heading text-3xl md:text-4xl text-[#1A1A1A] leading-tight mb-4">
              {t.title}
            </h2>
            <p className="text-base text-[#757575] leading-relaxed font-body">
              {t.description}
            </p>
          </div>
          <div className="lg:col-span-7 lg:pl-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.items.map((item, i) => {
                const Icon = icons[i];
                return (
                  <div
                    key={item.label}
                    className="flex items-start gap-3 p-4 border border-[#E0DDD8] rounded bg-white"
                  >
                    <Icon size={18} className="text-[#3E5C76] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-[#1A1A1A] font-body">{item.label}</p>
                      <p className="text-xs text-[#757575] font-mono mt-0.5">{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}