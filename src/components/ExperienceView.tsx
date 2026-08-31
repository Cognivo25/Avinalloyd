import React, { useState } from 'react';
import { PageType } from '../types';
import {
  TIMELINE_EXPERIENCES,
  EDUCATION_DATA,
  AWARDS_DATA,
  PROMO_BG_IMAGE,
} from '../data/portfolioData';
import ScrollRevealContentA, { ItemContent } from '@/src/components/ui/scroll-reveal-content-a';

interface ExperienceViewProps {
  onNavigate: (page: PageType) => void;
  onOpenBooking: () => void;
  onOpenCV: () => void;
}

export const ExperienceView: React.FC<ExperienceViewProps> = ({
  onNavigate,
  onOpenBooking,
  onOpenCV,
}) => {
  const [expandedItem, setExpandedItem] = useState<string | null>('techneat-cfo-exp');

  const toggleExpand = (id: string) => {
    setExpandedItem((prev) => (prev === id ? null : id));
  };

  const experienceMetrics = [
    { label: 'CFO & Tech Strategy', value: 'TechNeat', desc: 'Financial leadership & sustainable scale' },
    { label: 'Venture Leadership', value: 'CEO', desc: 'Triune Business Ventures scaling' },
    { label: 'Process Excellence', value: 'Six Sigma', desc: 'DMAIC & zero-defect methodologies' },
    { label: 'Quality Recognition', value: '4× Awards', desc: 'Dell Global Best Quality Audits' },
  ];

  // Featured 3 Career Pillars for the Scroll Reveal Component
  const scrollContentA: ItemContent = {
    title: 'TechNeat Info Solutions — Chief Financial Officer (CFO)',
    description:
      'Providing financial, governance, and strategic leadership behind a high-growth enterprise technology firm developing digital transformation, IoT, and sustainability solutions including the Investature Financial Emission Calculator.',
    role: 'Chief Financial Officer',
    period: 'Present',
    metric: 'Sustainable Growth & Capital Strategy',
    image: {
      url: '/images/avina-event-presentation-uru.png',
      width: 800,
      height: 600,
      alt: 'Avina Lloyd leading financial strategy and enterprise technology roadmap',
    },
  };

  const scrollContentB: ItemContent = {
    title: 'Triune Business Ventures — Chief Executive Officer (CEO)',
    description:
      'Steering multi-vertical venture operations, cross-industry corporate expansion, governance, and organizational performance across India and international markets.',
    role: 'Chief Executive Officer',
    period: '2025 - Present',
    metric: 'Enterprise Venture Scale',
    image: {
      url: '/images/avina-event-panel-stage.png',
      width: 800,
      height: 600,
      alt: 'Avina Lloyd speaking at business leadership forum',
    },
  };

  const scrollContentC: ItemContent = {
    title: 'Fidelitus Corp & Karthik Netralaya — Chief Operating Officer',
    description:
      'Spearheaded multi-vertical operations across commercial leasing, PMO, and healthcare administration, delivering a 135% throughput turnaround and 45% reduction in patient wait times.',
    role: 'Chief Operating Officer',
    period: '2021 - 2025',
    metric: '135% Turnaround Gain',
    image: {
      url: '/images/avina-event-fidelitus-expo.png',
      width: 800,
      height: 600,
      alt: 'Avina Lloyd leading executive operations and institutional transformation',
    },
  };

  return (
    <div className="pt-24 md:pt-32 pb-24 md:pb-36 animate-fadeIn">
      {/* 1. Header & Metric Highlights */}
      <section className="px-5 md:px-12 lg:px-20 max-w-[1280px] mx-auto mb-16 md:mb-24">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#b3884d]" />
            <span className="font-mono-code text-[12px] uppercase tracking-[0.25em] text-[#b3884d] font-semibold">
              Career Trajectory &amp; Track Record
            </span>
          </div>

          <h1 className="font-serif-luxury text-[38px] sm:text-[50px] md:text-[62px] leading-[1.05] text-[#141312] font-normal tracking-tight mb-6">
            Executive Leadership Experience.
          </h1>

          <p className="font-body text-[17px] sm:text-[19px] md:text-[20px] text-[#55524e] leading-relaxed mb-8 max-w-3xl">
            Two decades directing high-stakes operations, steering P&amp;L outcomes, instituting Six Sigma quality rigor, and building scalable organizational systems across enterprise ventures, PropTech, healthcare, and global trade corridors.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onOpenCV}
              className="font-mono-code text-[11px] px-6 py-3.5 bg-[#141312] text-[#c5a059] hover:bg-[#22211e] rounded-sm transition-all duration-300 cursor-pointer shadow-xs tracking-widest uppercase border border-[#2a2825] flex items-center gap-2 font-medium"
            >
              <span>Download Executive CV</span>
              <span className="text-[14px]">↗</span>
            </button>

            <button
              onClick={onOpenBooking}
              className="font-mono-code text-[11px] px-6 py-3.5 border border-[#141312]/30 text-[#141312] hover:bg-neutral-100 rounded-sm transition-colors cursor-pointer tracking-widest uppercase flex items-center gap-2 font-medium"
            >
              <span>Email Avina Lloyd</span>
              <span className="text-[14px]">↗</span>
            </button>
          </div>
        </div>

        {/* 4-Stat Metric Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-14 pt-10 border-t border-[#c5a059]/25">
          {experienceMetrics.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white p-6 sm:p-7 rounded-xl border border-[#cfc4c5]/40 shadow-2xs hover:border-[#c5a059]/40 transition-colors"
            >
              <div className="font-serif-luxury text-[28px] sm:text-[36px] font-normal text-[#141312] leading-none mb-2">
                {stat.value}
              </div>
              <div className="font-mono-code text-[11px] font-semibold uppercase tracking-wider text-[#b3884d] mb-1">
                {stat.label}
              </div>
              <p className="font-body text-[13px] text-[#78746d] leading-snug">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Interactive Scroll Reveal Section */}
      <section className="mb-24 md:mb-32 overflow-visible">
        <div className="px-5 md:px-12 lg:px-20 max-w-[1340px] mx-auto mb-6">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#b3884d]"></span>
            <span className="font-mono-code text-[11px] uppercase tracking-[0.25em] text-[#b3884d] font-semibold">
              FEATURED LEADERSHIP PHASES
            </span>
          </div>
          <h2 className="font-serif-luxury text-[30px] sm:text-[38px] md:text-[44px] font-normal text-[#141312] tracking-tight">
            High-Impact Executive Mandates
          </h2>
          <p className="font-body text-[15px] sm:text-[16px] text-[#78746d] mt-2 max-w-2xl">
            Scroll down to review the core operational transformations, turnaround outcomes, and leadership visuals.
          </p>
        </div>

        <ScrollRevealContentA
          contentA={scrollContentA}
          contentB={scrollContentB}
          contentC={scrollContentC}
        />
      </section>

      {/* 3. Comprehensive Career Roadmap Timeline */}
      <section className="mb-24 md:mb-32 px-5 md:px-12 lg:px-20 max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 pb-6 border-b border-[#c5a059]/20 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="font-mono-code text-[11px] uppercase tracking-[0.2em] text-[#78746d]">
                Chronological Career Roadmap
              </span>
            </div>
            <h2 className="font-serif-luxury text-[30px] sm:text-[38px] md:text-[44px] font-normal text-[#141312] tracking-tight">
              All Positions of Leadership
            </h2>
          </div>

          <p className="font-mono-code text-[12px] text-[#78746d] max-w-xs text-left md:text-right">
            Click any position to review mandate scope, key deliverables, and leadership visuals.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="space-y-6">
          {TIMELINE_EXPERIENCES.map((item, index) => {
            const isExpanded = expandedItem === item.id || (expandedItem === null && index === 0);
            const hasImages = item.images && item.images.length > 0;

            return (
              <div
                key={item.id}
                className={`rounded-2xl transition-all duration-300 border ${
                  isExpanded
                    ? 'bg-white border-[#c5a059]/50 shadow-lg ring-1 ring-[#c5a059]/20'
                    : 'bg-[#fbf9f6] border-[#cfc4c5]/40 hover:bg-white hover:border-[#cfc4c5]/80 hover:shadow-xs'
                }`}
              >
                {/* Header Accordion Bar */}
                <div
                  onClick={() => toggleExpand(item.id)}
                  className="p-6 md:p-8 cursor-pointer flex flex-col md:flex-row justify-between items-start md:items-center gap-4 select-none"
                >
                  <div className="space-y-2 flex-1">
                    <div className="flex flex-wrap items-center gap-2.5">
                      {/* Period Badge */}
                      <span
                        className={`font-mono-code text-[10px] font-semibold px-3 py-1 rounded-sm uppercase tracking-widest ${
                          index === 0
                            ? 'bg-[#141312] text-[#c5a059]'
                            : 'bg-[#edeae4] text-[#403d39]'
                        }`}
                      >
                        {item.period}
                      </span>

                      {/* Key Metric Pill */}
                      {item.keyMetric && (
                        <span className="font-mono-code text-[10px] font-semibold px-3 py-1 bg-[#b3884d]/10 text-[#8c6527] border border-[#b3884d]/30 rounded-sm uppercase tracking-wide">
                          {item.keyMetric}
                        </span>
                      )}
                    </div>

                    <h3 className="font-serif-luxury text-[22px] sm:text-[26px] font-normal text-[#141312] tracking-tight">
                      {item.role}
                    </h3>

                    <div className="font-body text-[14px] sm:text-[15px] text-[#55524e] flex flex-wrap items-center gap-2">
                      <span className="text-[#141312] font-semibold">{item.company}</span>
                      <span className="text-[#c5a059]">•</span>
                      <span className="text-[#78746d]">{item.location}</span>
                    </div>
                  </div>

                  {/* Right Tags & Chevron */}
                  <div className="flex items-center gap-4 shrink-0">
                    <div className="hidden lg:flex gap-1.5 flex-wrap max-w-xs justify-end">
                      {item.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="font-mono-code text-[10px] uppercase tracking-wider px-2.5 py-1 bg-[#edeae4] text-[#55524e] rounded-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div
                      className={`w-9 h-9 rounded-full border border-[#cfc4c5]/60 flex items-center justify-center font-mono-code text-[14px] transition-transform duration-300 ${
                        isExpanded ? 'bg-[#141312] text-[#c5a059] rotate-180' : 'bg-white text-[#141312] hover:bg-[#edeae4]'
                      }`}
                    >
                      ↓
                    </div>
                  </div>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="px-6 pb-6 md:px-8 md:pb-8 pt-2 border-t border-[#cfc4c5]/25 animate-fadeIn">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                      {/* Left: Mandate & Strategic Deliverables */}
                      <div className={`${hasImages ? 'lg:col-span-7' : 'lg:col-span-12'} space-y-6`}>
                        <div>
                          <div className="font-mono-code text-[10px] uppercase tracking-widest text-[#78746d] mb-2 font-semibold">
                            Executive Scope &amp; Mandate
                          </div>
                          <p className="font-body text-[15px] sm:text-[16px] text-[#403d39] leading-relaxed">
                            {item.description}
                          </p>
                        </div>

                        {/* Bullet Highlights */}
                        {item.highlights && item.highlights.length > 0 && (
                          <div className="space-y-3 pt-2">
                            <div className="font-mono-code text-[10px] uppercase tracking-widest text-[#b3884d] font-semibold flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#b3884d]" />
                              Key Deliverables &amp; Outcomes
                            </div>
                            <div className="space-y-2.5">
                              {item.highlights.map((highlight, hIdx) => (
                                <div key={hIdx} className="flex items-start gap-3">
                                  <span className="font-mono-code text-[#b3884d] text-[13px] shrink-0 mt-0.5 font-bold">
                                    —
                                  </span>
                                  <p className="font-body text-[14px] sm:text-[15px] text-[#55524e] leading-relaxed">
                                    {highlight}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Skill Tag Badges */}
                        <div className="flex flex-wrap gap-2 pt-2">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="font-mono-code text-[10px] px-3 py-1 bg-[#f4f0ea] text-[#403d39] rounded-sm border border-[#cfc4c5]/30 font-medium uppercase tracking-wider"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Right: Curated Visual Artifacts */}
                      {hasImages && (
                        <div className="lg:col-span-5 space-y-3">
                          <div className="font-mono-code text-[10px] uppercase tracking-widest text-[#78746d] font-semibold flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#78746d]" />
                            Operational &amp; Leadership Records
                          </div>

                          <div className="grid grid-cols-2 gap-3">
                            {item.images!.map((img, idx) => (
                              <div
                                key={idx}
                                className={`rounded-xl overflow-hidden bg-neutral-200 border border-[#cfc4c5]/40 shadow-xs relative group ${
                                  idx === 0 && item.images!.length === 3 ? 'col-span-2 aspect-[16/9]' : 'aspect-[4/3]'
                                }`}
                              >
                                <img
                                  src={img}
                                  alt={`${item.company} leadership record ${idx + 1}`}
                                  loading="lazy"
                                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2.5">
                                  <span className="font-mono-code text-[10px] text-white tracking-wider uppercase">
                                    {item.company}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Education, Six Sigma & Honors */}
      <section className="mb-24 md:mb-32 px-5 md:px-12 lg:px-20 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education & Credentials */}
          <div className="bg-white rounded-2xl p-8 md:p-10 border border-[#cfc4c5]/40 shadow-2xs">
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[#c5a059]/20">
              <span className="w-2 h-2 rounded-full bg-[#b3884d]" />
              <h3 className="font-serif-luxury text-[24px] sm:text-[26px] font-normal text-[#141312]">
                Education &amp; Credentials
              </h3>
            </div>
            <div className="space-y-6">
              {EDUCATION_DATA.map((edu, idx) => (
                <div key={idx} className="pb-5 border-b border-[#cfc4c5]/25 last:border-b-0 last:pb-0">
                  <div className="flex justify-between items-start gap-2">
                    <h4 className="font-body font-semibold text-[15px] sm:text-[16px] text-[#141312]">
                      {edu.degree}
                    </h4>
                    {edu.year && (
                      <span className="font-mono-code text-[11px] text-[#78746d] uppercase shrink-0">
                        {edu.year}
                      </span>
                    )}
                  </div>
                  <p className="font-mono-code text-[12px] text-[#b3884d] mt-1 font-medium">
                    {edu.institution}
                  </p>
                  {edu.details && (
                    <p className="font-body text-[13px] sm:text-[14px] text-[#55524e] mt-2 leading-relaxed">
                      {edu.details}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Honors & Key Accolades */}
          <div className="bg-[#f4f0ea]/70 rounded-2xl p-8 md:p-10 border border-[#cfc4c5]/40 shadow-2xs">
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[#c5a059]/20">
              <span className="w-2 h-2 rounded-full bg-[#141312]" />
              <h3 className="font-serif-luxury text-[24px] sm:text-[26px] font-normal text-[#141312]">
                Honors &amp; Accolades
              </h3>
            </div>
            <div className="space-y-6">
              {AWARDS_DATA.map((award, idx) => (
                <div key={idx} className="pb-5 border-b border-[#cfc4c5]/25 last:border-b-0 last:pb-0">
                  <div className="flex justify-between items-start gap-2">
                    <h4 className="font-body font-semibold text-[15px] sm:text-[16px] text-[#141312]">
                      {award.title}
                    </h4>
                    {award.year && (
                      <span className="font-mono-code text-[11px] text-[#78746d] uppercase shrink-0">
                        {award.year}
                      </span>
                    )}
                  </div>
                  <p className="font-mono-code text-[12px] text-[#b3884d] mt-1 font-medium">
                    {award.organization}
                  </p>
                  <p className="font-body text-[13px] sm:text-[14px] text-[#55524e] mt-2 leading-relaxed">
                    {award.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Executive Consultation Banner */}
      <section className="px-5 md:px-12 lg:px-20 max-w-[1280px] mx-auto">
        <div className="relative rounded-2xl overflow-hidden min-h-[380px] flex items-center justify-center p-8 md:p-14 text-center shadow-xl">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${PROMO_BG_IMAGE}')` }}
          />
          <div className="absolute inset-0 bg-[#141312]/80 z-10" />

          <div className="relative z-20 max-w-2xl mx-auto space-y-6">
            <p className="font-mono-code text-[11px] text-[#c5a059] uppercase tracking-[0.25em] font-semibold">
              EXECUTIVE ENGAGEMENT &amp; ADVISORY
            </p>
            <h2 className="font-serif-luxury text-[32px] sm:text-[42px] md:text-[50px] font-normal leading-tight text-white tracking-tight">
              Ready to Discuss Operational Strategy?
            </h2>
            <p className="font-body text-[16px] text-white/85 max-w-lg mx-auto leading-relaxed">
              Available for COO mandates, executive advisory, institutional scale consulting, and strategic board advisory.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <button
                onClick={onOpenBooking}
                className="font-mono-code text-[11px] px-7 py-3.5 bg-[#c5a059] text-[#141312] hover:bg-[#d6b36e] rounded-sm transition-all duration-300 cursor-pointer tracking-widest uppercase font-semibold shadow-sm flex items-center gap-2"
              >
                <span>Email Avina Lloyd</span>
                <span>↗</span>
              </button>

              <a
                href="https://in.linkedin.com/in/avina-lloyd"
                target="_blank"
                rel="noreferrer"
                className="font-mono-code text-[11px] px-7 py-3.5 border border-white/40 text-white hover:bg-white/10 rounded-sm transition-all duration-300 cursor-pointer tracking-widest uppercase font-medium inline-flex items-center gap-1.5"
              >
                <span>LinkedIn Profile</span>
                <span className="text-[12px]">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
