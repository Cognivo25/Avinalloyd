import React, { useRef, useState, useEffect } from 'react';
import { PageType, Project } from '../types';
import {
  HERO_IMAGE_SCREEN1,
  TRIUNE_LOGO,
  TECHNEAT_LOGO,
  PROJECTS,
  HERO_STREAM_IMAGES,
  DIGNITARY_CELEBRITY_ENGAGEMENTS,
} from '../data/portfolioData';
import { ImageStreamHero } from '@/components/ui/image-stream-hero';

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
  const dignitaryCarouselRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [heroImage, setHeroImage] = useState<string>(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('avina_custom_hero') : null;
    if (saved && (saved.startsWith('data:image') || saved.startsWith('blob:'))) {
      return saved;
    }
    return HERO_IMAGE_SCREEN1;
  });

  useEffect(() => {
    const saved = localStorage.getItem('avina_custom_hero');
    if (saved && !saved.startsWith('data:image') && !saved.startsWith('blob:')) {
      localStorage.removeItem('avina_custom_hero');
    }
    const handleStorageChange = () => {
      const current = localStorage.getItem('avina_custom_hero');
      if (current && (current.startsWith('data:image') || current.startsWith('blob:'))) {
        setHeroImage(current);
      } else {
        setHeroImage(HERO_IMAGE_SCREEN1);
      }
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

  const scrollDignitaryCarousel = (direction: 'left' | 'right') => {
    if (dignitaryCarouselRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      dignitaryCarouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('home-about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const featuredProjects = PROJECTS.slice(0, 4);

  return (
    <div className="pt-24 md:pt-32 pb-24 md:pb-36 animate-fadeIn">
      {/* 1. Hero Section - Luxury Editorial Centerpiece with Dynamic Image Corridor Behind */}
      <section className="relative px-4 sm:px-8 md:px-12 lg:px-16 w-full max-w-[1536px] mx-auto mb-24 md:mb-32 pt-2 md:pt-4 flex flex-col items-center">
        {/* Dynamic Curved Image Stream Corridor (Full-bleed end-to-end across viewport) */}
        <div className="absolute -top-6 sm:-top-8 left-1/2 -translate-x-1/2 w-screen max-w-[100vw] h-[460px] sm:h-[560px] md:h-[640px] lg:h-[720px] pointer-events-none opacity-90 select-none z-0 overflow-hidden">
          <ImageStreamHero
            images={HERO_STREAM_IMAGES}
            cards={12}
            speed={24}
            axis={48}
            path={{
              perspective: 28,
              cardWidth: 19,
              cardHeight: 26,
              cardRadius: 2.2,
              birthHeight: 2.6,
              exitHeight: 50,
              railBirth: -12,
              railExit: 48,
              fan: 3.2,
            }}
            className="w-full h-full"
          />
        </div>

        {/* Halo Frame & Portrait */}
        <div className="relative z-10 w-[330px] h-[330px] sm:w-[460px] sm:h-[460px] md:w-[540px] md:h-[540px] lg:w-[620px] lg:h-[620px] mx-auto flex items-center justify-center">
          {/* Subtle Outer Luxury Gold Halo Ring */}
          <div className="absolute inset-0 rounded-full border border-[#c5a059]/40 shadow-[0_0_80px_rgba(197,160,89,0.14)] pointer-events-none bg-[#f9f9f9]/20 backdrop-blur-[1px]" />
          
          {/* Soft Warm Radial Backdrop */}
          <div className="absolute inset-2 sm:inset-3 rounded-full bg-gradient-to-b from-[#f2ebe0]/90 via-[#eae0d2]/60 to-[#fbf9f5]/20 pointer-events-none" />

          {/* Portrait Cutout */}
          <div className="relative w-full h-[96%] sm:h-[98%] top-[2%] sm:top-[3%] flex items-end justify-center overflow-visible pt-2 sm:pt-4">
            <img
              src={heroImage}
              alt="Avina Lloyd - Chief Operations Officer"
              className="w-full h-full object-contain object-bottom select-none pointer-events-none z-10 drop-shadow-md"
            />
            {/* Smooth Radial Bottom Fade */}
            <div className="absolute -bottom-1 left-[-25%] right-[-25%] h-28 sm:h-36 md:h-44 bg-gradient-to-t from-[#fbf9f6] via-[#fbf9f6]/90 to-transparent z-20 pointer-events-none" />
          </div>

          {/* Hidden image upload trigger */}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageUpload}
            accept="image/*"
            className="hidden"
          />
        </div>

          {/* Big Editorial Headline & Role */}
        <div className="relative z-30 -mt-6 sm:-mt-8 md:-mt-10 lg:-mt-12 text-center w-full max-w-[1440px] mx-auto px-4 flex flex-col items-center">
          <h1 className="whitespace-nowrap font-serif-luxury text-[clamp(2.2rem,6.8vw,7.6rem)] leading-[0.92] tracking-[0.06em] sm:tracking-[0.12em] md:tracking-[0.16em] text-[#141312] font-normal uppercase drop-shadow-2xs select-none">
            AVINA &nbsp; LLOYD
          </h1>

          <div className="mt-3 sm:mt-4 md:mt-5 font-mono-code text-[11px] sm:text-[13px] md:text-[15px] tracking-[0.24em] sm:tracking-[0.32em] text-[#b3884d] uppercase font-semibold">
            CEO, TRIUNE BUSINESS VENTURES • CFO, TECHNEAT INFO SOLUTIONS
          </div>

          <p className="font-body text-[15px] sm:text-[17px] md:text-[19px] text-[#55524e] max-w-2xl mx-auto text-center leading-relaxed mt-4 sm:mt-5 font-normal">
            Building businesses that move markets. Creating partnerships that matter. Opening opportunities that last.
          </p>
        </div>

        {/* 3-Column Highlights / Metrics */}
        <div className="mt-10 sm:mt-14 md:mt-20 w-full max-w-4xl md:max-w-5xl lg:max-w-6xl mx-auto px-2 sm:px-4">
          <div className="grid grid-cols-3 items-center text-center">
            {/* Stat 1 */}
            <div className="flex flex-col items-center justify-center px-1.5 xs:px-2 sm:px-6 md:px-10">
              <span className="font-serif-luxury text-[26px] xs:text-[32px] sm:text-[46px] md:text-[52px] text-[#b3884d] leading-none mb-1 sm:mb-1.5 font-normal">
                20+
              </span>
              <span className="font-mono-code text-[9px] xs:text-[10px] sm:text-[12px] text-[#403d39] tracking-[0.08em] sm:tracking-[0.18em] uppercase font-semibold leading-tight">
                YEARS
              </span>
              <span className="font-mono-code text-[7.5px] xs:text-[9px] sm:text-[11px] text-[#78746d] tracking-[0.05em] sm:tracking-[0.14em] uppercase mt-0.5 leading-tight">
                EXECUTIVE LEADERSHIP
              </span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center justify-center border-x border-[#c5a059]/35 px-1.5 xs:px-2 sm:px-6 md:px-10">
              <span className="font-serif-luxury text-[26px] xs:text-[32px] sm:text-[46px] md:text-[52px] text-[#141312] leading-none mb-1 sm:mb-1.5 font-normal">
                4×
              </span>
              <span className="font-mono-code text-[9px] xs:text-[10px] sm:text-[12px] text-[#403d39] tracking-[0.08em] sm:tracking-[0.18em] uppercase font-semibold leading-tight">
                DELL QUALITY
              </span>
              <span className="font-mono-code text-[7.5px] xs:text-[9px] sm:text-[11px] text-[#78746d] tracking-[0.05em] sm:tracking-[0.14em] uppercase mt-0.5 leading-tight">
                AWARD WINNER
              </span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center justify-center px-1.5 xs:px-2 sm:px-6 md:px-10">
              <span className="font-serif-luxury text-[17px] xs:text-[22px] sm:text-[34px] md:text-[38px] text-[#b3884d] leading-none mb-1 sm:mb-1.5 sm:mt-1 font-normal tracking-[0.04em] sm:tracking-[0.06em]">
                SIX SIGMA
              </span>
              <span className="font-mono-code text-[9px] xs:text-[10px] sm:text-[12px] text-[#403d39] tracking-[0.08em] sm:tracking-[0.18em] uppercase font-semibold leading-tight">
                QUALITY & PROCESS
              </span>
              <span className="font-mono-code text-[7.5px] xs:text-[9px] sm:text-[11px] text-[#78746d] tracking-[0.05em] sm:tracking-[0.14em] uppercase mt-0.5 leading-tight">
                EXCELLENCE
              </span>
            </div>
          </div>
        </div>

        {/* Scroll To Explore Button */}
        <div className="mt-14 md:mt-20 flex flex-col items-center justify-center">
          <button
            onClick={scrollToAbout}
            className="group flex flex-col items-center gap-1.5 font-mono-code text-[10px] sm:text-[11px] text-[#78746d] hover:text-[#141312] uppercase tracking-[0.28em] transition-colors cursor-pointer"
          >
            <span>SCROLL TO EXPLORE</span>
            <span className="text-[16px] text-[#b3884d] transform group-hover:translate-y-1 transition-transform">
              ↓
            </span>
          </button>
        </div>
      </section>

      {/* 2. Executive Overview Bento Grid */}
      <section
        id="home-about-section"
        className="px-5 md:px-12 lg:px-20 max-w-[1280px] mx-auto mb-28 md:mb-36 scroll-mt-28"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          {/* Card 1: Intro Card */}
          <div className="lg:col-span-5 bg-[#f4f0ea]/70 rounded-2xl p-8 md:p-12 flex flex-col justify-between border border-[#cfc4c5]/30 shadow-2xs">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#b3884d]"></span>
                <span className="font-mono-code text-[11px] uppercase tracking-widest text-[#b3884d] font-semibold">
                  Executive Leadership &amp; Vision
                </span>
              </div>
              <h2 className="font-serif-luxury text-[30px] md:text-[38px] text-[#141312] font-normal mb-5 leading-tight">
                Business Growth. Strategic Partnerships.
              </h2>
              <p className="font-body text-[15px] md:text-[16px] text-[#55524e] leading-relaxed mb-6">
                CEO at Triune Business Ventures and CFO at Techneat Info Solutions. Turning relationships and market opportunities into measurable enterprise value while championing purposeful collaboration, governance, and women in leadership.
              </p>
              
              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={() => onNavigate('about')}
                  className="font-mono-code text-[11px] px-5 py-2.5 bg-[#141312] text-[#c5a059] rounded-sm hover:bg-[#22211e] transition-colors cursor-pointer uppercase tracking-wider font-medium flex items-center gap-1.5"
                >
                  <span>Executive Bio</span>
                  <span>↗</span>
                </button>
                <button
                  onClick={() => onNavigate('experience')}
                  className="font-mono-code text-[11px] px-5 py-2.5 border border-[#141312]/30 text-[#141312] rounded-sm hover:bg-white transition-colors cursor-pointer uppercase tracking-wider font-medium flex items-center gap-1.5"
                >
                  <span>Career Track Record</span>
                  <span>↗</span>
                </button>
              </div>
            </div>

            {/* Triune Business Ventures Logo */}
            <div className="mt-8 pt-5 border-t border-[#c5a059]/25 flex items-center justify-start">
              <div className="bg-white/90 backdrop-blur-sm p-4 sm:p-5 rounded-xl border border-[#c5a059]/30 shadow-xs w-full max-w-[340px] hover:border-[#c5a059]/60 hover:shadow-sm transition-all">
                <img
                  src={TRIUNE_LOGO}
                  alt="Triune Business Ventures Pvt. Ltd. — A Conglomerate Company"
                  className="w-full h-auto max-h-20 object-contain object-left"
                />
              </div>
            </div>
          </div>

          {/* Right Bento Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {/* Card 2: Stat Card 135% */}
            <div className="bg-white border border-[#cfc4c5]/40 rounded-2xl p-8 md:p-10 flex flex-col justify-between hover:shadow-md transition-all duration-300">
              <div className="inline-flex items-center gap-2 text-[#b3884d] font-mono-code text-[11px] uppercase tracking-widest font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#b3884d]"></span>
                OPERATIONAL IMPACT
              </div>
              <div className="my-6">
                <div className="font-serif-luxury text-[56px] md:text-[68px] leading-none text-[#141312] font-normal tracking-tight mb-3">
                  135%
                </div>
                <p className="font-mono-code text-[12px] text-[#78746d] leading-relaxed">
                  Average throughput &amp; operational turnaround gain across managed enterprise verticals
                </p>
              </div>
              <button
                onClick={() => onNavigate('experience')}
                className="font-mono-code text-[11px] text-[#141312] hover:text-[#b3884d] uppercase tracking-widest transition-colors inline-flex items-center gap-1 cursor-pointer font-semibold"
              >
                <span>View Full Experience</span>
                <span>↗</span>
              </button>
            </div>

            {/* Card 3: TechNeat Logo Card & Experience Points */}
            <div className="grid grid-rows-2 gap-6 md:gap-8 h-full">
              {/* TechNeat Logo Card */}
              <div
                onClick={() => onNavigate('experience')}
                className="bg-white rounded-2xl p-5 sm:p-6 flex flex-col items-center justify-center relative group cursor-pointer border border-[#cfc4c5]/40 shadow-2xs hover:border-[#1473a5]/50 hover:shadow-md transition-all duration-300 min-h-[140px]"
              >
                <div className="w-full max-w-[190px] sm:max-w-[210px] flex items-center justify-center">
                  <img
                    src={TECHNEAT_LOGO}
                    alt="TechNeat Info Solutions"
                    className="w-full h-auto max-h-12 object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-2.5 flex items-center gap-1.5 font-mono-code text-[10px] text-[#78746d] uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1473a5]"></span>
                  <span>Chief Financial Officer (CFO)</span>
                </div>
                <div className="absolute top-3 right-3 px-2 py-0.5 bg-[#fbf9f6] rounded-sm flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-[#cfc4c5]/50 shadow-2xs">
                  <span className="font-mono-code text-[9px] text-[#141312] uppercase tracking-wider font-semibold">View</span>
                  <span className="text-[10px]">↗</span>
                </div>
              </div>

              {/* Detail Card */}
              <div className="bg-white border border-[#cfc4c5]/40 rounded-2xl p-6 md:p-7 flex flex-col justify-center space-y-4 shadow-2xs">
                <div className="flex items-start gap-3">
                  <span className="font-mono-code text-[#b3884d] text-[12px] shrink-0 mt-0.5 font-bold">
                    ◆
                  </span>
                  <p className="font-body text-[13px] text-[#55524e] leading-relaxed">
                    Six Sigma trained practitioner driving zero-defect standards and workflow agility across multi-crore operations.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-mono-code text-[#b3884d] text-[12px] shrink-0 mt-0.5 font-bold">
                    ◆
                  </span>
                  <p className="font-body text-[13px] text-[#55524e] leading-relaxed">
                    Executive leadership for Triune Ventures, Fidelitus PropTech, Healthcare, Dubai consulting &amp; CSR.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Celebrity & Dignitary Engagements Luxury Showcase */}
      <section className="mb-28 md:mb-36 overflow-hidden">
        <div className="px-5 md:px-12 lg:px-20 max-w-[1280px] mx-auto mb-10 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#b3884d]"></span>
              <span className="font-mono-code text-[12px] text-[#b3884d] uppercase tracking-[0.25em] font-semibold">
                High-Profile Engagements &amp; Summits
              </span>
            </div>
            <h2 className="font-serif-luxury text-[32px] md:text-[44px] font-normal text-[#141312] tracking-tight">
              Dignitaries, Ministers &amp; Industry Icons
            </h2>
            <p className="font-body text-[14px] sm:text-[16px] text-[#78746d] mt-2 max-w-2xl">
              Fostering bilateral ties, policy dialogues, and high-impact partnerships with state ministers, cultural icons, and enterprise leaders.
            </p>
          </div>

          <div className="hidden md:flex gap-2.5 shrink-0">
            <button
              onClick={() => scrollDignitaryCarousel('left')}
              aria-label="Previous dignitary engagement"
              className="w-11 h-11 rounded-sm border border-[#cfc4c5]/60 flex items-center justify-center hover:bg-white transition-colors text-[#141312] font-mono-code text-[16px] cursor-pointer shadow-2xs"
            >
              ←
            </button>
            <button
              onClick={() => scrollDignitaryCarousel('right')}
              aria-label="Next dignitary engagement"
              className="w-11 h-11 rounded-sm border border-[#cfc4c5]/60 flex items-center justify-center hover:bg-white transition-colors text-[#141312] font-mono-code text-[16px] cursor-pointer shadow-2xs"
            >
              →
            </button>
          </div>
        </div>

        {/* Dignitary Scrollable Container */}
        <div
          ref={dignitaryCarouselRef}
          className="flex gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-12 lg:px-20 pb-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar scroll-pl-4 sm:scroll-pl-6 md:scroll-pl-12"
        >
          {DIGNITARY_CELEBRITY_ENGAGEMENTS.map((item) => (
            <div
              key={item.id}
              className="flex-none w-[78vw] xs:w-[76vw] sm:w-[50vw] md:w-[42vw] lg:w-[32vw] snap-start group bg-white rounded-2xl border border-[#cfc4c5]/40 shadow-xs hover:shadow-xl hover:border-[#c5a059]/40 transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {item.badge && (
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 bg-[#141312]/90 backdrop-blur-md text-[#c5a059] border border-[#c5a059]/30 rounded-sm font-mono-code text-[10px] uppercase tracking-wider font-semibold shadow-xs">
                        {item.badge}
                      </span>
                    </div>
                  )}

                  <div className="absolute bottom-3 left-3 right-3 text-white font-mono-code text-[10px] uppercase tracking-wider">
                    <span className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-sm border border-white/10 inline-block">
                      {item.event}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-serif-luxury text-[20px] sm:text-[22px] font-normal text-[#141312] mb-1 group-hover:text-[#b3884d] transition-colors leading-snug">
                    {item.name}
                  </h3>
                  <div className="font-mono-code text-[11px] text-[#b3884d] uppercase tracking-wide font-medium mb-3">
                    {item.role}
                  </div>
                  {item.description && (
                    <p className="font-body text-[13px] sm:text-[14px] text-[#55524e] leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>

              <div className="px-6 pb-6 pt-0 border-t border-[#cfc4c5]/25 flex items-center justify-between mt-3 pt-3">
                <span className="font-mono-code text-[10px] text-[#78746d] uppercase tracking-wider">
                  Official Delegation
                </span>
                <span className="font-mono-code text-[11px] text-[#141312] group-hover:text-[#b3884d] font-semibold">
                  Summit Record ↗
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Latest Works Horizontal Scroll */}
      <section className="mb-28 md:mb-36 overflow-hidden">
        <div className="px-5 md:px-12 lg:px-20 max-w-[1280px] mx-auto mb-10 flex justify-between items-end">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#b3884d]"></span>
              <span className="font-mono-code text-[12px] text-[#b3884d] uppercase tracking-[0.25em] font-semibold">
                Strategic Portfolio
              </span>
            </div>
            <h2 className="font-serif-luxury text-[32px] md:text-[44px] font-normal text-[#141312] tracking-tight">
              Operational Initiatives &amp; Impact
            </h2>
          </div>

          <div className="hidden md:flex gap-2.5">
            <button
              onClick={() => scrollCarousel('left')}
              aria-label="Previous initiative"
              className="w-11 h-11 rounded-sm border border-[#cfc4c5]/60 flex items-center justify-center hover:bg-white transition-colors text-[#141312] font-mono-code text-[16px] cursor-pointer shadow-2xs"
            >
              ←
            </button>
            <button
              onClick={() => scrollCarousel('right')}
              aria-label="Next initiative"
              className="w-11 h-11 rounded-sm border border-[#cfc4c5]/60 flex items-center justify-center hover:bg-white transition-colors text-[#141312] font-mono-code text-[16px] cursor-pointer shadow-2xs"
            >
              →
            </button>
          </div>
        </div>

        {/* Scrollable Container */}
        <div
          ref={carouselRef}
          className="flex gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-12 lg:px-20 pb-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar scroll-pl-4 sm:scroll-pl-6 md:scroll-pl-12"
        >
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="flex-none w-[72vw] xs:w-[74vw] sm:w-[46vw] lg:w-[31vw] snap-start group cursor-pointer"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-5 bg-[#f3f3f4] shadow-xs border border-[#cfc4c5]/40">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${project.image}')` }}
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300" />

                {/* Hover Action Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="px-5 py-2.5 bg-[#141312] text-[#c5a059] font-mono-code text-[11px] uppercase tracking-widest rounded-sm flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 shadow-xl border border-[#2a2825]">
                    <span>View Case Study</span>
                    <span>↗</span>
                  </div>
                </div>

                {/* Tags on Bottom */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-sm font-mono-code text-[10px] uppercase tracking-wider text-[#141312] font-semibold shadow-xs">
                    {project.category}
                  </span>
                </div>
              </div>

              <h3 className="font-serif-luxury text-[20px] md:text-[22px] font-normal text-[#141312] mb-1.5 group-hover:text-[#b3884d] transition-colors">
                {project.title}
              </h3>
              <p className="font-body text-[14px] text-[#55524e] leading-relaxed line-clamp-2">
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
            className="font-mono-code text-[11px] text-[#141312] flex items-center gap-2 hover:bg-[#141312] hover:text-[#c5a059] transition-all cursor-pointer border border-[#141312]/30 px-6 py-3 rounded-sm uppercase tracking-widest font-medium"
          >
            <span>Explore All Initiatives &amp; Impact</span>
            <span>↗</span>
          </button>
        </div>
      </section>

      {/* 5. CTA Consultation Banner */}
      <section className="px-5 md:px-12 lg:px-20 max-w-[1280px] mx-auto">
        <div className="bg-[#141312] text-white rounded-2xl p-10 sm:p-14 md:p-20 text-center relative overflow-hidden group shadow-2xl border border-[#2a2825]">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="font-mono-code text-[11px] text-[#c5a059] uppercase tracking-[0.25em] block font-semibold">
              STRATEGIC EXECUTIVE CONSULTATION &amp; COLLABORATION
            </span>
            <h2 className="font-serif-luxury text-[34px] sm:text-[46px] md:text-[54px] leading-tight text-white font-normal tracking-tight">
              Optimize Operations. Scale Enterprise Value.
            </h2>
            <p className="font-body text-[16px] md:text-[17px] text-white/85 max-w-lg mx-auto leading-relaxed">
              Available for executive operations advisory, board collaboration, healthcare streamlining, and cross-border trade mandates.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 bg-[#c5a059] text-[#141312] px-8 py-4 rounded-sm font-mono-code text-[11px] hover:bg-[#d6b36e] transition-all duration-300 shadow-lg cursor-pointer uppercase tracking-widest font-semibold"
              >
                <span>Email Avina Lloyd</span>
                <span>↗</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
