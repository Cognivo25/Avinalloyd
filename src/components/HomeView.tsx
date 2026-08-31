import React, { useRef, useState, useEffect } from 'react';
import { PageType, Project } from '../types';
import {
  HERO_IMAGE_SCREEN1,
  ABOUT_ARROW_IMAGE,
  MINI_PORTRAIT_IMAGE,
  PROJECTS,
} from '../data/portfolioData';

interface HomeViewProps {
  onNavigate: (page: PageType) => void;
  onSelectProject: (project: Project) => void;
  onOpenBooking: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onSelectProject,
  onOpenBooking,
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [heroImage, setHeroImage] = useState<string>(() => {
    return localStorage.getItem('avina_custom_hero') || HERO_IMAGE_SCREEN1;
  });

  useEffect(() => {
    const handleStorageChange = () => {
      const saved = localStorage.getItem('avina_custom_hero');
      if (saved) setHeroImage(saved);
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setHeroImage(result);
          localStorage.setItem('avina_custom_hero', result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('home-about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const featuredProjects = PROJECTS.slice(0, 3);

  return (
    <div className="pt-24 md:pt-32 pb-24 md:pb-36 animate-fadeIn">
      {/* 1. Hero Section */}
      <section className="px-5 md:px-12 lg:px-20 max-w-[1280px] mx-auto mb-28 md:mb-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[65vh]">
          {/* Text Content */}
          <div className="lg:col-span-6 z-10 flex flex-col justify-center order-2 lg:order-1 pt-6 lg:pt-0">
            {/* Stats Bar */}
            <div className="flex gap-10 mb-8 font-mono-code text-[12px] text-[#5d5f5f]">
              <div>
                <span className="text-[#1a1c1c] block text-xl font-semibold mb-0.5">20+ Yrs</span>
                <span>Executive Experience</span>
              </div>
              <div>
                <span className="text-[#1a1c1c] block text-xl font-semibold mb-0.5">4x Winner</span>
                <span>DELL Quality Audits</span>
              </div>
            </div>

            {/* Display Headline */}
            <h1 className="font-display text-[58px] sm:text-[80px] md:text-[104px] leading-[0.92] tracking-tighter text-[#1a1c1c] mb-6 font-medium">
              Avina Lloyd
            </h1>

            {/* Subtitle Statement */}
            <p className="font-body text-[18px] md:text-[20px] text-[#5d5f5f] leading-relaxed max-w-lg border-l-2 border-[#1a1c1c] pl-5 py-1 mb-12">
              — Chief Operations Officer (COO) specializing in operational optimization, strategic P&L management, Six Sigma quality frameworks, and cross-vertical scaling.
            </p>

            {/* Scroll Down Action */}
            <button
              onClick={scrollToAbout}
              className="group flex items-center gap-3 font-mono-code text-[12px] text-[#5d5f5f] hover:text-[#1a1c1c] uppercase tracking-widest transition-colors w-max cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px] transform group-hover:translate-y-1 transition-transform">
                arrow_downward
              </span>
              <span>EXPLORE EXECUTIVE PROFILE</span>
            </button>
          </div>

          {/* Hero Portrait */}
          <div className="lg:col-span-6 relative h-[450px] sm:h-[540px] md:h-[620px] w-full rounded-2xl overflow-hidden order-1 lg:order-2 bg-[#f0eff0] border border-[#cfc4c5]/40 shadow-md group">
            <img
              src={heroImage}
              alt="Avina Lloyd - Chief Operations Officer"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-102"
            />
            {/* Subtle bottom shadow gradient for contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c1c]/70 via-transparent to-transparent opacity-80 pointer-events-none" />

            {/* Executive Badge */}
            <div className="absolute bottom-5 left-5 right-5 z-10 bg-[#1a1c1c]/90 backdrop-blur-md text-white px-5 py-3.5 rounded-xl border border-white/15 flex items-center justify-between shadow-lg">
              <div>
                <div className="font-display text-[17px] font-medium text-white tracking-tight">
                  Avina Lloyd
                </div>
                <div className="font-mono-code text-[11px] text-[#e0e0e0] tracking-wider uppercase">
                  Chief Operations Officer • Fidelitus Corp
                </div>
              </div>

              {/* Upload / Switch Photo trigger */}
              <div className="flex items-center gap-2">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  accept="image/*"
                  className="hidden"
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="font-mono-code text-[11px] bg-white/15 hover:bg-white/25 text-white px-3 py-1.5 rounded-lg border border-white/20 transition-colors flex items-center gap-1.5 cursor-pointer"
                  title="Upload or change hero photo"
                >
                  <span className="material-symbols-outlined text-[15px]">photo_camera</span>
                  <span className="hidden sm:inline">Change Photo</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. About Bento Grid */}
      <section
        id="home-about-section"
        className="px-5 md:px-12 lg:px-20 max-w-[1280px] mx-auto mb-28 md:mb-36 scroll-mt-28"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          {/* Card 1: About Me Intro Card */}
          <div className="lg:col-span-5 bg-[#f3f3f4] rounded-2xl p-8 md:p-12 flex flex-col justify-between border border-[#cfc4c5]/20 shadow-2xs">
            <div>
              <div className="font-mono-code text-[11px] uppercase tracking-widest text-[#5d5f5f] mb-3">
                Executive Leadership
              </div>
              <h2 className="font-display text-[32px] md:text-[44px] text-[#1a1c1c] font-medium mb-6">
                Strategic Precision. Operational Scalability.
              </h2>
              <p className="font-body text-[16px] md:text-[17px] text-[#5d5f5f] leading-relaxed mb-8">
                As Chief Operations Officer at Fidelitus and former COO at Karthik Netralaya, I architect high-performance operating frameworks, eliminate systemic friction, and align cross-functional teams with rigorous corporate milestones.
              </p>
            </div>

            {/* Abstract Arrow Visual */}
            <div className="mt-6 pt-4 border-t border-[#cfc4c5]/20">
              <div
                className="w-full h-32 bg-contain bg-no-repeat bg-left opacity-60 transition-opacity hover:opacity-90"
                style={{ backgroundImage: `url('${ABOUT_ARROW_IMAGE}')` }}
                role="img"
                aria-label="Abstract 3D looping arrow"
              />
            </div>
          </div>

          {/* Right Bento Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {/* Card 2: Stat Card 120% */}
            <div className="bg-white border border-[#cfc4c5]/30 rounded-2xl p-8 md:p-10 flex flex-col justify-between hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-full border border-[#cfc4c5]/60 flex items-center justify-center mb-10 text-[#1a1c1c] bg-[#f9f9f9]">
                <span className="material-symbols-outlined text-[24px]">trending_up</span>
              </div>
              <div>
                <div className="font-display text-[64px] md:text-[76px] leading-none text-[#1a1c1c] font-medium tracking-tight mb-4">
                  135%
                </div>
                <p className="font-mono-code text-[12px] text-[#5d5f5f] leading-relaxed">
                  Average throughput & operational turnaround gain across managed enterprise verticals
                </p>
              </div>
            </div>

            {/* Card 3: Mini Portrait & Experience Points */}
            <div className="grid grid-rows-2 gap-6 md:gap-8 h-full">
              {/* Mini Portrait with Hover Interaction */}
              <div
                onClick={() => onNavigate('about')}
                className="bg-[#f3f3f4] rounded-2xl overflow-hidden relative group cursor-pointer min-h-[160px]"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${MINI_PORTRAIT_IMAGE}')` }}
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                <div className="absolute top-4 right-4 w-9 h-9 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
                  <span className="material-symbols-outlined text-[16px] text-[#1a1c1c]">
                    arrow_outward
                  </span>
                </div>
              </div>

              {/* Bullet Detail Card */}
              <div className="bg-white border border-[#cfc4c5]/30 rounded-2xl p-6 md:p-7 flex flex-col justify-center space-y-4 shadow-2xs">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[18px] text-[#1a1c1c] shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <p className="font-body text-[13px] text-[#5d5f5f] leading-relaxed">
                    Six Sigma trained quality practitioner driving zero-defect standards and workflow agility.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[18px] text-[#1a1c1c] shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <p className="font-body text-[13px] text-[#5d5f5f] leading-relaxed">
                    Executive steward for Fidelitus PropTech, Healthcare, Dubai consulting & Shilpa Foundation CSR.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Latest Works Horizontal Scroll */}
      <section className="mb-28 md:mb-36 overflow-hidden">
        <div className="px-5 md:px-12 lg:px-20 max-w-[1280px] mx-auto mb-10 flex justify-between items-end">
          <div>
            <span className="font-mono-code text-[12px] text-[#5d5f5f] flex items-center gap-2 mb-2 before:content-[''] before:w-1.5 before:h-1.5 before:bg-[#1a1c1c] before:rounded-full">
              Strategic Portfolio
            </span>
            <h2 className="font-display text-[32px] md:text-[48px] font-medium text-[#1a1c1c] tracking-tight">
              Operational Initiatives & Impact
            </h2>
          </div>

          <div className="hidden md:flex gap-3">
            <button
              onClick={() => scrollCarousel('left')}
              aria-label="Previous project"
              className="w-12 h-12 rounded-full border border-[#cfc4c5] flex items-center justify-center hover:bg-[#f3f3f4] transition-colors text-[#5d5f5f] hover:text-[#1a1c1c] cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">arrow_back</span>
            </button>
            <button
              onClick={() => scrollCarousel('right')}
              aria-label="Next project"
              className="w-12 h-12 rounded-full border border-[#cfc4c5] flex items-center justify-center hover:bg-[#f3f3f4] transition-colors text-[#5d5f5f] hover:text-[#1a1c1c] cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Scrollable Container */}
        <div
          ref={carouselRef}
          className="flex gap-6 md:gap-8 px-5 md:px-12 lg:px-20 pb-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar"
        >
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="flex-none w-[85vw] sm:w-[48vw] lg:w-[32vw] snap-center group cursor-pointer"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-5 bg-[#f3f3f4] shadow-xs">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${project.image}')` }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

                {/* Hover Action Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-16 h-16 bg-[#1a1c1c] text-white rounded-full flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-xl">
                    <span className="material-symbols-outlined text-[22px]">arrow_outward</span>
                  </div>
                </div>

                {/* Tags on Bottom */}
                <div className="absolute bottom-5 left-5 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {project.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full font-body text-[11px] font-semibold text-[#1a1c1c] shadow-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <h3 className="font-display text-[22px] md:text-[24px] font-medium text-[#1a1c1c] mb-1.5 group-hover:text-[#5d5f5f] transition-colors">
                {project.title}
              </h3>
              <p className="font-body text-[15px] text-[#5d5f5f] leading-relaxed">
                {project.subtitle || project.description}
              </p>
            </div>
          ))}
        </div>

        {/* View all projects Link */}
        <div className="mt-8 flex justify-center px-5">
          <button
            onClick={() => {
              onNavigate('portfolio');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="font-mono-code text-[12px] text-[#1a1c1c] flex items-center gap-2 hover:opacity-70 transition-opacity cursor-pointer border border-[#1a1c1c]/20 px-6 py-3 rounded-full hover:bg-neutral-100"
          >
            <span>View all strategic initiatives</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        </div>
      </section>

      {/* 4. CTA Consultation Banner */}
      <section className="px-5 md:px-12 lg:px-20 max-w-[1280px] mx-auto">
        <div className="bg-[#1a1c1c] text-white rounded-[2rem] p-10 sm:p-14 md:p-20 text-center relative overflow-hidden group shadow-2xl">
          {/* Abstract decorative background */}
          <div className="absolute -top-1/2 -left-1/4 w-[150%] h-[200%] bg-gradient-to-br from-white/5 to-transparent rotate-12 opacity-40 pointer-events-none group-hover:rotate-35 transition-transform duration-1000" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="font-mono-code text-[12px] text-white/70 uppercase tracking-widest block mb-6">
              STRATEGIC EXECUTIVE CONSULTATION & COLLABORATION
            </span>
            <h2 className="font-display text-[36px] sm:text-[48px] md:text-[60px] leading-tight text-white mb-6 font-medium tracking-tight">
              Optimize Operations. Scale Profitability.
            </h2>
            <p className="font-body text-[16px] md:text-[18px] text-white/80 mb-10 max-w-lg mx-auto leading-relaxed">
              Available for executive operations advisory, board collaboration, and organizational transformation mandates across prop-tech, healthcare, and enterprise ventures.
            </p>
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center gap-2 bg-white text-[#1a1c1c] px-8 py-4 rounded-full font-mono-code text-[12px] hover:scale-105 hover:bg-neutral-100 transition-all duration-300 shadow-lg cursor-pointer"
            >
              <span>Schedule Advisory Call</span>
              <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
