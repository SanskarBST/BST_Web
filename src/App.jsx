// File: src/App.jsx

import React, { useMemo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { BrandLogos } from "./components/BrandLogos/BrandLogos";
import { Stats } from "./components/Stats/Stats";
import { WhyUs } from "./components/WhyUs/WhyUs";
import { Testimonials } from "./components/Testimonials/Testimonials";
import { Careers } from "./components/Careers/Careers";
import { CTA } from "./components/CTA/CTA";
import { Footer } from "./components/Footer/Footer";
import { useLenis } from "./hooks/useLenis";
import { HeroCanvas } from "./components/Hero/HeroCanvas.jsx";
import { OurExpertise } from "./components/Process/OurExpertise.jsx";
import { AboutUs } from "./components/About/AboutUs.jsx";

// 🔥 ScrollToTop Component Import
import { ScrollToTop } from "./components/ScrollToTop.jsx"; 

// Service Pages 
import { AIMLService } from "./components/Services/AIMLService.jsx";
import { AgenticAISoftwareDevelopment } from "./components/Services/AgenticAISoftwareDevelopment.jsx";
import { AppDevelopmentService } from "./components/Services/AppDevelopmentService.jsx";
import { CloudConsultingService } from "./components/Services/CloudConsultingService.jsx";
import { DataEngineering } from "./components/Services/DataEngineering.jsx"; 
import { SoftwareProductService } from "./components/Services/SoftwareProductService.jsx"; 

function Home() {
  return (
    <main className="w-full flex flex-col bg-transparent">
      <Hero />
      <BrandLogos />
      <Stats />
      <WhyUs />
      <Testimonials />
      <OurExpertise />
      <CTA />
    </main>
  );
}

export default function App() {
  useLenis();

  const GlobalBackground = useMemo(() => {
    return (
      <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none">
        <HeroCanvas />
      </div>
    );
  }, []);

  return (
    <Router>
      {/* 🔥 ScrollToTop yahan add kiya hai taaki har page change par screen top par chali jaye */}
      <ScrollToTop />

      <div className="relative min-h-screen w-full bg-[#12071E] overflow-x-hidden selection:bg-[#FF2E2B] selection:text-white">

        {GlobalBackground}

        <div className="relative z-10 flex flex-col w-full">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/about" element={
                <main className="w-full flex flex-col bg-transparent min-h-screen"><AboutUs /></main>
            } />

            <Route path="/careers" element={
                <main className="w-full flex flex-col bg-transparent pt-24 min-h-screen"><Careers /><CTA /></main>
            } />

            <Route path="/services/ai-ml" element={
                <main className="w-full flex flex-col bg-transparent min-h-screen"><AIMLService /></main>
            } />

            <Route path="/services/agentic-ai" element={
                <main className="w-full flex flex-col bg-transparent min-h-screen"><AgenticAISoftwareDevelopment /></main>
            } />

            <Route path="/services/web-development" element={
                <main className="w-full flex flex-col bg-transparent min-h-screen"><AgenticAISoftwareDevelopment /></main>
            } />

            <Route path="/services/data-engineering" element={
                <main className="w-full flex flex-col bg-transparent min-h-screen"><DataEngineering /></main>
            } />

            <Route path="/services/app-development" element={
                <main className="w-full flex flex-col bg-transparent min-h-screen"><AppDevelopmentService /></main>
            } />

            {/* Note: Cloud Consulting is currently showing QA Content as per your setup */}
            <Route path="/services/cloud-consulting" element={
                <main className="w-full flex flex-col bg-transparent min-h-screen"><CloudConsultingService /></main>
            } />

            <Route path="/services/custom-software" element={
                <main className="w-full flex flex-col bg-transparent min-h-screen"><SoftwareProductService /></main>
            } />

          </Routes>

          <Footer />
        </div>
      </div>
    </Router>
  );
}