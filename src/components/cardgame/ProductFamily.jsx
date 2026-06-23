import React from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export default function ProductFamily() {
  const { lang } = useLanguage();
  const t = translations[lang].suite.productFamily;
  return (
    <section aria-labelledby="product-family-heading" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-mono text-[#3E5C76] tracking-widest uppercase mb-3">{t.label}</p>
        <h3 id="product-family-heading" className="font-heading text-2xl md:text-3xl text-[#1A1A1A] leading-tight mb-10">
          {t.title}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {t.items.map((proto) => (
            <article
              key={proto.title}
              className="border border-[#E0DDD8] bg-white rounded p-6 flex flex-col"
            >
              <h4 className="font-heading text-lg text-[#1A1A1A] mb-2 leading-snug">{proto.title}</h4>
              <p className="text-sm text-[#757575] leading-relaxed mb-3 flex-1 font-body">{proto.description}</p>
              <p className="text-xs font-mono text-[#3E5C76] mb-3">{proto.role}</p>
              <div className="flex flex-wrap gap-1.5">
                {proto.tags.map((tag) => (
                  <span key={tag} className="text-xs font-mono text-[#757575] bg-[#F0F0EE] px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}