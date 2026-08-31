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
  const [visibleCount, setVisibleCount] = useState(4);

  const categories: ProjectCategory[] = [
    'All',
    'Operations & PropTech',
    'Healthcare Operations',
    'Global Strategy & HR',
    'Six Sigma & Quality',
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
      project.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  return (
    <div className="pt-24 md:pt-32 pb-24 md:pb-36 animate-fadeIn">
      {/* 1. Header Section */}
      <section className="px-5 md:px-12 lg:px-20 max-w-[1280px] mx-auto mb-14 md:mb-20 text-center">
        <div className="inline-flex items-center gap-2 mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-[#1a1c1c]" />
          <span className="font-mono-code text-[12px] uppercase tracking-widest text-[#5d5f5f]">
            Executive Portfolio
          </span>
        </div>

        <h1 className="font-display text-[40px] sm:text-[48px] md:text-[56px] font-medium text-[#1a1c1c] mb-8 tracking-tight">
          Strategic Initiatives & Impact
        </h1>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-3">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setVisibleCount(4);
                }}
                className={`px-6 py-2.5 rounded-full font-mono-code text-[12px] transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#1a1c1c] text-white shadow-xs'
                    : 'bg-transparent border border-[#cfc4c5] text-[#1a1c1c] hover:bg-[#f3f3f4]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </section>

      {/* 2. Gallery Grid */}
      <section className="px-5 md:px-12 lg:px-20 max-w-[1280px] mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12">
          {visibleProjects.map((project) => (
            <article
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer flex flex-col"
            >
              {/* Project Card Image Frame */}
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#f3f3f4] mb-5 shadow-2xs">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Dark Hover Tint Overlay with Centered Action Button */}
                <div className="absolute inset-0 bg-[#1a1c1c]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white text-[#1a1c1c] flex items-center justify-center transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75 shadow-xl">
                    <span className="material-symbols-outlined text-[20px]">arrow_outward</span>
                  </div>
                </div>

                {/* Floating Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full font-mono-code text-[11px] text-[#1a1c1c] font-medium shadow-2xs">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Title and Metadata */}
              <div>
                <h3 className="font-display text-[22px] md:text-[26px] font-medium text-[#1a1c1c] mb-1 group-hover:text-[#5d5f5f] transition-colors">
                  {project.title}
                </h3>
                <p className="font-mono-code text-[12px] text-[#5d5f5f] uppercase tracking-wider">
                  {project.subtitle || project.tags.join(' • ')}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* View More Button */}
        {visibleCount < filteredProjects.length && (
          <div className="flex justify-center mt-14">
            <button
              onClick={() => setVisibleCount((prev) => prev + 4)}
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-[#1a1c1c] text-[#1a1c1c] hover:bg-[#1a1c1c] hover:text-white transition-all duration-300 font-mono-code text-[12px] uppercase tracking-widest cursor-pointer shadow-2xs hover:shadow-md"
            >
              <span>VIEW MORE</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        )}
      </section>

      {/* 3. Got a Vision Section */}
      <section className="px-5 md:px-12 lg:px-20 max-w-[1280px] mx-auto">
        <div className="bg-[#1a1c1c] text-white rounded-2xl p-10 md:p-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 shadow-xl">
          <div className="max-w-xl">
            <h2 className="font-display text-[32px] md:text-[44px] font-medium text-white mb-4 tracking-tight">
              Got a Vision? Let's Bring It to Life!
            </h2>
            <p className="font-body text-[16px] text-white/80 leading-relaxed">
              I'm always excited to collaborate on new and innovative projects. Whether you're starting from scratch or refining an existing idea.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 bg-white text-[#1a1c1c] px-8 py-4 rounded-full font-mono-code text-[12px] hover:scale-105 hover:bg-neutral-100 transition-all duration-300 font-semibold cursor-pointer shrink-0 shadow-lg"
          >
            <span>Book A Call</span>
            <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
          </button>
        </div>
      </section>
    </div>
  );
};
