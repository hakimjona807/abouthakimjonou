import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-800/80 bg-[#030712]/90 backdrop-blur-xl py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Identity */}
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/20 via-slate-900 to-purple-600/20 border border-cyan-500/40">
            <span className="font-display font-bold text-xs text-cyan-300">HJ</span>
          </div>
          <div>
            <span className="font-display font-semibold text-white text-base">Hakimjon</span>
            <span className="text-xs text-slate-400 block">IT &amp; English Student</span>
          </div>
        </div>

        {/* Unboxed Metadata Discipline */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-400">
          <span>School No. 12</span>
          <span aria-hidden="true">·</span>
          <span>7th Grade</span>
          <span aria-hidden="true">·</span>
          <span>IlmHub Student</span>
          <span aria-hidden="true">·</span>
          <span>2 Years Learning</span>
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors py-2 px-3 rounded-lg hover:bg-slate-900 border border-transparent hover:border-slate-800 cursor-pointer"
          aria-label="Back to top"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-slate-900 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Hakimjon. All rights reserved.
      </div>
    </footer>
  );
}
