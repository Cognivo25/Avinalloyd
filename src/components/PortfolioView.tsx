import React, { useState } from 'react';
import { PageType, Project, ProjectCategory } from '../types';
import { PROJECTS } from '../data/portfolioData';

interface PortfolioViewProps {
  onNavigate: (page: PageType) => void;
  onSelectProject: (project: Project) => void;
  onOpenBooking: () => void;
}

export const PortfolioView: React.FC<PortfolioViewProps> = ({
  onNavigate,
  onSelectProject,
  onOpenBooking,
}) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: ProjectCategory[] = [
    'All',
    'Entrepreneurial Ecosystems',
    'Global Trade & Strategy',
    'MSME Scale & Governance',
    'Leadership & Community',
    'Women in Leadership',
    'Innovation & Technology',
    'CSR & Social Impact',
  ];

  const filteredProjects = PROJECTS.filter((project) => {
    const matchesCategory =
      activeCategory === 'All' ||
      project.category === activeCategory ||
      project.tags.includes(activeCategory);

    const matchesSearch =
      searchQuery.trim() === '' ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (project.subtitle && project.subtitle.toLowerCase().includes(searchQuery.toLowerCase())) ||
      project.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 md:pt-32 pb-24 md:pb-36 animate-fadeIn">
      {/* 1. Header & Manifesto Section */}
      <section className="px-5 md:px-12 lg:px-20 max-w-[1280px] mx-auto mb-16 text-center">
        <div className="inline-flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-[#b3884d]" />
          <span className="font-mono-code text-[12px] uppercase tracking-[0.25em] text-[#b3884d] font-semibold">
            Building Connections That Create Impact
          </span>
        </div>

        <h1 className="font-display text-[38px] sm:text-[48px] md:text-[56px] font-medium text-[#1a1c1c] mb-6 tracking-tight max-w-4xl mx-auto leading-[1.08]">
          Connecting Ambition with Purpose.
        </h1>

        <p className="font-body text-[16px] sm:text-[18px] md:text-[19px] text-[#55524e] max-w-3xl mx-auto leading-relaxed mb-6 font-normal">
          I believe meaningful impact rarely happens in isolation. It begins with people coming together—sharing ideas, building trust and discovering what becomes possible when ambition is connected with purpose.
        </p>

        <p className="font-body text-[14px] sm:text-[16px] text-[#78746d] max-w-2xl mx-auto leading-relaxed mb-10">
          From local business communities to international trade platforms, from leadership development to social initiatives: creating connections that grow into opportunities, opportunities into collaboration, and collaboration into lasting impact.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-2.5 max-w-4xl mx-auto">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full font-mono-code text-[11px] uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#1a1c1c] text-white shadow-xs'
                    : 'bg-white border border-[#cfc4c5]/60 text-[#1a1c1c] hover:bg-[#f3f3f4]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </section>

      {/* 2. Gallery Grid */}
      <section className="px-5 md:px-12 lg:px-20 max-w-[1360px] mx-auto mb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer flex flex-col bg-white rounded-2xl border border-[#cfc4c5]/40 overflow-hidden hover:shadow-xl hover:border-[#c5a059]/40 transition-all duration-300"
            >
              {/* Image Frame */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-neutral-100">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Dark Hover Tint Overlay */}
                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="px-4 py-2 rounded-sm bg-[#141312] text-[#c5a059] font-mono-code text-[11px] uppercase tracking-widest flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-xl border border-[#2a2825]">
                    <span>View Case Study</span>
                    <span>↗</span>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="px-3 py-1 bg-white/95 backdrop-blur-md rounded-sm font-mono-code text-[10px] uppercase tracking-wider text-[#141312] font-semibold shadow-xs">
                    {project.category}
                  </span>
                </div>

                {/* Metric Badge */}
                {project.metrics && (
                  <div className="absolute bottom-3.5 right-3.5">
                    <span className="px-2.5 py-1 bg-[#141312]/85 text-[#c5a059] backdrop-blur-md rounded-sm font-mono-code text-[10px] tracking-wider uppercase font-semibold">
                      {project.metrics}
                    </span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between space-y-4">
                <div>
                  <h3 className="font-serif-luxury text-[20px] sm:text-[22px] font-normal text-[#141312] mb-2 group-hover:text-[#b3884d] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="font-body text-[14px] text-[#55524e] line-clamp-3 leading-relaxed mb-3">
                    {project.description}
                  </p>
                </div>

                {/* Quote Snippet */}
                {project.quote && (
                  <blockquote className="text-[13px] font-body italic text-[#78746d] border-l-2 border-[#b3884d]/60 pl-3 py-0.5">
                    "{project.quote}"
                  </blockquote>
                )}

                {/* Footer action and tags */}
                <div className="pt-3 border-t border-[#cfc4c5]/25 flex items-center justify-between">
                  <span className="font-mono-code text-[11px] text-[#78746d] uppercase tracking-wider">
                    {project.client}
                  </span>
                  <span className="font-mono-code text-[11px] text-[#141312] font-semibold group-hover:text-[#b3884d] inline-flex items-center gap-1 transition-colors">
                    <span>Explore Story</span>
                    <span>↗</span>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 3. The Impact I Hope to Create (Core Manifesto Banner) */}
      <section className="px-5 md:px-12 lg:px-20 max-w-[1280px] mx-auto">
        <div className="bg-[#141312] text-white rounded-2xl p-8 sm:p-12 md:p-16 border border-[#2a2825] shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl mx-auto text-center space-y-6 relative z-10">
            <span className="font-mono-code text-[11px] text-[#c5a059] uppercase tracking-[0.25em] font-semibold block">
              THE IMPACT I HOPE TO CREATE
            </span>

            <h2 className="font-serif-luxury text-[30px] sm:text-[42px] md:text-[50px] font-normal leading-tight tracking-tight">
              Building Bridges That Endure.
            </h2>

            <p className="font-body text-[16px] sm:text-[18px] text-[#cfc4c5] leading-relaxed">
              Across every initiative, one idea continues to guide me: <strong>Impact grows when the right people are connected to the right opportunities.</strong>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left pt-4">
              <div className="p-5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                <span className="font-mono-code text-[#c5a059] text-[14px] shrink-0 mt-0.5 font-bold">◆</span>
                <p className="font-body text-[14px] text-white/90 leading-relaxed">
                  <strong>Between entrepreneurs and opportunity:</strong> Turning initial connections into thriving enterprises.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                <span className="font-mono-code text-[#c5a059] text-[14px] shrink-0 mt-0.5 font-bold">◆</span>
                <p className="font-body text-[14px] text-white/90 leading-relaxed">
                  <strong>Between communities and collaboration:</strong> Creating ecosystems that become collective economic forces.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                <span className="font-mono-code text-[#c5a059] text-[14px] shrink-0 mt-0.5 font-bold">◆</span>
                <p className="font-body text-[14px] text-white/90 leading-relaxed">
                  <strong>Between regional ambition and global possibility:</strong> Bridging Indian founders with global markets in Dubai and beyond.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                <span className="font-mono-code text-[#c5a059] text-[14px] shrink-0 mt-0.5 font-bold">◆</span>
                <p className="font-body text-[14px] text-white/90 leading-relaxed">
                  <strong>Between leadership and meaningful action:</strong> Empowering women and leaders to build lasting institutions.
                </p>
              </div>
            </div>

            <div className="pt-6 flex flex-wrap justify-center gap-4">
              <button
                onClick={onOpenBooking}
                className="px-8 py-3.5 bg-[#c5a059] text-[#141312] rounded-sm font-mono-code text-[11px] uppercase tracking-widest font-semibold hover:bg-[#d6b26a] transition-all cursor-pointer shadow-lg"
              >
                Email Avina Lloyd ↗
              </button>

              <a
                href="https://in.linkedin.com/in/avina-lloyd"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-3.5 border border-white/30 text-white rounded-sm font-mono-code text-[11px] uppercase tracking-widest hover:bg-white/10 transition-colors inline-flex items-center gap-2 cursor-pointer font-medium"
              >
                <span>Follow on LinkedIn</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

