import React from "react";
import { LanguageProvider } from "@/lib/LanguageContext";
import NavBar from "@/components/portfolio/NavBar";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import MethodSection from "@/components/portfolio/MethodSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import WhySection from "@/components/portfolio/WhySection";
import ContactSection from "@/components/portfolio/ContactSection";
import FooterSection from "@/components/portfolio/FooterSection";
import SuiteHero from "@/components/cardgame/SuiteHero";
import ThesisSection from "@/components/cardgame/ThesisSection";
import ProblemSection from "@/components/cardgame/ProblemSection";
import ProductFamily from "@/components/cardgame/ProductFamily";
import DecisionFramework from "@/components/cardgame/DecisionFramework";
import KeyModules from "@/components/cardgame/KeyModules";
import DecisionBrief from "@/components/cardgame/DecisionBrief";
import CompetitiveContext from "@/components/cardgame/CompetitiveContext";
import FollowUpNote from "@/components/cardgame/FollowUpNote";
import ProductOpportunity from "@/components/cardgame/ProductOpportunity";
import Demonstrates from "@/components/cardgame/Demonstrates";
import UpdateLog from "@/components/cardgame/UpdateLog";

const HERO_IMAGE = "https://media.base44.com/images/public/6a3a644ea8b76371c37ed60c/0263c7630_generated_fcbe6c91.png";
const SUITE_IMAGE = "https://media.base44.com/images/public/6a3a644ea8b76371c37ed60c/0ec722f04_generated_35327769.png";

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#F9F9F7] text-[#1A1A1A]">
        <NavBar />

        {/* ─── PORTFOLIO HOME ─── */}
        <HeroSection heroImage={HERO_IMAGE} />
        <AboutSection />
        <MethodSection />
        <ProjectsSection />
        <SkillsSection />
        <WhySection />

        {/* ─── CARD GAME REASONING SUITE ─── */}
        <section id="card-game-suite" className="bg-[#F0F0EE]">
          <SuiteHero suiteImage={SUITE_IMAGE} />
          <ThesisSection />
          <ProblemSection />
          <ProductFamily />
          <DecisionFramework />
          <KeyModules />
          <DecisionBrief />
          <CompetitiveContext />
          <FollowUpNote />
          <ProductOpportunity />
          <Demonstrates />
          <UpdateLog />
        </section>

        {/* ─── FOOTER ─── */}
        <ContactSection />
        <FooterSection />
      </div>
    </LanguageProvider>
  );
}