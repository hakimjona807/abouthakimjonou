import { useState, useRef } from 'react';
import { Monitor, BookOpen, Globe, Cpu, Lightbulb, Brain, Sparkles, CheckCircle } from 'lucide-react';

interface SkillItem {
  name: string;
  category: string;
  description: string;
  highlights: string[];
  icon: React.ReactNode;
  accent: 'cyan' | 'purple' | 'blue' | 'emerald';
}

function SkillCard({ item }: { item: SkillItem }) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotate({
      x: -(y / (rect.height / 2)) * 6,
      y: (x / (rect.width / 2)) * 6,
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const accentStyles = {
    cyan: {
      border: 'hover:border-cyan-500/50',
      glow: 'group-hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]',
      iconBg: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
      accentText: 'text-cyan-400',
    },
    purple: {
      border: 'hover:border-purple-500/50',
      glow: 'group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]',
      iconBg: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
      accentText: 'text-purple-400',
    },
    blue: {
      border: 'hover:border-sky-500/50',
      glow: 'group-hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]',
      iconBg: 'bg-sky-500/10 text-sky-400 border-sky-500/30',
      accentText: 'text-sky-400',
    },
    emerald: {
      border: 'hover:border-emerald-500/50',
      glow: 'group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]',
      iconBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
      accentText: 'text-emerald-400',
    },
  }[item.accent];

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.4s ease-out',
      }}
      className={`group relative p-7 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 ${accentStyles.border} ${accentStyles.glow} transition-all duration-300 flex flex-col justify-between`}
    >
      <div>
        {/* Top Header */}
        <div className="flex items-center justify-between mb-4">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${accentStyles.iconBg} transition-transform duration-300 group-hover:scale-110`}>
            {item.icon}
          </div>
          <span className="text-xs font-mono text-slate-400">{item.category}</span>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
          {item.name}
        </h3>

        {/* Description */}
        <p className="mt-3 text-sm text-slate-300 leading-relaxed">
          {item.description}
        </p>

        {/* Highlights - Zero-pill discipline: Clean unboxed list with typographic bullets */}
        <div className="mt-5 space-y-2 pt-4 border-t border-slate-800/60">
          {item.highlights.map((h, i) => (
            <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
              <CheckCircle className={`w-3.5 h-3.5 ${accentStyles.accentText} shrink-0`} />
              <span>{h}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer Info */}
      <div className="mt-6 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
        <span>STATUS</span>
        <span className={accentStyles.accentText}>Active Study</span>
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const skills: SkillItem[] = [
    {
      name: 'IT',
      category: 'Core Discipline',
      description: 'Understanding computer architecture, operating workflows, digital literacy, and computational thinking principles.',
      highlights: ['Computer fundamentals', 'Data awareness', 'Logical problem-solving'],
      icon: <Monitor className="w-6 h-6" />,
      accent: 'cyan',
    },
    {
      name: 'English',
      category: 'Communication',
      description: 'Acquiring international language fluency to communicate globally and easily comprehend technical and educational resources.',
      highlights: ['Grammar & reading comprehension', 'Technical documentation vocabulary', 'Global communication'],
      icon: <BookOpen className="w-6 h-6" />,
      accent: 'emerald',
    },
    {
      name: 'Web Development',
      category: 'Creation & Layout',
      description: 'Exploring how websites are created, structured, and presented to users with responsiveness and modern visual standards.',
      highlights: ['Web structure & interface awareness', 'Responsive visual design', 'User interaction fundamentals'],
      icon: <Globe className="w-6 h-6" />,
      accent: 'blue',
    },
    {
      name: 'Technology',
      category: 'Digital Innovation',
      description: 'Keeping up with modern technological evolution, digital tools, software systems, and future tech concepts.',
      highlights: ['Digital productivity systems', 'Emerging software tools', 'Technology exploration'],
      icon: <Cpu className="w-6 h-6" />,
      accent: 'purple',
    },
    {
      name: 'Creativity',
      category: 'Mindset & Design',
      description: 'Cultivating imagination and design sense to craft clean, engaging, and futuristic experiences.',
      highlights: ['UI & layout aesthetics', 'Original ideas & perspective', 'Visual harmony & detail'],
      icon: <Lightbulb className="w-6 h-6" />,
      accent: 'cyan',
    },
    {
      name: 'Learning',
      category: 'Dedication & Habit',
      description: '2 years of steady continuous education, disciplined daily practice, and eagerness to absorb new knowledge.',
      highlights: ['High curiosity & motivation', 'Disciplined daily study habit', 'Adaptability at IlmHub'],
      icon: <Brain className="w-6 h-6" />,
      accent: 'purple',
    },
  ];

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>CAPABILITIES &amp; FOCUS</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span className="text-slate-400">CORE PILLARS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
          Skills &amp; Learning Areas
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl">
          Six foundational areas Hakimjon is actively developing across two years of hands-on learning.
        </p>
      </div>

      {/* 6 Skill Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((item, idx) => (
          <SkillCard key={idx} item={item} />
        ))}
      </div>
    </section>
  );
}
