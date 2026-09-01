import React, { useEffect, useState } from 'react';
import { Project, PageType } from '../types';
import { PROJECTS } from '../data/portfolioData';

interface ProjectDetailViewProps {
  project: Project;
  onBack: () => void;
  onNavigate: (page: PageType) => void;
  onSelectProject: (project: Project) => void;
  onOpenBooking: () => void;
}

export const ProjectDetailView: React.FC<ProjectDetailViewProps> = ({
  project,
  onBack,
  onNavigate,
  onSelectProject,
  onOpenBooking,
}) => {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(
    project.youtubeId || (project.videos && project.videos[0]?.youtubeId) || null
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveVideoId(
      project.youtubeId || (project.videos && project.videos[0]?.youtubeId) || null
    );
  }, [project.id, project.youtubeId, project.videos]);

  // Find related projects in same category or adjacent
  const relatedProjects = PROJECTS.filter((p) => p.id !== project.id).slice(0, 3);

  return (
    <div className="pt-24 md:pt-32 pb-24 md:pb-36 animate-fadeIn">
      {/* Top Bar / Navigation */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto mb-8 sm:mb-10">
        <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 pb-5 sm:pb-6 border-b border-[#c5a059]/25">
          <button
            onClick={onBack}
            className="group inline-flex items-center gap-2 font-mono-code text-[11px] text-[#55524e] hover:text-[#141312] uppercase tracking-widest transition-colors cursor-pointer"
          >
            <span className="transform group-hover:-translate-x-1 transition-transform">
              ←
            </span>
            <span>Back to Initiatives &amp; Impact</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="font-mono-code text-[11px] text-[#78746d] uppercase tracking-wider hidden sm:inline-block">
              Case Study
            </span>
            <button
              onClick={onOpenBooking}
              className="font-mono-code text-[10px] sm:text-[11px] bg-[#141312] text-[#c5a059] hover:bg-[#22211e] px-3.5 py-2 sm:px-4 sm:py-2 rounded-sm uppercase tracking-wider sm:tracking-widest transition-all duration-300 cursor-pointer flex items-center gap-1.5 font-medium"
            >
              <span>Email Avina Lloyd</span>
              <span className="text-[12px]">↗</span>
            </button>
          </div>
        </div>
      </section>

      {/* Case Study Hero Header */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto mb-10 sm:mb-12">
        <div className="max-w-4xl">
          <div className="inline-flex flex-wrap items-center gap-2 mb-3 sm:mb-4">
            <span className="px-3 py-1 bg-[#141312] text-[#c5a059] rounded-sm font-mono-code text-[10px] uppercase tracking-widest font-semibold">
              {project.category}
            </span>
            {project.featured && (
              <span className="px-3 py-1 bg-[#b3884d]/15 text-[#b3884d] border border-[#c5a059]/30 rounded-sm font-mono-code text-[10px] uppercase tracking-wider font-semibold">
                Featured Case Study
              </span>
            )}
          </div>

          <h1 className="font-serif-luxury text-[30px] sm:text-[44px] md:text-[60px] leading-[1.1] sm:leading-[1.05] tracking-tight text-[#141312] font-normal mb-4 sm:mb-6">
            {project.title}
          </h1>

          {project.subtitle && (
            <p className="font-body text-[16px] sm:text-[19px] md:text-[22px] text-[#55524e] leading-relaxed mb-6 sm:mb-8">
              {project.subtitle}
            </p>
          )}
        </div>

        {/* Key Metadata Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 p-4 sm:p-6 rounded-xl bg-white/80 backdrop-blur-sm border border-[#c5a059]/25 shadow-xs mb-8 sm:mb-10">
          <div>
            <span className="font-mono-code text-[10px] text-[#78746d] uppercase tracking-wider block mb-1">
              Client / Organization
            </span>
            <span className="font-serif-luxury text-[13px] sm:text-[16px] font-normal text-[#141312] block leading-snug">
              {project.client}
            </span>
          </div>

          <div>
            <span className="font-mono-code text-[10px] text-[#78746d] uppercase tracking-wider block mb-1">
              Engagement Period
            </span>
            <span className="font-serif-luxury text-[13px] sm:text-[16px] font-normal text-[#141312] block">
              {project.year || 'Executive Mandate'}
            </span>
          </div>

          <div>
            <span className="font-mono-code text-[10px] text-[#78746d] uppercase tracking-wider block mb-1">
              Leadership Mandate
            </span>
            <span className="font-serif-luxury text-[13px] sm:text-[16px] font-normal text-[#141312] block">
              CEO / Initiative Leader
            </span>
          </div>

          <div>
            <span className="font-mono-code text-[10px] text-[#78746d] uppercase tracking-wider block mb-1">
              Primary Highlight
            </span>
            <span className="font-serif-luxury text-[13px] sm:text-[16px] font-normal text-[#b3884d] block">
              {project.metrics || 'Ecosystem Impact'}
            </span>
          </div>
        </div>

        {/* Main Showcase Visual */}
        <div className="space-y-3">
          <div className="relative aspect-[16/10] sm:aspect-[16/9] md:aspect-[21/9] w-full rounded-2xl overflow-hidden shadow-lg border border-[#c5a059]/30 bg-neutral-200">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            
            {/* Desktop Overlay Bar */}
            <div className="hidden md:flex absolute bottom-6 left-6 right-6 text-white font-mono-code text-[12px] tracking-wider uppercase justify-between items-center gap-3">
              <span className="bg-black/70 backdrop-blur-md px-4 py-1.5 rounded-sm border border-white/20">
                {project.client} • {project.category}
              </span>

              {project.linkedInUrl && (
                <a
                  href={project.linkedInUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#c5a059] hover:bg-[#d6b26a] text-[#141312] font-semibold px-4 py-1.5 rounded-sm inline-flex items-center gap-1.5 transition-colors shadow-md"
                >
                  <span>View LinkedIn Initiative</span>
                  <span>↗</span>
                </a>
              )}
            </div>
          </div>

          {/* Mobile Caption & Action Bar (Cleanly Outside Image) */}
          <div className="flex md:hidden flex-wrap justify-between items-center gap-2 pt-1">
            <span className="font-mono-code text-[10px] uppercase tracking-wider text-[#78746d] bg-[#edeae4] px-2.5 py-1 rounded-sm">
              {project.client} • {project.category}
            </span>

            {project.linkedInUrl && (
              <a
                href={project.linkedInUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-[#c5a059] text-[#141312] font-mono-code text-[10px] font-semibold px-3 py-1 rounded-sm inline-flex items-center gap-1 uppercase tracking-wider shadow-2xs"
              >
                <span>View LinkedIn Initiative</span>
                <span>↗</span>
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Deep Dive Content Section */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto mb-16 md:mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          {/* Main Narrative Column */}
          <div className="lg:col-span-8 space-y-8 md:space-y-10">
            {/* Quote Banner if available */}
            {project.quote && (
              <div className="p-6 sm:p-8 md:p-10 rounded-2xl bg-[#fbf9f5] border-l-4 border-[#b3884d] shadow-sm">
                <span className="font-mono-code text-[10px] sm:text-[11px] text-[#b3884d] uppercase tracking-widest font-semibold block mb-2">
                  Guiding Conviction
                </span>
                <p className="font-serif-luxury text-[17px] sm:text-[21px] md:text-[24px] text-[#141312] italic leading-relaxed">
                  "{project.quote}"
                </p>
              </div>
            )}

            {/* Overview */}
            <div className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 md:p-10 rounded-2xl border border-[#c5a059]/25 shadow-xs">
              <span className="font-mono-code text-[11px] text-[#b3884d] uppercase tracking-widest font-semibold block mb-3">
                Executive Overview &amp; Mandate
              </span>
              <h2 className="font-serif-luxury text-[28px] sm:text-[34px] font-normal text-[#141312] mb-4">
                Strategic Scope &amp; Mission
              </h2>
              <p className="font-body text-[16px] sm:text-[18px] text-[#403d39] leading-relaxed whitespace-pre-line">
                {project.fullDescription || project.description}
              </p>
            </div>

            {/* Video Showcase Section */}
            {(project.youtubeId || (project.videos && project.videos.length > 0)) && (
              <div className="bg-[#141312] text-white rounded-2xl p-6 sm:p-8 md:p-10 border border-[#2a2825] shadow-xl space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-2 mb-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                      <span className="font-mono-code text-[11px] text-[#c5a059] uppercase tracking-widest font-semibold">
                        Video Showcase &amp; Official Coverage
                      </span>
                    </div>
                    <h3 className="font-serif-luxury text-[22px] sm:text-[28px] font-normal text-white">
                      On-the-Ground Project Footage
                    </h3>
                  </div>

                  {activeVideoId && (
                    <a
                      href={`https://youtu.be/${activeVideoId}`}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono-code text-[11px] px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-sm uppercase tracking-wider transition-colors inline-flex items-center gap-2 cursor-pointer font-medium"
                    >
                      <span className="font-bold">▶</span>
                      <span>Watch on YouTube</span>
                      <span className="text-[12px]">↗</span>
                    </a>
                  )}
                </div>

                {/* Responsive 16:9 YouTube Embed */}
                {activeVideoId && (
                  <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-black">
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${activeVideoId}?rel=0&autoplay=0`}
                      title={project.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full border-0"
                    />
                  </div>
                )}

                {/* Video Playlist Selector if multiple videos */}
                {project.videos && project.videos.length > 1 && (
                  <div className="pt-2">
                    <span className="font-mono-code text-[10px] uppercase text-[#a09e99] tracking-wider block mb-3">
                      Select Coverage / Dignitary Address:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {project.videos.map((vid) => {
                        const isSelected = vid.youtubeId === activeVideoId;
                        return (
                          <button
                            key={vid.id}
                            onClick={() => setActiveVideoId(vid.youtubeId)}
                            className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between gap-2 ${
                              isSelected
                                ? 'bg-white/15 border-[#c5a059] ring-1 ring-[#c5a059]'
                                : 'bg-white/5 border-white/10 hover:bg-white/10'
                            }`}
                          >
                            <div>
                              {vid.speaker && (
                                <span className="font-mono-code text-[10px] text-[#c5a059] font-semibold block mb-1">
                                  {vid.speaker}
                                </span>
                              )}
                              <p className="font-body text-[13px] text-white/90 line-clamp-2 leading-snug font-medium">
                                {vid.title}
                              </p>
                            </div>
                            <div className="flex items-center gap-1 font-mono-code text-[10px] text-[#c5a059] uppercase tracking-wider mt-1">
                              <span>{isSelected ? '● Playing' : '▶ Play Video'}</span>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Challenge & Solution Bento */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.challenge && (
                <div className="bg-white/80 p-8 rounded-2xl border border-[#cfc4c5]/40 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#141312]"></span>
                      <span className="font-mono-code text-[11px] text-[#141312] uppercase tracking-widest font-semibold">
                        The Challenge
                      </span>
                    </div>
                    <h3 className="font-serif-luxury text-[22px] font-normal text-[#141312] mb-3">
                      Operational Friction
                    </h3>
                    <p className="font-body text-[15px] text-[#55524e] leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>
                </div>
              )}

              {project.solution && (
                <div className="bg-white/80 p-8 rounded-2xl border border-[#c5a059]/40 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#b3884d]"></span>
                      <span className="font-mono-code text-[11px] text-[#b3884d] uppercase tracking-widest font-semibold">
                        Strategic Solution
                      </span>
                    </div>
                    <h3 className="font-serif-luxury text-[22px] font-normal text-[#141312] mb-3">
                      Systems &amp; Architecture
                    </h3>
                    <p className="font-body text-[15px] text-[#55524e] leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Quantified Outcomes */}
            {project.results && project.results.length > 0 && (
              <div className="bg-white/80 p-8 sm:p-10 rounded-2xl border border-[#c5a059]/25 shadow-xs">
                <span className="font-mono-code text-[11px] text-[#b3884d] uppercase tracking-widest font-semibold block mb-3">
                  Measurable Impact
                </span>
                <h2 className="font-serif-luxury text-[28px] sm:text-[34px] font-normal text-[#141312] mb-6">
                  Key Outcomes &amp; Deliverables
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {project.results.map((res, i) => (
                    <div
                      key={i}
                      className="p-5 rounded-xl bg-[#faf8f5] border border-[#c5a059]/30 flex flex-col justify-between"
                    >
                      <span className="font-mono-code text-[#b3884d] text-[14px] font-bold mb-3">
                        ◆
                      </span>
                      <p className="font-body text-[14px] text-[#141312] font-medium leading-snug">
                        {res}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-4 space-y-6">
            {/* Core Competencies & Skills */}
            <div className="bg-white/80 p-6 sm:p-8 rounded-2xl border border-[#c5a059]/25 shadow-xs">
              <h3 className="font-mono-code text-[11px] uppercase text-[#78746d] tracking-widest font-semibold mb-4">
                Methodology &amp; Core Disciplines
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-[#faf8f5] border border-[#c5a059]/35 text-[#141312] font-mono-code text-[11px] rounded-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Consultation Card */}
            <div className="bg-[#141312] text-white p-8 rounded-2xl border border-[#2a2825] shadow-lg">
              <span className="font-mono-code text-[11px] text-[#c5a059] uppercase tracking-widest block mb-2 font-semibold">
                Executive Discussion
              </span>
              <h3 className="font-serif-luxury text-[24px] font-normal text-white mb-3">
                Scaling Similar Operations?
              </h3>
              <p className="font-body text-[14px] text-[#a09e99] leading-relaxed mb-6">
                Consult directly with Avina Lloyd to analyze operational bottlenecks, restructure workflows, or build Six Sigma quality frameworks.
              </p>
              <button
                onClick={onOpenBooking}
                className="w-full py-3.5 bg-[#c5a059] hover:bg-[#d6b26a] text-[#141312] font-mono-code text-[11px] uppercase tracking-widest rounded-sm font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Email Avina Lloyd</span>
                <span>↗</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Initiatives Carousel / Gallery */}
      {relatedProjects.length > 0 && (
        <section className="px-4 sm:px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto pt-10 sm:pt-12 border-t border-[#c5a059]/25">
          <div className="flex flex-wrap justify-between items-end gap-4 mb-8">
            <div>
              <span className="font-mono-code text-[11px] text-[#b3884d] uppercase tracking-widest font-semibold block mb-1">
                More Case Studies
              </span>
              <h2 className="font-serif-luxury text-[28px] sm:text-[36px] font-normal text-[#141312]">
                Related Executive Initiatives
              </h2>
            </div>
            <button
              onClick={() => onNavigate('portfolio')}
              className="font-mono-code text-[11px] text-[#55524e] hover:text-[#141312] uppercase tracking-widest cursor-pointer font-medium"
            >
              View Full Portfolio Archive ↗
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProjects.map((p) => (
              <div
                key={p.id}
                onClick={() => onSelectProject(p)}
                className="bg-white/80 rounded-2xl overflow-hidden border border-[#c5a059]/25 shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-neutral-200">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-[#141312] font-mono-code text-[10px] rounded-sm font-semibold uppercase tracking-wider shadow-2xs">
                        {p.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="font-mono-code text-[10px] text-[#78746d] uppercase tracking-wider block mb-1">
                      {p.client}
                    </span>
                    <h3 className="font-serif-luxury text-[20px] font-normal text-[#141312] group-hover:text-[#b3884d] transition-colors line-clamp-2">
                      {p.title}
                    </h3>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-0 flex items-center justify-between border-t border-[#c5a059]/15 mt-2">
                  <span className="font-mono-code text-[11px] text-[#b3884d]">
                    {p.metrics || 'View Details'}
                  </span>
                  <span className="font-mono-code text-[13px] text-[#141312] group-hover:text-[#b3884d] transition-colors">
                    ↗
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
