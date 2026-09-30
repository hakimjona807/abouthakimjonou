import { useState, useEffect } from 'react';
import ParticleBackground from './components/ParticleBackground';
import CursorGlow from './components/CursorGlow';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import JourneySection from './components/JourneySection';
import SkillsSection from './components/SkillsSection';
import SocialSection from './components/SocialSection';
import Footer from './components/Footer';
import { Sparkles, Terminal } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isLoading, setIsLoading] = useState(true);

  // Fast futuristic introductory loader
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  // Section Observer for Navbar active link tracking
  useEffect(() => {
    const sections = ['hero', 'about', 'journey', 'skills', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative bg-[#030712] text-slate-100 min-h-screen selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Intro Cyber Loader Overlay */}
      {isLoading && (
        <div className="fixed inset-0 z-[100] bg-[#030712] flex flex-col items-center justify-center transition-opacity duration-300">
          <div className="relative flex flex-col items-center">
            {/* Glowing Logo Badge */}
            <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 via-slate-900 to-purple-600/30 border border-cyan-500/50 flex items-center justify-center shadow-[0_0_40px_rgba(6,182,212,0.4)] animate-pulse">
              <span className="font-display font-extrabold text-2xl text-cyan-300 tracking-wider">
                HJ
              </span>
              <div className="absolute -inset-1 rounded-2xl border border-cyan-400/40 animate-ping" />
            </div>

            {/* Futuristic text and progress bar */}
            <div className="mt-6 flex items-center gap-2 text-xs font-mono text-cyan-400">
              <Terminal className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
              <span>INITIALIZING PORTFOLIO...</span>
            </div>

            <div className="w-48 h-1 bg-slate-800 rounded-full mt-3 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 animate-[pulse_0.6s_ease-in-out_infinite]" />
            </div>
          </div>
        </div>
      )}

      {/* Interactive Background Canvas & Ambient Gradients */}
      <ParticleBackground />

      {/* Smooth Cursor Glow on Desktop */}
      <CursorGlow />

      {/* Fixed Navigation Bar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <HeroSection />

        {/* Section Divider Ribbon */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
        </div>

        <AboutSection />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
        </div>

        <JourneySection />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
        </div>

        <SkillsSection />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
        </div>

        <SocialSection />
      </main>

      {/* Minimalist Compliant Footer */}
      <Footer />
    </div>
  );
}
