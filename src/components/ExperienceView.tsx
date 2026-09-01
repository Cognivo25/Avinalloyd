import React, { useState } from 'react';
import { PageType } from '../types';
import {
  TIMELINE_EXPERIENCES,
  EDUCATION_DATA,
  AWARDS_DATA,
  PROMO_BG_IMAGE,
} from '../data/portfolioData';

interface ExperienceViewProps {
  onNavigate: (page: PageType) => void;
  onOpenBooking: () => void;
  onOpenCV: () => void;
}

type TimelineFilter = 'All' | 'C-Suite' | 'Operations' | 'Global';

export const ExperienceView: React.FC<ExperienceViewProps> = ({
  onNavigate,
  onOpenBooking,
  onOpenCV,
}) => {
  const [activeMandateIndex, setActiveMandateIndex] = useState(0);
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({
    'techneat-cfo-exp': true,
    'triune-ceo-exp': true,
  });
  const [activeFilter, setActiveFilter] = useState<TimelineFilter>('All');

  const toggleExpand = (id: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleExpandAll = (expand: boolean) => {
    const newState: Record<string, boolean> = {};
    TIMELINE_EXPERIENCES.forEach((item) => {
      newState[item.id] = expand;
    });
    setExpandedItems(newState);
  };

  const experienceMetrics = [
    { label: 'CFO & Tech Strategy', value: 'TechNeat', desc: 'Financial leadership & ESG models' },
    { label: 'Venture Leadership', value: 'CEO', desc: 'Triune Business Ventures scaling' },
    { label: 'Operational Turnaround', value: '135%', desc: 'Throughput gain across multi-verticals' },
    { label: 'Quality Recognition', value: '4× Awards', desc: 'Dell Global Best Quality Audits' },
  ];

  // Top 3 Featured Executive Mandates
  const featuredMandates = [
    {
      id: 'techneat-cfo',
      number: '01',
      title: 'TechNeat Info Solutions',
      role: 'Chief Financial Officer (CFO)',
      period: 'Present',
      metric: 'Sustainable Growth & Capital Strategy',
      badge: 'C-Suite Executive',
      description:
        'Providing financial, governance, and strategic leadership behind an enterprise technology firm developing automation, IoT, and sustainability solutions (Investature Financial Emission Calculator).',
      deliverables: [
        'Supporting responsible scaling and financial discipline across international tech expansion',
        'Aligning capital allocation, cash-flow models, and commercialization strategies for digital products',
        'Championing sustainability-aligned financial solutions and enterprise ESG transparency',
      ],
      image: '/images/avina-event-presentation-uru.png',
      imageAlt: 'Avina Lloyd leading financial strategy and enterprise technology roadmap',
      tags: ['Chief Financial Officer', 'Financial Strategy', 'Enterprise Tech', 'IoT Solutions', 'Investature'],
    },
    {
      id: 'triune-ceo',
      number: '02',
      title: 'Triune Business Ventures Pvt Ltd',
      role: 'Chief Executive Officer (CEO)',
      period: 'Jun 2025 - Present',
      metric: 'Enterprise Venture Scale',
      badge: 'Group CEO',
      description:
        'Steering strategic direction, cross-industry corporate expansion, governance, and organizational performance as CEO of a conglomerate enterprise.',
      deliverables: [
        'Architecting multi-vertical venture operations and corporate governance models',
        'Orchestrating P&L strategies, investor relations, and capital deployment',
        'Instituting high-accountability executive leadership practices across enterprise teams',
      ],
      image: '/image copy.png',
      imageAlt: 'Avina Lloyd receiving Gold Sponsor award as Group CEO of Triune Business Ventures',
      tags: ['Executive Leadership', 'CEO', 'Business Ventures', 'Strategic Operations', 'P&L Management'],
    },
    {
      id: 'fidelitus-coo',
      number: '03',
      title: 'Fidelitus Corp & Karthik Netralaya',
      role: 'Chief Operating Officer (COO)',
      period: '2021 - 2025',
      metric: '135% Turnaround Gain',
      badge: 'Operations Transformation',
      description:
        'Spearheaded multi-vertical operations across commercial leasing, PMO, facility administration, and healthcare empanelments, delivering a 135% throughput turnaround and 45% outpatient wait reduction.',
      deliverables: [
        'Established unified ERP & CRM operating workflows across all business divisions',
        'Achieved 100% regulatory audit compliance across government empanelments (CGHS, ECHS)',
        'Overhauled corporate governance, financial budgeting, and SLA compliance cadences',
      ],
      image: '/images/avina-event-fidelitus-expo.png',
      imageAlt: 'Avina Lloyd leading executive operations and institutional transformation',
      tags: ['COO', 'Healthcare Operations', 'PropTech PMO', 'Quality Systems', 'Six Sigma'],
    },
  ];

  const currentMandate = featuredMandates[activeMandateIndex];

  // Filtered list of timeline items
  const filteredTimeline = TIMELINE_EXPERIENCES.filter((item) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'C-Suite') {
      return item.role.includes('Chief') || item.role.includes('CEO') || item.role.includes('CFO') || item.role.includes('COO');
    }
    if (activeFilter === 'Operations') {
      return item.role.includes('Operations') || item.role.includes('Quality') || item.role.includes('Administration');
    }
    if (activeFilter === 'Global') {
      return item.location.includes('International') || item.location.includes('Dubai') || item.tags.includes('Dubai UAE') || item.tags.includes('Investature');
    }
    return true;
  });

  return (
    <div className="pt-20 sm:pt-24 md:pt-32 pb-20 sm:pb-24 md:pb-36 animate-fadeIn">
      {/* 1. Header & Key Metric Highlights */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 max-w-[1280px] mx-auto mb-14 md:mb-20">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
            <span className="w-2 h-2 rounded-full bg-[#b3884d]" />
            <span className="font-mono-code text-[11px] sm:text-[12px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#b3884d] font-semibold">
              Career Trajectory &amp; Track Record
            </span>
          </div>

          <h1 className="font-serif-luxury text-[32px] sm:text-[46px] md:text-[62px] leading-[1.1] sm:leading-[1.05] text-[#141312] font-normal tracking-tight mb-4 sm:mb-6">
            Executive Leadership Experience.
          </h1>

          <p className="font-body text-[15px] sm:text-[18px] md:text-[20px] text-[#55524e] leading-relaxed mb-6 sm:mb-8 max-w-3xl">
            Two decades directing enterprise operations, steering P&amp;L outcomes, instituting Six Sigma quality rigor, and building scalable organizational systems across enterprise ventures, PropTech, healthcare, and global trade corridors.
          </p>

          <div className="flex flex-col xs:flex-row sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 pt-1">
            <button
              onClick={onOpenCV}
              className="font-mono-code text-[11px] px-5 sm:px-6 py-3.5 bg-[#141312] text-[#c5a059] hover:bg-[#22211e] rounded-sm transition-all duration-300 cursor-pointer shadow-xs tracking-widest uppercase border border-[#2a2825] flex items-center justify-center gap-2 font-medium"
            >
              <span>Download Executive CV</span>
              <span className="text-[14px]">↗</span>
            </button>

            <button
              onClick={onOpenBooking}
              className="font-mono-code text-[11px] px-5 sm:px-6 py-3.5 border border-[#141312]/30 text-[#141312] hover:bg-neutral-100 rounded-sm transition-colors cursor-pointer tracking-widest uppercase flex items-center justify-center gap-2 font-medium"
            >
              <span>Email Avina Lloyd</span>
              <span className="text-[14px]">↗</span>
            </button>
          </div>
        </div>

        {/* 4-Stat Metric Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mt-10 sm:mt-14 pt-8 sm:pt-10 border-t border-[#c5a059]/25">
          {experienceMetrics.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white p-4 sm:p-6 md:p-7 rounded-xl border border-[#cfc4c5]/40 shadow-2xs hover:border-[#c5a059]/40 transition-colors"
            >
              <div className="font-serif-luxury text-[24px] sm:text-[32px] md:text-[36px] font-normal text-[#141312] leading-none mb-1.5 sm:mb-2">
                {stat.value}
              </div>
              <div className="font-mono-code text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#b3884d] mb-1">
                {stat.label}
              </div>
              <p className="font-body text-[12px] sm:text-[13px] text-[#78746d] leading-snug">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Interactive Flagship Leadership Mandates Showcase */}
      <section className="mb-20 md:mb-28 px-4 sm:px-6 md:px-12 lg:px-20 max-w-[1280px] mx-auto">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#b3884d]"></span>
            <span className="font-mono-code text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#b3884d] font-semibold">
              FLAGSHIP EXECUTIVE PHASES
            </span>
          </div>
          <h2 className="font-serif-luxury text-[26px] sm:text-[36px] md:text-[44px] font-normal text-[#141312] tracking-tight">
            High-Impact Leadership Mandates
          </h2>
          <p className="font-body text-[14px] sm:text-[16px] text-[#78746d] mt-1.5 max-w-2xl">
            Select a mandate below to inspect executive scope, deliverables, and photographic records.
          </p>
        </div>

        {/* Mandate Tab Selectors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mb-6">
          {featuredMandates.map((m, idx) => {
            const isSelected = activeMandateIndex === idx;
            return (
              <button
                key={m.id}
                onClick={() => setActiveMandateIndex(idx)}
                className={`text-left p-4 sm:p-5 rounded-xl border transition-all duration-300 cursor-pointer flex flex-col justify-between gap-3 ${
                  isSelected
                    ? 'bg-[#141312] text-white border-[#141312] shadow-md ring-1 ring-[#c5a059]/40'
                    : 'bg-white text-[#141312] border-[#cfc4c5]/40 hover:border-[#c5a059]/40 hover:bg-[#faf8f5]'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span
                    className={`font-mono-code text-[11px] font-bold ${
                      isSelected ? 'text-[#c5a059]' : 'text-[#b3884d]'
                    }`}
                  >
                    {m.number}
                  </span>
                  <span
                    className={`font-mono-code text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-sm ${
                      isSelected ? 'bg-white/10 text-white' : 'bg-[#edeae4] text-[#403d39]'
                    }`}
                  >
                    {m.period}
                  </span>
                </div>

                <div>
                  <h3
                    className={`font-serif-luxury text-[17px] sm:text-[18px] font-normal leading-snug ${
                      isSelected ? 'text-white' : 'text-[#141312]'
                    }`}
                  >
                    {m.role}
                  </h3>
                  <p
                    className={`font-body text-[13px] mt-1 line-clamp-1 ${
                      isSelected ? 'text-white/70' : 'text-[#78746d]'
                    }`}
                  >
                    {m.title}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Mandate Showcase Card */}
        <div className="bg-white rounded-2xl border border-[#c5a059]/35 shadow-lg p-6 sm:p-8 md:p-10 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 bg-[#141312] text-[#c5a059] font-mono-code text-[10px] uppercase tracking-widest rounded-sm font-semibold">
                    {currentMandate.badge}
                  </span>
                  <span className="px-3 py-1 bg-[#b3884d]/15 text-[#8c6527] border border-[#b3884d]/30 font-mono-code text-[10px] uppercase tracking-wider rounded-sm font-semibold">
                    {currentMandate.metric}
                  </span>
                </div>

                <h3 className="font-serif-luxury text-[26px] sm:text-[32px] text-[#141312] font-normal leading-tight">
                  {currentMandate.role}
                </h3>
                <div className="font-mono-code text-[12px] text-[#b3884d] uppercase tracking-wide font-medium">
                  {currentMandate.title} • {currentMandate.period}
                </div>
              </div>

              <p className="font-body text-[15px] sm:text-[16px] text-[#55524e] leading-relaxed">
                {currentMandate.description}
              </p>

              {/* Key Deliverables */}
              <div className="space-y-3 pt-2">
                <div className="font-mono-code text-[11px] uppercase tracking-widest text-[#141312] font-semibold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#b3884d]" />
                  Key Strategic Deliverables
                </div>
                <div className="space-y-2.5">
                  {currentMandate.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-3">
                      <span className="font-mono-code text-[#b3884d] text-[13px] shrink-0 mt-0.5 font-bold">
                        ◆
                      </span>
                      <p className="font-body text-[14px] sm:text-[15px] text-[#403d39] leading-relaxed">
                        {del}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tag badging */}
              <div className="flex flex-wrap gap-2 pt-2">
                {currentMandate.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono-code text-[10px] px-3 py-1 bg-[#faf8f5] text-[#403d39] rounded-sm border border-[#cfc4c5]/40 uppercase tracking-wider font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Showcase Visual */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-200 border border-[#c5a059]/30 shadow-md group">
                <img
                  src={currentMandate.image}
                  alt={currentMandate.imageAlt}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="font-mono-code text-[11px] text-white tracking-wider uppercase">
                    {currentMandate.title}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Comprehensive Chronological Career Roadmap */}
      <section className="mb-20 md:mb-28 px-4 sm:px-6 md:px-12 lg:px-20 max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 pb-5 border-b border-[#c5a059]/20 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-[#141312]" />
              <span className="font-mono-code text-[11px] uppercase tracking-[0.2em] text-[#78746d]">
                Chronological Career Roadmap
              </span>
            </div>
            <h2 className="font-serif-luxury text-[28px] sm:text-[36px] md:text-[44px] font-normal text-[#141312] tracking-tight">
              All Positions of Leadership
            </h2>
          </div>

          {/* Quick Actions & Category Filters */}
          <div className="flex flex-wrap items-center gap-2">
            {(['All', 'C-Suite', 'Operations', 'Global'] as TimelineFilter[]).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3.5 py-1.5 rounded-full font-mono-code text-[11px] uppercase tracking-wider transition-colors cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-[#141312] text-white shadow-xs'
                    : 'bg-white border border-[#cfc4c5]/60 text-[#141312] hover:bg-[#faf8f5]'
                }`}
              >
                {filter}
              </button>
            ))}

            <div className="hidden sm:flex items-center gap-2 pl-2 border-l border-[#cfc4c5]/40">
              <button
                onClick={() => handleExpandAll(true)}
                className="font-mono-code text-[10px] text-[#78746d] hover:text-[#141312] uppercase tracking-wider underline cursor-pointer"
              >
                Expand All
              </button>
              <span className="text-[#cfc4c5]">/</span>
              <button
                onClick={() => handleExpandAll(false)}
                className="font-mono-code text-[10px] text-[#78746d] hover:text-[#141312] uppercase tracking-wider underline cursor-pointer"
              >
                Collapse All
              </button>
            </div>
          </div>
        </div>

        {/* Timeline Items List */}
        <div className="space-y-4 sm:space-y-6">
          {filteredTimeline.map((item, index) => {
            const isExpanded = !!expandedItems[item.id];
            const hasImages = item.images && item.images.length > 0;

            return (
              <div
                key={item.id}
                className={`rounded-2xl transition-all duration-300 border ${
                  isExpanded
                    ? 'bg-white border-[#c5a059]/50 shadow-md ring-1 ring-[#c5a059]/20'
                    : 'bg-[#fbf9f6] border-[#cfc4c5]/40 hover:bg-white hover:border-[#cfc4c5]/80 hover:shadow-xs'
                }`}
              >
                {/* Header Accordion Bar */}
                <div
                  onClick={() => toggleExpand(item.id)}
                  className="p-5 sm:p-6 md:p-8 cursor-pointer flex flex-col md:flex-row justify-between items-start md:items-center gap-4 select-none"
                >
                  <div className="space-y-2 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      {/* Period Badge */}
                      <span
                        className={`font-mono-code text-[10px] font-semibold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-sm uppercase tracking-widest ${
                          index === 0
                            ? 'bg-[#141312] text-[#c5a059]'
                            : 'bg-[#edeae4] text-[#403d39]'
                        }`}
                      >
                        {item.period}
                      </span>

                      {/* Key Metric Pill */}
                      {item.keyMetric && (
                        <span className="font-mono-code text-[10px] font-semibold px-2.5 py-0.5 sm:px-3 sm:py-1 bg-[#b3884d]/10 text-[#8c6527] border border-[#b3884d]/30 rounded-sm uppercase tracking-wide">
                          {item.keyMetric}
                        </span>
                      )}
                    </div>

                    <h3 className="font-serif-luxury text-[20px] sm:text-[24px] md:text-[26px] font-normal text-[#141312] tracking-tight">
                      {item.role}
                    </h3>

                    <div className="font-body text-[13px] sm:text-[15px] text-[#55524e] flex flex-wrap items-center gap-1.5 sm:gap-2">
                      <span className="text-[#141312] font-semibold">{item.company}</span>
                      <span className="text-[#c5a059]">•</span>
                      <span className="text-[#78746d]">{item.location}</span>
                    </div>
                  </div>

                  {/* Right Tags & Chevron */}
                  <div className="flex items-center justify-between w-full md:w-auto md:justify-end gap-3 sm:gap-4 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-[#cfc4c5]/25">
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

                    <span className="md:hidden font-mono-code text-[10px] uppercase tracking-wider text-[#78746d]">
                      {isExpanded ? 'Collapse' : 'View Scope'}
                    </span>

                    <div
                      className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#cfc4c5]/60 flex items-center justify-center font-mono-code text-[13px] sm:text-[14px] transition-transform duration-300 ${
                        isExpanded ? 'bg-[#141312] text-[#c5a059] rotate-180' : 'bg-white text-[#141312] hover:bg-[#edeae4]'
                      }`}
                    >
                      ↓
                    </div>
                  </div>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 md:px-8 md:pb-8 pt-2 border-t border-[#cfc4c5]/25 animate-fadeIn">
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
      <section className="mb-20 md:mb-28 px-4 sm:px-6 md:px-12 lg:px-20 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Education & Credentials */}
          <div className="bg-white rounded-2xl p-5 sm:p-8 md:p-10 border border-[#cfc4c5]/40 shadow-2xs">
            <div className="flex items-center gap-2 mb-5 sm:mb-6 pb-3.5 sm:pb-4 border-b border-[#c5a059]/20">
              <span className="w-2 h-2 rounded-full bg-[#b3884d]" />
              <h3 className="font-serif-luxury text-[20px] sm:text-[24px] md:text-[26px] font-normal text-[#141312]">
                Education &amp; Credentials
              </h3>
            </div>
            <div className="space-y-5 sm:space-y-6">
              {EDUCATION_DATA.map((edu, idx) => (
                <div key={idx} className="pb-4 sm:pb-5 border-b border-[#cfc4c5]/25 last:border-b-0 last:pb-0">
                  <div className="flex justify-between items-start gap-2">
                    <h4 className="font-body font-semibold text-[14px] sm:text-[16px] text-[#141312]">
                      {edu.degree}
                    </h4>
                    {edu.year && (
                      <span className="font-mono-code text-[10px] sm:text-[11px] text-[#78746d] uppercase shrink-0">
                        {edu.year}
                      </span>
                    )}
                  </div>
                  <p className="font-mono-code text-[11px] sm:text-[12px] text-[#b3884d] mt-1 font-medium">
                    {edu.institution}
                  </p>
                  {edu.details && (
                    <p className="font-body text-[12px] sm:text-[14px] text-[#55524e] mt-1.5 sm:mt-2 leading-relaxed">
                      {edu.details}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Honors & Key Accolades */}
          <div className="bg-[#f4f0ea]/70 rounded-2xl p-5 sm:p-8 md:p-10 border border-[#cfc4c5]/40 shadow-2xs">
            <div className="flex items-center gap-2 mb-5 sm:mb-6 pb-3.5 sm:pb-4 border-b border-[#c5a059]/20">
              <span className="w-2 h-2 rounded-full bg-[#141312]" />
              <h3 className="font-serif-luxury text-[20px] sm:text-[24px] md:text-[26px] font-normal text-[#141312]">
                Honors &amp; Accolades
              </h3>
            </div>
            <div className="space-y-5 sm:space-y-6">
              {AWARDS_DATA.map((award, idx) => (
                <div key={idx} className="pb-4 sm:pb-5 border-b border-[#cfc4c5]/25 last:border-b-0 last:pb-0">
                  <div className="flex justify-between items-start gap-2">
                    <h4 className="font-body font-semibold text-[14px] sm:text-[16px] text-[#141312]">
                      {award.title}
                    </h4>
                    {award.year && (
                      <span className="font-mono-code text-[10px] sm:text-[11px] text-[#78746d] uppercase shrink-0">
                        {award.year}
                      </span>
                    )}
                  </div>
                  <p className="font-mono-code text-[11px] sm:text-[12px] text-[#b3884d] mt-1 font-medium">
                    {award.organization}
                  </p>
                  <p className="font-body text-[12px] sm:text-[14px] text-[#55524e] mt-1.5 sm:mt-2 leading-relaxed">
                    {award.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Executive Consultation Banner */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 max-w-[1280px] mx-auto">
        <div className="relative rounded-2xl overflow-hidden min-h-[340px] sm:min-h-[380px] flex items-center justify-center p-6 sm:p-8 md:p-14 text-center shadow-xl">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${PROMO_BG_IMAGE}')` }}
          />
          <div className="absolute inset-0 bg-[#141312]/80 z-10" />

          <div className="relative z-20 max-w-2xl mx-auto space-y-4 sm:space-y-6">
            <p className="font-mono-code text-[10px] sm:text-[11px] text-[#c5a059] uppercase tracking-[0.2em] sm:tracking-[0.25em] font-semibold">
              EXECUTIVE ENGAGEMENT &amp; ADVISORY
            </p>
            <h2 className="font-serif-luxury text-[26px] sm:text-[38px] md:text-[50px] font-normal leading-tight text-white tracking-tight">
              Ready to Discuss Operational Strategy?
            </h2>
            <p className="font-body text-[14px] sm:text-[16px] text-white/85 max-w-lg mx-auto leading-relaxed">
              Available for COO mandates, executive advisory, institutional scale consulting, and strategic board advisory.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <button
                onClick={onOpenBooking}
                className="font-mono-code text-[11px] px-6 sm:px-7 py-3.5 bg-[#c5a059] text-[#141312] hover:bg-[#d6b36e] rounded-sm transition-all duration-300 cursor-pointer tracking-widest uppercase font-semibold shadow-sm flex items-center justify-center gap-2"
              >
                <span>Email Avina Lloyd</span>
                <span>↗</span>
              </button>

              <a
                href="https://in.linkedin.com/in/avina-lloyd"
                target="_blank"
                rel="noreferrer"
                className="font-mono-code text-[11px] px-6 sm:px-7 py-3.5 border border-white/40 text-white hover:bg-white/10 rounded-sm transition-all duration-300 cursor-pointer tracking-widest uppercase font-medium inline-flex items-center justify-center gap-1.5"
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
