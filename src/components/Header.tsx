import React, { useState, useEffect } from 'react';
import { PageType } from '../types';

interface HeaderProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenBooking,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY) {
          // Scrolling down
          setIsVisible(false);
        } else {
          // Scrolling up
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems: { label: string; page: PageType }[] = [
    { label: 'About', page: 'about' },
    { label: 'Experience', page: 'experience' },
    { label: 'Initiatives & Impact', page: 'portfolio' },
  ];

  const handleNavClick = (page: PageType) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          isScrolled
            ? 'bg-[#fbf9f6]/90 backdrop-blur-xl border-b border-[#c5a059]/20 py-4 shadow-xs'
            : 'bg-[#fbf9f6]/75 backdrop-blur-md py-5'
        }`}
      >
        <div className="max-w-[1536px] mx-auto px-5 md:px-12 lg:px-20 flex justify-between items-center h-14">
          {/* Logo & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <button
              id="menu-btn"
              aria-label="Open Menu"
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 -ml-2 text-[#141312] hover:opacity-70 transition-opacity flex items-center justify-center"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className="w-full h-0.5 bg-[#141312] rounded-full"></span>
                <span className="w-full h-0.5 bg-[#141312] rounded-full"></span>
                <span className="w-full h-0.5 bg-[#141312] rounded-full"></span>
              </div>
            </button>

            <button
              id="brand-logo"
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2.5 hover:opacity-85 transition-opacity text-left cursor-pointer"
            >
              <span className="font-serif-luxury text-[19px] md:text-[21px] font-medium tracking-[0.06em] text-[#141312] uppercase">
                AVINA LLOYD
              </span>
              <span className="font-mono-code text-[10px] text-[#b3884d] border border-[#c5a059]/60 px-2 py-0.5 rounded-sm tracking-wider uppercase font-semibold">
                CEO
              </span>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 font-body text-[13px] tracking-normal">
            {navItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  id={`nav-${item.page}`}
                  onClick={() => handleNavClick(item.page)}
                  className={`transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-[#141312] font-semibold border-b border-[#141312] pb-0.5'
                      : 'text-[#55524e] hover:text-[#141312]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Connect / Advisory CTA */}
          <button
            id="header-book-btn"
            onClick={onOpenBooking}
            className="flex items-center gap-2 font-mono-code text-[11px] bg-[#141312] text-[#c5a059] hover:bg-[#22211e] px-5 py-2.5 rounded-sm transition-all duration-300 cursor-pointer shadow-xs tracking-widest uppercase border border-[#2a2825]"
          >
            <span>Email Avina Lloyd</span>
            <span className="text-[12px]">↗</span>
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-xs z-60 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 left-0 bottom-0 w-[80%] max-w-[340px] bg-[#fbf9f6] z-70 md:hidden p-6 flex flex-col justify-between shadow-2xl transition-transform duration-300 ease-out border-r border-[#c5a059]/20 ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center pb-6 border-b border-[#c5a059]/20">
          <div className="flex items-center gap-2">
            <span className="font-serif-luxury text-[17px] font-medium tracking-[0.06em] text-[#141312] uppercase">
              AVINA LLOYD
            </span>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-8 h-8 rounded-full bg-[#141312]/5 flex items-center justify-center font-mono-code text-[14px]"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <nav className="flex flex-col gap-2 py-6">
          {navItems.map((item) => {
            const isActive = currentPage === item.page;
            return (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`flex items-center justify-between text-left py-3 px-3 rounded-lg font-serif-luxury text-[20px] transition-colors ${
                  isActive
                    ? 'text-[#b3884d] font-normal bg-[#f4f0ea]'
                    : 'text-[#141312] hover:text-[#b3884d]'
                }`}
              >
                <span>{item.label}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#b3884d]"></span>}
              </button>
            );
          })}
        </nav>

        <div className="mt-auto pt-8 border-t border-[#c5a059]/20">
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="flex items-center justify-center gap-2 w-full bg-[#141312] text-[#c5a059] py-3.5 rounded-sm font-mono-code text-[11px] uppercase tracking-widest hover:bg-[#22211e] transition-colors shadow-xs border border-[#2a2825]"
          >
            <span>Email Avina Lloyd</span>
            <span className="text-[12px]">↗</span>
          </button>
        </div>
      </div>
    </>
  );
};
