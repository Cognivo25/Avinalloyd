import React, { useState } from 'react';
import { PageType } from '../types';

interface FooterProps {
  onNavigate: (page: PageType) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('avina.lloyd@fidelituscorp.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1a1c1c] text-white w-full py-16 md:py-24 border-t border-white/10 mt-auto">
      <div className="max-w-[1280px] mx-auto px-5 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 pb-12 border-b border-white/15">
          {/* Email and Socials */}
          <div className="w-full md:w-auto">
            <span className="font-mono-code text-[11px] uppercase tracking-widest text-white/60 block mb-2">
              Executive Contact
            </span>
            <div className="flex items-center gap-3 mb-6">
              <button
                onClick={handleCopyEmail}
                className="group font-display text-[26px] sm:text-[36px] md:text-[46px] text-white tracking-tight hover:opacity-80 transition-all text-left flex items-center gap-3 cursor-pointer"
                title="Click to copy email address"
              >
                <span>avina.lloyd@fidelituscorp.com</span>
                <span className="material-symbols-outlined text-[20px] md:text-[24px] text-white/60 group-hover:text-white transition-colors">
                  {copied ? 'check' : 'content_copy'}
                </span>
              </button>
            </div>

            {copied && (
              <p className="font-mono-code text-[12px] text-[#cfc4c5] mb-6 flex items-center gap-1.5 animate-fadeIn">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Email copied to clipboard!
              </p>
            )}

            <div className="flex flex-wrap gap-8 font-mono-code text-[12px]">
              <a
                href="https://www.linkedin.com/in/avina-lloyd/"
                target="_blank"
                rel="noreferrer"
                className="text-white/80 hover:text-white transition-colors flex items-center gap-1"
              >
                LinkedIn Profile
                <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
              </a>
              <a
                href="https://fidelituscorp.com"
                target="_blank"
                rel="noreferrer"
                className="text-white/80 hover:text-white transition-colors flex items-center gap-1"
              >
                Fidelitus Corp
                <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
              </a>
              <span className="text-white/50">
                Bengaluru, Karnataka, India
              </span>
            </div>
          </div>

          {/* Quick Actions & Brand */}
          <div className="w-full md:w-auto flex flex-col items-start md:items-end gap-6">
            <button
              onClick={scrollToTop}
              className="text-white underline font-mono-code text-[12px] hover:opacity-80 transition-opacity cursor-pointer flex items-center gap-1.5"
            >
              <span>Back to top</span>
              <span className="material-symbols-outlined text-[14px]">arrow_upward</span>
            </button>

            <button
              onClick={onOpenBooking}
              className="px-6 py-2.5 bg-white text-[#1a1c1c] font-mono-code text-[12px] rounded-full hover:bg-neutral-200 transition-colors cursor-pointer font-medium"
            >
              Executive Advisory Call ↗
            </button>
          </div>
        </div>

        {/* Sub-footer Links & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pt-8 font-mono-code text-[12px] text-white/60">
          <nav className="flex flex-wrap gap-6 md:gap-8">
            <button
              onClick={() => {
                onNavigate('home');
                scrollToTop();
              }}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => {
                onNavigate('about');
                scrollToTop();
              }}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Executive Bio
            </button>
            <button
              onClick={() => {
                onNavigate('portfolio');
                scrollToTop();
              }}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Initiatives
            </button>
            <button
              onClick={() => {
                onNavigate('services');
                scrollToTop();
              }}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Capabilities
            </button>
            <button
              onClick={() => {
                onNavigate('contact');
                scrollToTop();
              }}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Contact
            </button>
          </nav>

          <p className="text-white/50">
            © {new Date().getFullYear()} Avina Lloyd. Chief Operations Officer.
          </p>
        </div>
      </div>
    </footer>
  );
};
