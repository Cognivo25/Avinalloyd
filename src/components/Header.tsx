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

  const navItems: { label: string; page: PageType; icon: string }[] = [
    { label: 'Executive Bio', page: 'about', icon: 'person' },
    { label: 'Initiatives & Impact', page: 'portfolio', icon: 'grid_view' },
    { label: 'Capabilities & Advisory', page: 'services', icon: 'layers' },
    { label: 'Connect', page: 'contact', icon: 'edit_note' },
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
            ? 'bg-[#f9f9f9]/85 backdrop-blur-xl border-b border-[#cfc4c5]/30 py-4 shadow-xs'
            : 'bg-[#f9f9f9]/70 backdrop-blur-md py-5'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-5 md:px-12 lg:px-20 flex justify-between items-center h-14">
          {/* Logo & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <button
              id="menu-btn"
              aria-label="Open Menu"
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 -ml-2 text-[#1a1c1c] hover:opacity-70 transition-opacity"
            >
              <span className="material-symbols-outlined text-[24px]">menu</span>
            </button>

            <button
              id="brand-logo"
              onClick={() => handleNavClick('home')}
              className="flex items-baseline gap-2 font-display text-[22px] md:text-[24px] font-medium tracking-tight text-[#1a1c1c] hover:opacity-80 transition-opacity text-left cursor-pointer"
            >
              <span>Avina Lloyd</span>
              <span className="font-mono-code text-[11px] font-normal text-[#5d5f5f] px-2 py-0.5 rounded-md bg-[#e5e5e5] tracking-wider uppercase hidden sm:inline-block">
                COO
              </span>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 font-mono-code text-[12px] tracking-wide">
            {navItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  id={`nav-${item.page}`}
                  onClick={() => handleNavClick(item.page)}
                  className={`transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-[#1a1c1c] font-semibold border-b border-[#1a1c1c] pb-0.5'
                      : 'text-[#5d5f5f] hover:text-[#1a1c1c] hover:opacity-80'
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
            className="flex items-center gap-2 font-mono-code text-[12px] text-[#1a1c1c] hover:bg-[#1a1c1c] hover:text-white border border-[#1a1c1c]/25 px-4 md:px-5 py-2 md:py-2.5 rounded-full transition-all duration-300 cursor-pointer shadow-2xs hover:shadow-sm"
          >
            <span>Executive Advisory</span>
            <span className="material-symbols-outlined text-[15px]">arrow_outward</span>
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        id="mobile-nav-backdrop"
        onClick={() => setIsMobileMenuOpen(false)}
        className={`fixed inset-0 bg-black/40 backdrop-blur-xs z-55 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      />

      <div
        id="mobile-nav"
        className={`fixed inset-y-0 left-0 z-60 w-4/5 max-w-sm bg-[#f9f9f9] shadow-2xl transition-transform duration-300 ease-out md:hidden flex flex-col p-6 pt-16 border-r border-[#cfc4c5]/20 ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <button
          id="close-menu-btn"
          aria-label="Close menu"
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-5 right-5 p-2 text-[#5d5f5f] hover:text-[#1a1c1c] transition-colors"
        >
          <span className="material-symbols-outlined text-[24px]">close</span>
        </button>

        <div className="font-display text-[32px] font-medium tracking-tight text-[#1a1c1c] mb-6">
          Menu
        </div>

        <nav className="flex flex-col space-y-2">
          {navItems.map((item) => {
            const isActive = currentPage === item.page;
            return (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`flex items-center gap-4 py-4 px-3 rounded-lg text-left text-[18px] transition-colors ${
                  isActive
                    ? 'text-[#1a1c1c] font-semibold bg-[#eeeeee] border-l-3 border-[#1a1c1c]'
                    : 'text-[#5d5f5f] hover:text-[#1a1c1c] hover:bg-[#f3f3f4]'
                }`}
              >
                <span className="material-symbols-outlined text-[20px] text-[#1a1c1c]">
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="mt-auto pt-8 border-t border-[#cfc4c5]/30">
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="flex items-center justify-center gap-2 w-full bg-[#1a1c1c] text-white py-4 rounded-xl font-mono-code text-[12px] uppercase tracking-wider hover:opacity-90 transition-opacity shadow-md"
          >
            <span>Book A Call</span>
            <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
          </button>
        </div>
      </div>
    </>
  );
};
