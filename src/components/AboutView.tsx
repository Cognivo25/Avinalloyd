import React, { useState } from 'react';
import { PageType } from '../types';
import {
  ABOUT_HERO_PORTRAIT,
  TIMELINE_EXPERIENCES,
  EDUCATION_DATA,
  AWARDS_DATA,
  PROMO_BG_IMAGE,
} from '../data/portfolioData';

interface AboutViewProps {
  onNavigate: (page: PageType) => void;
  onOpenBooking: () => void;
  onOpenCV: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  onNavigate,
  onOpenBooking,
  onOpenCV,
}) => {
  const [expandedItem, setExpandedItem] = useState<string | null>('fidelitus-exp');
  const portraitSrc = localStorage.getItem('avina_custom_hero') || ABOUT_HERO_PORTRAIT;

  const toggleExpand = (id: string) => {
    setExpandedItem((prev) => (prev === id ? null : id));
  };

  return (
    <div className="pt-24 md:pt-32 pb-24 md:pb-36 animate-fadeIn">
      {/* 1. Hero Section */}
      <section className="px-5 md:px-12 lg:px-20 max-w-[1280px] mx-auto mb-28 md:mb-36">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center">
          {/* Text Left */}
          <div className="col-span-1 md:col-span-6 space-y-6">
            <span className="font-mono-code text-[12px] text-[#5d5f5f] tracking-widest uppercase flex items-center gap-2">
              <span className="w-2 h-2 bg-[#1a1c1c] rounded-full inline-block"></span>
              Executive Biography
            </span>

            <h1 className="font-display text-[40px] sm:text-[48px] md:text-[56px] leading-[1.08] text-[#1a1c1c] font-medium tracking-tight">
              Operational Excellence through Strategic Precision.
            </h1>

            <p className="font-body text-[17px] md:text-[18px] text-[#5d5f5f] leading-relaxed max-w-lg">
              Avina Lloyd is an accomplished Chief Operations Officer (COO) with 20+ years of progressive leadership across real estate technology, healthcare administration, international business consultancy, and enterprise service delivery.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={onOpenCV}
                className="font-mono-code text-[12px] px-6 py-3.5 bg-[#1a1c1c] text-white rounded-md hover:opacity-85 transition-opacity cursor-pointer shadow-sm flex items-center gap-2"
              >
                <span>View Full Executive CV</span>
                <span className="material-symbols-outlined text-[16px]">description</span>
              </button>

              <a
                href="https://www.linkedin.com/in/avina-lloyd/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono-code text-[12px] px-6 py-3.5 border border-[#7e7576]/50 text-[#1a1c1c] rounded-md hover:bg-[#f3f3f4] transition-colors cursor-pointer inline-flex items-center gap-2"
              >
                <span>LinkedIn Profile</span>
                <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
              </a>
            </div>
          </div>

          {/* Portrait Right */}
          <div className="col-span-1 md:col-span-6 mt-4 md:mt-0 relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-md bg-[#f0eff0] border border-[#cfc4c5]/40">
            <img
              src={portraitSrc}
              alt="Avina Lloyd Executive Portrait"
              referrerPolicy="no-referrer"
              className="object-cover w-full h-full transition-transform duration-700 hover:scale-102"
            />
            {/* Floating metrics badge */}
            <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md p-6 rounded-xl flex items-center justify-between border border-[#cfc4c5]/40 shadow-lg">
              <div>
                <span className="font-display text-[32px] md:text-[36px] font-medium text-[#1a1c1c] block leading-none mb-1">
                  20+
                </span>
                <span className="font-mono-code text-[12px] text-[#5d5f5f]">
                  Years Leadership
                </span>
              </div>
              <div className="w-[1px] h-10 bg-[#cfc4c5]/50"></div>
              <div>
                <span className="font-display text-[32px] md:text-[36px] font-medium text-[#1a1c1c] block leading-none mb-1">
                  Six Sigma
                </span>
                <span className="font-mono-code text-[12px] text-[#5d5f5f]">
                  Process Excellence
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Operations Philosophy */}
      <section className="mb-28 md:mb-36 bg-[#f3f3f4] py-20 md:py-28 px-5 md:px-12 lg:px-20 border-y border-[#cfc4c5]/25">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="flex justify-center mb-2">
            <span className="material-symbols-outlined text-[44px] text-[#1a1c1c]">
              verified
            </span>
          </div>
          <h2 className="font-display text-[32px] md:text-[40px] font-medium text-[#1a1c1c] tracking-tight">
            Operational Philosophy
          </h2>
          <p className="font-body text-[17px] md:text-[19px] text-[#4c4546] leading-relaxed">
            "Sustainable enterprise growth is rooted in clarity of process, radical accountability, and empathetic leadership. By establishing Six Sigma rigor, removing operational bottlenecks, and cultivating high-trust teams, organizations transform operational discipline into an unbeatable strategic advantage."
          </p>
        </div>
      </section>

      {/* 3. Experience Timeline */}
      <section className="mb-28 md:mb-36 px-5 md:px-12 lg:px-20 max-w-[1040px] mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <span className="font-mono-code text-[12px] text-[#5d5f5f] tracking-widest uppercase flex items-center gap-2">
            <span className="w-2 h-2 bg-[#1a1c1c] rounded-full inline-block"></span>
            Career Trajectory
          </span>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start mb-14 gap-6">
          <h2 className="font-display text-[32px] md:text-[48px] font-medium text-[#1a1c1c] tracking-tight max-w-md">
            Professional Experience & Leadership
          </h2>
          <div className="max-w-sm space-y-4">
            <p className="font-body text-[15px] md:text-[16px] text-[#4c4546] leading-relaxed">
              From executive hospital administration and prop-tech operational consolidation to international HR management in Dubai and quality audit excellence at Dell.
            </p>
            <button
              onClick={onOpenBooking}
              className="font-mono-code text-[12px] text-[#1a1c1c] underline hover:opacity-70 inline-flex items-center gap-1.5 cursor-pointer font-medium"
            >
              <span>Schedule Advisory Discussion</span>
              <span className="material-symbols-outlined text-[16px]">north_east</span>
            </button>
          </div>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-4">
          {TIMELINE_EXPERIENCES.map((item) => {
            const isExpanded = expandedItem === item.id;
            const hasImages = item.images && item.images.length > 0;

            if (hasImages && isExpanded) {
              return (
                <div
                  key={item.id}
                  className="bg-[#f3f3f4] border border-[#cfc4c5]/50 rounded-xl p-6 md:p-8 transition-all duration-300 shadow-sm"
                >
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                    <div className="flex-1 cursor-pointer" onClick={() => toggleExpand(item.id)}>
                      <div className="flex items-center gap-3">
                        <h3 className="font-display text-[22px] md:text-[24px] font-medium text-[#1a1c1c]">
                          {item.role}
                        </h3>
                      </div>
                      <p className="font-body text-[16px] font-semibold text-[#3a3c3c] mt-0.5">
                        {item.company} • {item.location}
                      </p>
                      <p className="font-mono-code text-[12px] text-[#5d5f5f] mt-1.5 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#5d5f5f] rounded-full inline-block"></span>
                        {item.period}
                      </p>
                    </div>
                    <div className="flex gap-2 shrink-0 flex-wrap">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-body text-[11px] font-semibold px-3 py-1 bg-[#1a1c1c] text-white rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-6 mt-4">
                    {/* 3 Image Thumbnails */}
                    <div className="flex gap-3 flex-1">
                      {item.images!.map((img, idx) => (
                        <div
                          key={idx}
                          className="w-1/3 aspect-square rounded-lg overflow-hidden bg-neutral-200 shadow-2xs group relative"
                        >
                          <img
                            src={img}
                            alt={`Detail ${idx + 1}`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                      ))}
                    </div>

                    {/* Description and Action button */}
                    <div className="flex-1 flex flex-col justify-between items-start pl-0 md:pl-8 border-t md:border-t-0 md:border-l border-[#cfc4c5]/40 pt-4 md:pt-0">
                      <p className="font-body text-[14px] md:text-[15px] text-[#4c4546] leading-relaxed mb-6">
                        {item.description}
                      </p>
                      <button
                        onClick={onOpenBooking}
                        aria-label="View Details & Connect"
                        className="w-11 h-11 bg-[#1a1c1c] text-white rounded-full flex items-center justify-center hover:scale-105 transition-transform cursor-pointer shadow-md"
                      >
                        <span className="material-symbols-outlined text-[18px]">north_east</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={item.id}
                onClick={() => toggleExpand(item.id)}
                className="flat-stack-card p-6 md:p-8 rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6 group cursor-pointer border border-transparent hover:border-[#cfc4c5]/40 transition-colors"
              >
                <div className="flex-1">
                  <h3 className="font-display text-[20px] md:text-[22px] font-medium text-[#1a1c1c] group-hover:text-[#5d5f5f] transition-colors">
                    {item.role}
                  </h3>
                  <p className="font-body text-[15px] font-semibold text-[#4a4c4c]">
                    {item.company} • {item.location}
                  </p>
                  <p className="font-mono-code text-[12px] text-[#5d5f5f] mt-1 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#5d5f5f] rounded-full inline-block"></span>
                    {item.period}
                  </p>
                </div>

                <div className="flex-1">
                  <p className="font-body text-[14px] text-[#4c4546]">
                    {item.description}
                  </p>
                </div>

                <div className="flex gap-2 shrink-0 flex-wrap">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-body text-[11px] font-semibold px-3 py-1 bg-[#eeeeee] rounded-full text-[#5d5f5f]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Education, Certifications & Honors */}
      <section className="mb-28 md:mb-36 px-5 md:px-12 lg:px-20 max-w-[1040px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education */}
          <div className="bg-[#f3f3f4] rounded-2xl p-8 border border-[#cfc4c5]/30 shadow-xs">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-[24px] text-[#1a1c1c]">school</span>
              <h3 className="font-display text-[24px] font-medium text-[#1a1c1c]">
                Education & Credentials
              </h3>
            </div>
            <div className="space-y-6">
              {EDUCATION_DATA.map((edu, idx) => (
                <div key={idx} className="pb-4 border-b border-[#cfc4c5]/25 last:border-b-0 last:pb-0">
                  <h4 className="font-body font-semibold text-[15px] text-[#1a1c1c]">
                    {edu.degree}
                  </h4>
                  <p className="font-mono-code text-[12px] text-[#5d5f5f] mt-0.5">
                    {edu.institution}
                  </p>
                  {edu.details && (
                    <p className="font-body text-[13px] text-[#6e6869] mt-1.5">
                      {edu.details}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Awards & Distinctions */}
          <div className="bg-white rounded-2xl p-8 border border-[#cfc4c5]/40 shadow-xs">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-[24px] text-[#1a1c1c]">military_tech</span>
              <h3 className="font-display text-[24px] font-medium text-[#1a1c1c]">
                Honors & Key Accolades
              </h3>
            </div>
            <div className="space-y-6">
              {AWARDS_DATA.map((award, idx) => (
                <div key={idx} className="pb-4 border-b border-[#cfc4c5]/25 last:border-b-0 last:pb-0">
                  <div className="flex justify-between items-start">
                    <h4 className="font-body font-semibold text-[15px] text-[#1a1c1c]">
                      {award.title}
                    </h4>
                  </div>
                  <p className="font-mono-code text-[12px] text-[#5d5f5f] mt-0.5">
                    {award.organization}
                  </p>
                  <p className="font-body text-[13px] text-[#6e6869] mt-1.5">
                    {award.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Promo Banner Section */}
      <section className="px-5 md:px-12 lg:px-20 max-w-[1280px] mx-auto">
        <div className="relative rounded-2xl overflow-hidden min-h-[420px] flex items-center justify-center p-8 md:p-14 text-center shadow-2xl">
          {/* Background image & dark overlay */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${PROMO_BG_IMAGE}')` }}
          />
          <div className="absolute inset-0 bg-black/65 z-10" />

          <div className="relative z-20 max-w-2xl mx-auto space-y-6">
            <p className="font-mono-code text-[12px] text-white/80 uppercase tracking-widest">
              (CONNECT DIRECTLY WITH AVINA LLOYD)
            </p>
            <h2 className="font-display text-[32px] sm:text-[44px] md:text-[54px] font-medium leading-tight text-white tracking-tight">
              Let's Discuss Operational Strategy & Leadership
            </h2>
            <p className="font-body text-[16px] text-white/80 max-w-lg mx-auto leading-relaxed">
              Inquire regarding COO executive mandates, institutional consulting, healthcare streamlining, or strategic partnerships.
            </p>
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 font-mono-code text-[12px] text-white underline hover:text-neutral-300 transition-colors pt-2 cursor-pointer font-medium"
            >
              <span>Schedule a Meeting</span>
              <span className="material-symbols-outlined text-[16px]">north_east</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

