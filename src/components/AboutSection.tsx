import { useState, useRef } from 'react';
import { User, School, GraduationCap, Laptop, Languages, Clock, BookOpen, Sparkles } from 'lucide-react';

interface CardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  detail: string;
  accent: 'cyan' | 'purple' | 'blue' | 'emerald';
}

function TiltCard({ icon, label, value, detail, accent }: CardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotate({
      x: -(y / (rect.height / 2)) * 8,
      y: (x / (rect.width / 2)) * 8,
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
      valueColor: 'text-cyan-300',
    },
    purple: {
      border: 'hover:border-purple-500/50',
      glow: 'group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]',
      iconBg: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
      valueColor: 'text-purple-300',
    },
    blue: {
      border: 'hover:border-sky-500/50',
      glow: 'group-hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]',
      iconBg: 'bg-sky-500/10 text-sky-400 border-sky-500/30',
      valueColor: 'text-sky-300',
    },
    emerald: {
      border: 'hover:border-emerald-500/50',
      glow: 'group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]',
      iconBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
      valueColor: 'text-emerald-300',
    },
  }[accent];

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
      className={`group relative p-6 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 ${accentStyles.border} ${accentStyles.glow} transition-all duration-300 flex flex-col justify-between`}
    >
      {/* Top subtle highlight */}
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${accentStyles.iconBg} transition-transform duration-300 group-hover:scale-110`}>
          {icon}
        </div>
        <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">{label}</span>
      </div>

      <div>
        <div className={`text-3xl sm:text-4xl font-display font-bold ${accentStyles.valueColor} tracking-tight`}>
          {value}
        </div>
        <p className="text-sm text-slate-300 mt-2 font-normal leading-relaxed">
          {detail}
        </p>
      </div>

      {/* Subtle indicator bar */}
      <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400 font-mono">
        <span>VERIFIED INFO</span>
        <span className="text-slate-300">Hakimjon</span>
      </div>
    </div>
  );
}

export default function AboutSection() {
  const cards: CardProps[] = [
    {
      icon: <User className="w-6 h-6" />,
      label: 'Age',
      value: '13',
      detail: 'Young tech enthusiast actively learning and expanding knowledge every day.',
      accent: 'cyan',
    },
    {
      icon: <School className="w-6 h-6" />,
      label: 'School',
      value: 'No. 12',
      detail: 'Currently enrolled at School No. 12 balancing school academics with tech studies.',
      accent: 'blue',
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      label: 'Grade',
      value: '7th Grade',
      detail: 'Seventh grade student developing analytical and problem-solving fundamentals.',
      accent: 'purple',
    },
    {
      icon: <Laptop className="w-6 h-6" />,
      label: 'Learning',
      value: 'IT',
      detail: 'Mastering computing fundamentals, digital technology, and modern web interfaces.',
      accent: 'cyan',
    },
    {
      icon: <Languages className="w-6 h-6" />,
      label: 'Learning',
      value: 'English',
      detail: 'Studying international English to access global knowledge and developer documentation.',
      accent: 'emerald',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      label: 'Experience',
      value: '2 Years',
      detail: 'Two years of dedicated and continuous study in technology and language.',
      accent: 'purple',
    },
  ];

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>PERSONAL PROFILE</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span className="text-slate-400">STUDENT IDENTITY</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
          About Me
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl">
          Get to know Hakimjon: an ambitious 7th-grade student with 2 years of active learning in IT and English.
        </p>
      </div>

      {/* Grid of 6 Animated Information Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((c, index) => (
          <TiltCard key={index} {...c} />
        ))}
      </div>

      {/* Highlight Box: IlmHub Education */}
      <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-indigo-950/40 border border-slate-800 backdrop-blur-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center shrink-0 text-cyan-400">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-mono text-cyan-400 tracking-wider">CURRENT EDUCATION</div>
              <h3 className="text-xl font-display font-bold text-white">IlmHub Center</h3>
            </div>
          </div>
          <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
            Currently advancing practical technical skills and English fluency at <span className="text-white font-medium">IlmHub</span>, building a strong educational foundation for the future in technology.
          </p>
        </div>
      </div>
    </section>
  );
}
