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
    navigator.clipboard.writeText('avina16@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#141312] text-white w-full py-16 md:py-24 border-t border-[#2a2825] mt-auto">
      <div className="max-w-[1280px] mx-auto px-5 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 pb-12 border-b border-white/10">
          {/* Email and Socials */}
          <div className="w-full md:w-auto">
            <span className="font-mono-code text-[11px] uppercase tracking-[0.25em] text-[#c5a059] block mb-2 font-semibold">
              Executive Contact
            </span>
            <div className="flex items-center gap-3 mb-6">
              <button
                onClick={handleCopyEmail}
                className="group font-serif-luxury text-[26px] sm:text-[36px] md:text-[46px] text-white tracking-tight hover:text-[#c5a059] transition-all text-left flex items-center gap-3 cursor-pointer"
                title="Click to copy email address"
              >
                <span>avina16@gmail.com</span>
                <span className="font-mono-code text-[12px] text-white/50 group-hover:text-[#c5a059] border border-white/20 px-2 py-1 rounded-sm uppercase tracking-wider">
                  {copied ? 'Copied' : 'Copy'}
                </span>
              </button>
            </div>

            {copied && (
              <p className="font-mono-code text-[12px] text-[#c5a059] mb-6 flex items-center gap-2 animate-fadeIn">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]"></span>
                Email copied to clipboard
              </p>
            )}

            <div className="flex flex-wrap gap-8 font-mono-code text-[12px]">
              <a
                href="https://www.linkedin.com/in/avina-lloyd/"
                target="_blank"
                rel="noreferrer"
                className="text-white/80 hover:text-[#c5a059] transition-colors flex items-center gap-1"
              >
                <span>LinkedIn</span>
                <span className="text-[12px]">↗</span>
              </a>
              <a
                href="https://fidelituscorp.com"
                target="_blank"
                rel="noreferrer"
                className="text-white/80 hover:text-[#c5a059] transition-colors flex items-center gap-1"
              >
                <span>Fidelitus Corp</span>
                <span className="text-[12px]">↗</span>
              </a>
              <span className="text-white/40">
                Bengaluru, Karnataka, India
              </span>
            </div>
          </div>

          {/* Quick Actions & Brand */}
          <div className="w-full md:w-auto flex flex-col items-start md:items-end gap-6">
            <button
              onClick={scrollToTop}
              className="text-white/70 hover:text-white font-mono-code text-[11px] uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <span>Back to top</span>
              <span className="text-[12px]">↑</span>
            </button>

            <button
              onClick={onOpenBooking}
              className="px-6 py-3 bg-[#c5a059] text-[#141312] font-mono-code text-[11px] uppercase tracking-widest rounded-sm hover:bg-[#d6b36e] transition-colors cursor-pointer font-semibold shadow-xs"
            >
              Email Avina Lloyd ↗
            </button>
          </div>
        </div>

        {/* Sub-footer Links & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pt-8 font-mono-code text-[11px] text-white/50 tracking-wider">
          <nav className="flex flex-wrap gap-6 md:gap-8">
            <button
              onClick={() => {
                onNavigate('home');
                scrollToTop();
              }}
              className="hover:text-white transition-colors cursor-pointer uppercase"
            >
              Home
            </button>
            <button
              onClick={() => {
                onNavigate('about');
                scrollToTop();
              }}
              className="hover:text-white transition-colors cursor-pointer uppercase"
            >
              About
            </button>
            <button
              onClick={() => {
                onNavigate('experience');
                scrollToTop();
              }}
              className="hover:text-white transition-colors cursor-pointer uppercase"
            >
              Experience
            </button>
            <button
              onClick={() => {
                onNavigate('portfolio');
                scrollToTop();
              }}
              className="hover:text-white transition-colors cursor-pointer uppercase"
            >
              Initiatives &amp; Impact
            </button>
          </nav>

          <p className="text-white/40">
            © {new Date().getFullYear()} Avina Lloyd. Chief Executive Officer (CEO).
          </p>
        </div>
      </div>
    </footer>
  );
};
