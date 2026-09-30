import { useState } from 'react';
import { Send, Instagram, Copy, Check, ExternalLink, Sparkles, MessageCircle } from 'lucide-react';

export default function SocialSection() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2200);
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>CONNECT &amp; NETWORK</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span className="text-slate-400">DIRECT REACH</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
          Let's Connect
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl">
          Interested in following Hakimjon's learning journey or connecting? Reach out directly via Telegram or Instagram.
        </p>
      </div>

      {/* Social Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        
        {/* Telegram Card */}
        <div className="group relative p-8 rounded-3xl bg-slate-900/70 backdrop-blur-xl border border-slate-800/80 hover:border-sky-500/60 transition-all duration-300 hover:shadow-[0_0_40px_rgba(56,189,248,0.2)] flex flex-col justify-between overflow-hidden">
          {/* Subtle Ambient Background Light */}
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-sky-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-sky-500/20 transition-all" />

          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-14 h-14 rounded-2xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
                <Send className="w-7 h-7 -translate-x-0.5 translate-y-0.5" />
              </div>
              <span className="text-xs font-mono text-sky-400 uppercase tracking-wider">
                Instant Chat
              </span>
            </div>

            <h3 className="text-2xl font-display font-bold text-white group-hover:text-sky-300 transition-colors">
              Telegram
            </h3>
            
            <p className="mt-2 text-sm text-slate-300">
              Direct and fast messaging. Feel free to send a hello or connect.
            </p>

            {/* Username pill-free display with copy button */}
            <div className="mt-6 p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between gap-3">
              <div className="truncate">
                <span className="text-xs font-mono text-slate-400 block">HANDLE</span>
                <span className="font-mono text-base font-semibold text-sky-300 truncate">
                  @abdullaevhakimjon
                </span>
              </div>
              <button
                type="button"
                onClick={() => handleCopy('@abdullaevhakimjon', 'tg')}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors shrink-0 cursor-pointer"
                title="Copy Telegram username"
                aria-label="Copy Telegram username"
              >
                {copiedKey === 'tg' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Action button */}
          <div className="mt-8 pt-6 border-t border-slate-800/80">
            <a
              href="https://t.me/abdullaevhakimjon"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-sky-400 to-cyan-400 hover:from-sky-300 hover:to-cyan-300 shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40 transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Open in Telegram</span>
              <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>

        {/* Instagram Card */}
        <div className="group relative p-8 rounded-3xl bg-slate-900/70 backdrop-blur-xl border border-slate-800/80 hover:border-pink-500/60 transition-all duration-300 hover:shadow-[0_0_40px_rgba(236,72,153,0.2)] flex flex-col justify-between overflow-hidden">
          {/* Subtle Ambient Background Light */}
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-pink-500/20 transition-all" />

          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500/20 via-pink-500/20 to-purple-600/20 border border-pink-500/30 flex items-center justify-center text-pink-400 group-hover:scale-110 transition-transform">
                <Instagram className="w-7 h-7" />
              </div>
              <span className="text-xs font-mono text-pink-400 uppercase tracking-wider">
                Social Profile
              </span>
            </div>

            <h3 className="text-2xl font-display font-bold text-white group-hover:text-pink-300 transition-colors">
              Instagram
            </h3>
            
            <p className="mt-2 text-sm text-slate-300">
              Follow my daily activities, student milestones, and creative updates.
            </p>

            {/* Username pill-free display with copy button */}
            <div className="mt-6 p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between gap-3">
              <div className="truncate">
                <span className="text-xs font-mono text-slate-400 block">HANDLE</span>
                <span className="font-mono text-base font-semibold text-pink-300 truncate">
                  @_hakimjon.777
                </span>
              </div>
              <button
                type="button"
                onClick={() => handleCopy('@_hakimjon.777', 'ig')}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors shrink-0 cursor-pointer"
                title="Copy Instagram username"
                aria-label="Copy Instagram username"
              >
                {copiedKey === 'ig' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Action button */}
          <div className="mt-8 pt-6 border-t border-slate-800/80">
            <a
              href="https://instagram.com/_hakimjon.777"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40 transition-all duration-300"
            >
              <Instagram className="w-4 h-4" />
              <span>Open in Instagram</span>
              <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
