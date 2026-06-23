import React from "react";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export default function ProjectsSection() {
  const { lang } = useLanguage();
  const t = translations[lang].projects;
  return (
    <section id="projects" className="py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-mono text-[#3E5C76] tracking-widest uppercase mb-3">{t.label}</p>
        <h2 className="font-heading text-3xl md:text-4xl text-[#1A1A1A] leading-tight mb-12">
          {t.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.items.map((project) => (
            <article
              key={project.title}
              className="group border border-[#E0DDD8] rounded bg-white p-6 flex flex-col hover:border-[#3E5C76]/40 transition-colors"
            >
              <h3 className="font-heading text-xl text-[#1A1A1A] mb-3 leading-snug">
                {project.title}
              </h3>
              <p className="text-sm text-[#757575] leading-relaxed mb-5 flex-1 font-body">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono text-[#757575] bg-[#F0F0EE] px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  className="inline-flex items-center gap-1 text-sm text-[#3E5C76] hover:text-[#2E4A62] font-medium transition-colors"
                >
                  {t.viewSuite} <ArrowUpRight size={14} />
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}