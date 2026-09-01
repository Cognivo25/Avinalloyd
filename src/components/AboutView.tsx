import React from 'react';
import { PageType } from '../types';
import { PROMO_BG_IMAGE } from '../data/portfolioData';

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
  const leadershipPillars = [
    {
      num: '01',
      title: 'Enterprise Scalability & Governance',
      description:
        'Transforming ambitious business plans into predictable, disciplined operational engines with institutional governance, ERP integration, and transparent P&L structures.',
    },
    {
      num: '02',
      title: 'Six Sigma & Zero-Defect Quality',
      description:
        'Leveraging deep quality auditing roots from Dell Technologies to eliminate friction, optimize patient and client throughput, and embed continuous improvement into corporate culture.',
    },
    {
      num: '03',
      title: 'Women in Leadership & Global Collectives',
      description:
        'Championing female executive representation, mentoring emerging founders, and building international leadership platforms with organizations like Tamil Women International UAE.',
    },
    {
      num: '04',
      title: 'Cross-Border Ecosystems & Global Trade',
      description:
        'Forging bilateral bridges across India, Dubai GCC, Africa, and North America to enable regional MSMEs and enterprises to expand globally with trusted partners.',
    },
  ];

  const ecosystemInitiatives = [
    {
      name: 'The RISE Global & RISE 17 Dubai',
      role: 'Global Trade & Regional Corridor Convener',
      focus: 'Connecting 100+ Indian & Tamil entrepreneurs across 9 industrial corridors to international markets in Dubai and GCC.',
    },
    {
      name: 'CTACIS 4.0 Ecosystem',
      role: 'Business Community Leadership',
      focus: 'Convening 500+ entrepreneurs, founders, and global personalities to turn networking dialogues into active economic ecosystems.',
    },
    {
      name: 'Tamil Women International UAE',
      role: 'Executive Patron & Advisor',
      focus: 'Fostering female leadership, cross-border mentorship, and strategic capital connections for women founders globally.',
    },
    {
      name: 'MSME IPO Readiness Forums',
      role: 'Institutional Governance Keynote',
      focus: 'Equipping mid-market business owners with corporate governance playbooks to transition into public market scale.',
    },
  ];

  return (
    <div className="pt-24 md:pt-32 pb-24 md:pb-36 animate-fadeIn">
      {/* 1. Header Section */}
      <section className="px-5 md:px-12 lg:px-20 max-w-[1280px] mx-auto mb-14 md:mb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#b3884d]" />
            <span className="font-mono-code text-[12px] text-[#b3884d] tracking-[0.25em] uppercase font-semibold">
              Executive Profile &amp; Leadership
            </span>
          </div>

          <h1 className="font-serif-luxury text-[38px] sm:text-[48px] md:text-[56px] leading-[1.08] text-[#141312] font-normal tracking-tight mb-5">
            About Avina Lloyd.
          </h1>

          <p className="font-body text-[17px] sm:text-[19px] md:text-[20px] text-[#55524e] leading-relaxed mb-6">
            Chief Executive Officer at Triune Business Ventures and CFO at TechNeat Info Solutions. Building businesses that move markets, creating partnerships that matter, and turning relationships into durable economic value.
          </p>

          <div className="flex flex-wrap gap-4 pt-1">
            <button
              onClick={() => onNavigate('experience')}
              className="font-mono-code text-[11px] px-6 py-3.5 bg-[#141312] text-[#c5a059] hover:bg-[#22211e] rounded-sm transition-all duration-300 cursor-pointer shadow-xs tracking-widest uppercase border border-[#2a2825] flex items-center gap-2 font-medium"
            >
              <span>View Executive Experience</span>
              <span className="text-[14px]">↗</span>
            </button>

            <button
              onClick={onOpenCV}
              className="font-mono-code text-[11px] px-6 py-3.5 border border-[#141312]/30 text-[#141312] hover:bg-neutral-100 rounded-sm transition-colors cursor-pointer tracking-widest uppercase font-medium"
            >
              <span>Download CV</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. Executive Biography Narrative */}
      <section className="mb-24 md:mb-32 bg-[#f4f0ea]/70 py-20 md:py-28 px-5 md:px-12 lg:px-20 border-y border-[#c5a059]/20">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <span className="font-mono-code text-[11px] text-[#b3884d] uppercase tracking-[0.25em] font-semibold">
              The Journey &amp; Executive Vision
            </span>
            <h2 className="font-serif-luxury text-[32px] sm:text-[40px] md:text-[46px] font-normal text-[#141312] tracking-tight">
              From Operational Rigor to Enterprise Scale
            </h2>
          </div>

          <div className="space-y-6 text-[#403d39] font-body text-[16px] sm:text-[17px] leading-relaxed">
            <p>
              Avina Lloyd’s executive journey is rooted in a fundamental conviction: <strong className="text-[#141312]">growth without operational discipline is fragile, but operational excellence combined with strategic vision creates lasting market impact.</strong>
            </p>
            <p>
              Beginning her professional career at Dell Technologies—where she was honored with 4 consecutive Best Quality Audits awards and Best Performer distinctions—she mastered the principles of Six Sigma, DMAIC problem solving, and zero-defect systems. This rigorous foundation shaped her approach to corporate governance, team accountability, and process design.
            </p>
            <p>
              Over the next two decades, Avina brought this operational precision to executive leadership roles across multiple sectors. As Chief Operating Officer at Karthik Netralaya Institute of Ophthalmology, she directed non-clinical healthcare administration, achieving 100% statutory audit compliance across government empanelments and cutting outpatient wait times by 45%. At Fidelitus Corp, as COO, she overhauled multi-vertical operations across PropTech, interior solutions, and facilities management, delivering a 135% average throughput turnaround gain.
            </p>
            <p>
              Today, as CEO of Triune Business Ventures and CFO of TechNeat Info Solutions, Avina leads strategic venture development, cross-border trade delegations, and institutional governance initiatives that bridge regional Indian businesses with high-growth international markets across Dubai, GCC, and beyond.
            </p>
          </div>

          {/* Quote Box */}
          <div className="pt-6 border-t border-[#c5a059]/30 text-center">
            <p className="font-editorial text-[22px] sm:text-[26px] md:text-[28px] text-[#141312] italic leading-snug">
              “I believe in purposeful leadership, meaningful collaboration, and creating opportunities for others—especially women in business. When we connect ambition with purpose, businesses don’t just grow; they create enduring value.”
            </p>
            <div className="mt-4 font-mono-code text-[11px] text-[#78746d] uppercase tracking-[0.2em] font-semibold">
              — Avina Lloyd, Chief Executive Officer
            </div>
          </div>
        </div>
      </section>

      {/* 3. Four Strategic Pillars of Leadership */}
      <section className="mb-24 md:mb-32 px-5 md:px-12 lg:px-20 max-w-[1280px] mx-auto">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#b3884d]" />
            <span className="font-mono-code text-[11px] text-[#b3884d] uppercase tracking-[0.2em] font-semibold">
              Operating Methodology
            </span>
          </div>
          <h2 className="font-serif-luxury text-[32px] sm:text-[40px] md:text-[46px] font-normal text-[#141312] tracking-tight">
            Strategic Pillars of Leadership
          </h2>
          <p className="font-body text-[16px] text-[#55524e] mt-3">
            Core frameworks that guide organizational design, corporate turnarounds, and cross-border partnership creation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {leadershipPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white p-8 md:p-10 rounded-2xl border border-[#cfc4c5]/40 shadow-2xs hover:shadow-md hover:border-[#c5a059]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono-code text-[13px] font-bold text-[#b3884d] block mb-3">
                  {pillar.num}
                </span>
                <h3 className="font-serif-luxury text-[22px] sm:text-[24px] font-normal text-[#141312] mb-4">
                  {pillar.title}
                </h3>
                <p className="font-body text-[15px] text-[#55524e] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Global Advocacy & Ecosystem Building */}
      <section className="mb-24 md:mb-32 px-5 md:px-12 lg:px-20 max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 pb-6 border-b border-[#c5a059]/20 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#141312]" />
              <span className="font-mono-code text-[11px] text-[#78746d] uppercase tracking-[0.2em] font-semibold">
                Advocacy, Speaking &amp; Ecosystems
              </span>
            </div>
            <h2 className="font-serif-luxury text-[32px] sm:text-[40px] md:text-[46px] font-normal text-[#141312] tracking-tight">
              Community &amp; Global Impact
            </h2>
          </div>

          <button
            onClick={() => onNavigate('portfolio')}
            className="font-mono-code text-[11px] text-[#141312] hover:text-[#b3884d] uppercase tracking-widest transition-colors flex items-center gap-1.5 cursor-pointer font-medium"
          >
            <span>Explore All Initiatives &amp; Case Studies</span>
            <span>↗</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {ecosystemInitiatives.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#fbf9f6] p-7 md:p-8 rounded-xl border border-[#cfc4c5]/40 hover:bg-white hover:border-[#c5a059]/40 transition-colors"
            >
              <span className="font-mono-code text-[10px] uppercase tracking-widest text-[#b3884d] font-semibold block mb-2">
                {item.role}
              </span>
              <h3 className="font-serif-luxury text-[20px] sm:text-[22px] font-normal text-[#141312] mb-3">
                {item.name}
              </h3>
              <p className="font-body text-[14px] sm:text-[15px] text-[#55524e] leading-relaxed">
                {item.focus}
              </p>
            </div>
          ))}
        </div>

        {/* Distinguished Moments & Summit Gallery */}
        <div className="pt-8 border-t border-[#c5a059]/20">
          <div className="mb-8">
            <span className="font-mono-code text-[11px] uppercase tracking-[0.2em] text-[#b3884d] font-semibold block mb-2">
              SUMMIT &amp; LEADERSHIP GALLERY
            </span>
            <h3 className="font-serif-luxury text-[26px] sm:text-[34px] font-normal text-[#141312]">
              Distinguished Moments &amp; High-Profile Engagements
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-2xl overflow-hidden bg-white border border-[#cfc4c5]/40 shadow-xs group">
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                <img
                  src="/image copy.png"
                  alt="Avina Lloyd - Triune Gold Sponsorship Felicitation"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#141312]/90 text-[#c5a059] font-mono-code text-[10px] px-2.5 py-1 rounded-sm uppercase tracking-wider">
                  Gold Sponsor Felicitation
                </div>
              </div>
              <div className="p-5">
                <h4 className="font-serif-luxury text-[18px] text-[#141312] mb-1">
                  Triune Ventures Gold Sponsor Award
                </h4>
                <p className="font-body text-[13px] text-[#78746d]">
                  Felicitation by Chairman Oswald Smith T at The RISE &amp; Tamil Women International.
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden bg-white border border-[#cfc4c5]/40 shadow-xs group">
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                <img
                  src="/celb/WhatsApp Image 2026-08-31 at 23.34.22 (2).jpeg"
                  alt="Avina Lloyd with veteran director K. Bhagyaraj"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#141312]/90 text-[#c5a059] font-mono-code text-[10px] px-2.5 py-1 rounded-sm uppercase tracking-wider">
                  Cultural Icon
                </div>
              </div>
              <div className="p-5">
                <h4 className="font-serif-luxury text-[18px] text-[#141312] mb-1">
                  With K. Bhagyaraj
                </h4>
                <p className="font-body text-[13px] text-[#78746d]">
                  Discussion with veteran filmmaker K. Bhagyaraj at Global Tamil Awards ceremony.
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden bg-white border border-[#cfc4c5]/40 shadow-xs group">
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                <img
                  src="/celb/avina-dignitary-global-tamil-awards.jpg"
                  alt="Avina Lloyd with Dignitary at Global Tamil Awards"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#141312]/90 text-[#c5a059] font-mono-code text-[10px] px-2.5 py-1 rounded-sm uppercase tracking-wider">
                  Summit Dignitary
                </div>
              </div>
              <div className="p-5">
                <h4 className="font-serif-luxury text-[18px] text-[#141312] mb-1">
                  Global Tamil Awards Dignitary
                </h4>
                <p className="font-body text-[13px] text-[#78746d]">
                  Leadership interaction and felicitations at Global Tamil Awards & Foundation ceremony.
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden bg-white border border-[#cfc4c5]/40 shadow-xs group">
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                <img
                  src="/images1/image.png"
                  alt="Avina Lloyd at CXXO No Ceiling Summit 2024"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#141312]/90 text-[#c5a059] font-mono-code text-[10px] px-2.5 py-1 rounded-sm uppercase tracking-wider">
                  CXXO Summit 2024
                </div>
              </div>
              <div className="p-5">
                <h4 className="font-serif-luxury text-[18px] text-[#141312] mb-1">
                  CXXO No Ceiling Summit
                </h4>
                <p className="font-body text-[13px] text-[#78746d]">
                  The Audacity to Dream — Kalaari Capital, AWS, Havas &amp; TiE Women Global.
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden bg-white border border-[#cfc4c5]/40 shadow-xs group">
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                <img
                  src="/image.png"
                  alt="The RISE Tamil Women Leaders Collective"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#141312]/90 text-[#c5a059] font-mono-code text-[10px] px-2.5 py-1 rounded-sm uppercase tracking-wider">
                  Women Collective
                </div>
              </div>
              <div className="p-5">
                <h4 className="font-serif-luxury text-[18px] text-[#141312] mb-1">
                  The RISE Women Collective
                </h4>
                <p className="font-body text-[13px] text-[#78746d]">
                  Convening 30+ women founders and executives across India &amp; the UAE.
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden bg-white border border-[#cfc4c5]/40 shadow-xs group">
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                <img
                  src="/celb/WhatsApp Image 2026-08-31 at 23.34.22 (11).jpeg"
                  alt="Avina Lloyd with Tamil Nadu Government Ministers"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#141312]/90 text-[#c5a059] font-mono-code text-[10px] px-2.5 py-1 rounded-sm uppercase tracking-wider">
                  Ministers Delegation
                </div>
              </div>
              <div className="p-5">
                <h4 className="font-serif-luxury text-[18px] text-[#141312] mb-1">
                  State Leadership Delegation
                </h4>
                <p className="font-body text-[13px] text-[#78746d]">
                  With Tamil Nadu Government Ministers at Tamizhar 4.0 Global Summit.
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden bg-white border border-[#cfc4c5]/40 shadow-xs group">
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                <img
                  src="/images1/WhatsApp Image 2026-08-31 at 18.42.55.jpeg"
                  alt="TiE Global Summit BLR 2024"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#141312]/90 text-[#c5a059] font-mono-code text-[10px] px-2.5 py-1 rounded-sm uppercase tracking-wider">
                  TiE Global 2024
                </div>
              </div>
              <div className="p-5">
                <h4 className="font-serif-luxury text-[18px] text-[#141312] mb-1">
                  TiE Global Summit BLR
                </h4>
                <p className="font-body text-[13px] text-[#78746d]">
                  Putting Entrepreneurship First — Convening global founders &amp; investors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Direct Leadership Consultation Banner */}
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
              Let's Discuss Operational Strategy &amp; Leadership
            </h2>
            <p className="font-body text-[16px] text-white/85 max-w-lg mx-auto leading-relaxed">
              Inquire regarding CEO advisory, CFO governance, board consultation, healthcare streamlining, or strategic partnerships.
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
