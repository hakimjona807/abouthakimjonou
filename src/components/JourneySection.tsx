import { useState } from 'react';
import { Compass, CheckCircle2, Award, Rocket, ArrowRight } from 'lucide-react';

interface JourneyStep {
  step: string;
  title: string;
  description: string;
  badge: string;
  icon: React.ReactNode;
}

export default function JourneySection() {
  const [selectedStep, setSelectedStep] = useState(2); // Default to current IlmHub step

  const steps: JourneyStep[] = [
    {
      step: '01',
      title: 'Started learning IT & English',
      description:
        'Took the first step into the digital realm, discovering the fundamentals of computer literacy, typing, logic, and English communication basics.',
      badge: 'Genesis Phase',
      icon: <Compass className="w-5 h-5 text-cyan-400" />,
    },
    {
      step: '02',
      title: '2 years of continuous learning',
      description:
        'Cultivated a consistent habit of learning every day. Expanded knowledge in software concepts, web technologies, and language vocabulary with true dedication.',
      badge: 'Consistency & Growth',
      icon: <Award className="w-5 h-5 text-sky-400" />,
    },
    {
      step: '03',
      title: 'Currently studying at IlmHub',
      description:
        'Enrolled at IlmHub to gain structured mentorship, sharpen IT proficiency, work on practical exercises, and elevate conversational English.',
      badge: 'Active Now',
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-400" />,
    },
    {
      step: '04',
      title: 'Building my future in technology',
      description:
        'Aiming high to become an accomplished tech professional and creator. Exploring new horizons and preparing for modern world opportunities.',
      badge: 'Next Horizon',
      icon: <Rocket className="w-5 h-5 text-purple-400" />,
    },
  ];

  return (
    <section id="journey" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
          <span>ROADMAP</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span className="text-slate-400">PROGRESSION OVER TIME</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
          My Journey
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl">
          Tracing two years of steady growth, from initial curiosity to structured education at IlmHub.
        </p>
      </div>

      {/* Interactive Timeline Layout */}
      <div className="relative">
        {/* Central glowing vertical timeline line for desktop */}
        <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-cyan-500/80 via-blue-500 to-purple-500/80 shadow-[0_0_12px_rgba(6,182,212,0.6)]" />

        <div className="space-y-8 lg:space-y-12 relative">
          {steps.map((item, idx) => {
            const isEven = idx % 2 === 0;
            const isSelected = selectedStep === idx;

            return (
              <div
                key={idx}
                onClick={() => setSelectedStep(idx)}
                className={`relative flex flex-col lg:flex-row items-center cursor-pointer group transition-all duration-300 ${
                  isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content Card (Left or Right depending on alternating flow) */}
                <div className={`w-full lg:w-1/2 ${isEven ? 'lg:pl-12' : 'lg:pr-12'}`}>
                  <div
                    className={`p-6 sm:p-7 rounded-2xl transition-all duration-300 backdrop-blur-xl ${
                      isSelected
                        ? 'bg-slate-900/90 border-2 border-cyan-400/80 shadow-[0_0_30px_rgba(6,182,212,0.2)]'
                        : 'bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/80'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4 mb-3">
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono text-sm font-semibold text-cyan-400">
                          {item.step}.
                        </span>
                        <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                          {item.badge}
                        </span>
                      </div>
                      <div className="w-8 h-8 rounded-lg bg-slate-800/80 flex items-center justify-center border border-slate-700/60">
                        {item.icon}
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>

                    <p className="mt-2.5 text-sm sm:text-base text-slate-300 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center gap-2 text-xs font-mono text-cyan-400/90">
                      <span>Milestone {item.step}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>

                {/* Center Node Indicator */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center justify-center z-10">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isSelected
                        ? 'bg-cyan-400 text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.8)] scale-110'
                        : 'bg-slate-900 border-2 border-cyan-500/40 text-cyan-400 group-hover:border-cyan-400'
                    }`}
                  >
                    <span className="font-mono text-xs font-bold">{item.step}</span>
                  </div>
                </div>

                {/* Spacer for balanced alignment on the opposite side */}
                <div className="hidden lg:block w-1/2" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
