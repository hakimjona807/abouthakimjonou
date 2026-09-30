import { useState, useRef } from 'react';
import { User, MessageSquare, Terminal, Sparkles, Compass } from 'lucide-react';
import cyberAvatarImg from '../assets/images/avatar_abstract_cyber_1790780492526.jpg';

export default function HeroSection() {
  const [imgError, setImgError] = useState(false);
  const avatarCardRef = useRef<HTMLDivElement | null>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!avatarCardRef.current) return;
    const rect = avatarCardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    // Subtle tilt
    setRotate({
      x: -(y / (rect.height / 2)) * 12,
      y: (x / (rect.width / 2)) * 12,
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Greeting & Intro */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
          
          {/* Status highlight - Clean unboxed text with typographic separator */}
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="tracking-wider">STUDENT &amp; EXPLORER</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400">ILMHUB &amp; SCHOOL NO. 12</span>
          </div>

          {/* Large Animated Greeting */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white">
            <span className="block text-slate-100">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                Hakimjon
              </span>{' '}
              <span className="animate-wave inline-block cursor-default select-none" role="img" aria-label="waving hand">
                👋
              </span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl font-display font-medium text-cyan-300 tracking-wide">
            13-year-old IT &amp; English learner
          </p>

          {/* Short description */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            I'm a 7th grade student learning IT and English for the past 2 years, building my skills and exploring the world of technology.
          </p>

          {/* Animated Action Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
            {/* About Me Button */}
            <button
              onClick={() => scrollTo('#about')}
              className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 rounded-xl hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <User className="w-4 h-4 text-slate-950 transition-transform group-hover:scale-110" />
              <span>About Me</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-950 group-hover:scale-125 transition-transform" />
            </button>

            {/* Contact Me Button */}
            <button
              onClick={() => scrollTo('#contact')}
              className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-cyan-500/50 rounded-xl hover:shadow-[0_0_20px_rgba(56,189,248,0.2)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-cyan-400 transition-transform group-hover:scale-110" />
              <span>Contact Me</span>
            </button>
          </div>

          {/* Quick Editorial Highlight Stats (Unboxed) */}
          <div className="pt-6 border-t border-slate-800/80 w-full grid grid-cols-3 gap-4 text-left">
            <div>
              <div className="text-2xl sm:text-3xl font-display font-bold text-white tabular-nums">
                13
              </div>
              <div className="text-xs text-slate-400 mt-0.5">Years Old</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-display font-bold text-cyan-400 tabular-nums">
                7th
              </div>
              <div className="text-xs text-slate-400 mt-0.5">School Grade</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-display font-bold text-indigo-400 tabular-nums">
                2+
              </div>
              <div className="text-xs text-slate-400 mt-0.5">Years Learning</div>
            </div>
          </div>
        </div>

        {/* Right Column: Abstract Developer Avatar with Glowing Rings & 3D Tilt */}
        <div className="lg:col-span-5 flex items-center justify-center">
          <div
            ref={avatarCardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
              transition: 'transform 0.15s ease-out',
            }}
            className="relative w-72 h-72 sm:w-88 sm:h-88 flex items-center justify-center cursor-pointer select-none group"
          >
            {/* Outer Glowing Pulsing Ambient Halo */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/20 via-blue-500/20 to-purple-600/25 blur-3xl animate-pulse-glow" />

            {/* Rotating Futuristic Tech Orbit Rings */}
            <div className="absolute -inset-4 sm:-inset-6 rounded-full border border-dashed border-cyan-500/30 animate-spin-slow pointer-events-none" />
            <div className="absolute -inset-8 sm:-inset-10 rounded-full border border-dotted border-purple-500/20 animate-spin-reverse pointer-events-none" />

            {/* Tech Orbital Ticks */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-900/90 border border-cyan-500/40 text-[10px] font-mono text-cyan-300 shadow-md">
              <Sparkles className="w-2.5 h-2.5 text-cyan-400" />
              <span>DIGITAL IDENTITY</span>
            </div>

            {/* Core Avatar Frame with Glowing Border */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl p-1 bg-gradient-to-br from-cyan-400 via-indigo-500 to-purple-600 shadow-[0_0_40px_rgba(6,182,212,0.3)] transition-all duration-300 group-hover:shadow-[0_0_50px_rgba(6,182,212,0.5)]">
              <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-slate-950 flex items-center justify-center">
                {!imgError ? (
                  <img
                    src={cyberAvatarImg}
                    alt="Futuristic abstract developer avatar representing Hakimjon"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  /* Zero-Broken-Image Fallback: Abstract geometric vector cyber avatar */
                  <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-950 to-cyan-950/80 flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-24 h-24 rounded-2xl bg-cyan-500/10 border border-cyan-500/40 flex items-center justify-center mb-4">
                      <Terminal className="w-12 h-12 text-cyan-400" />
                    </div>
                    <span className="font-display font-bold text-lg text-white">HJ · Dev</span>
                    <span className="text-xs text-cyan-400 font-mono mt-1">IT &amp; English Student</span>
                  </div>
                )}

                {/* Glass reflection gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-white/10 pointer-events-none" />

                {/* Bottom floating badge inside frame */}
                <div className="absolute bottom-3 left-3 right-3 py-2 px-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-700/60 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    <span className="text-xs font-mono text-slate-300">Hakimjon</span>
                  </div>
                  <span className="text-[11px] font-mono text-cyan-400">School No. 12</span>
                </div>
              </div>
            </div>

            {/* Orbiting Satellite Node */}
            <div className="absolute -bottom-2 -right-2 p-2.5 rounded-2xl bg-slate-900/90 border border-cyan-500/40 shadow-lg text-cyan-400 group-hover:border-cyan-400 transition-colors">
              <Compass className="w-5 h-5 animate-spin-slow" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
