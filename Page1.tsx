'use client';

import { useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  span: string;
};

function ProjectCard({ project }: { project: Project }) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLAnchorElement | null>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current || window.innerWidth < 768) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const moveX = ((x - centerX) / centerX) * 12;
    const moveY = ((y - centerY) / centerY) * 12;

    setOffset({ x: moveX, y: moveY });
  };

  return (
    <a
      ref={cardRef}
      href="#"
      className={`group relative flex w-[85vw] shrink-0 snap-center cursor-pointer flex-col-reverse md:w-auto md:flex-col ${project.span}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
    >
      <div className="relative h-[280px] w-full overflow-hidden rounded-2xl border border-white/5 bg-[#111] shadow-2xl transition-colors group-hover:border-[#fc8019]/30 sm:h-[340px] md:rounded-[1.5rem] lg:h-[460px]">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-[400ms] ease-out group-hover:scale-105"
          style={{ transform: `scale(1.1) translate(${offset.x}px, ${offset.y}px)` }}
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80 transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-60" />
      </div>

      <div className="z-10 mb-6 flex flex-col md:mt-6 md:mb-0">
        <h3 className="mb-3 text-[22px] leading-none font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-[#fc8019] md:text-[32px]">
          {project.title}
        </h3>
        <div className="max-w-lg text-sm leading-relaxed font-normal text-gray-400 transition-colors duration-300 group-hover:text-gray-300 md:text-base">
          {project.description}
        </div>
      </div>
    </a>
  );
}

export default function Page1() {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Trained & Certified Reel Makers',
      description: 'Each Partner clears 6 filters to get their certification',
      image: '/images/Trained&CertifiedReelMakers.png',
      span: 'md:col-span-7',
    },
    {
      id: 2,
      title: 'Easy Booking',
      description: 'Stop strugging with complex booking procedure',
      image: '/images/Easy Booking.png',
      span: 'md:col-span-5',
    },
    {
      id: 3,
      title: 'Unbelievable Pricing',
      description: 'Each Reel starts 1999/-',
      image: '/images/UnbelievablePricing.png',
      span: 'md:col-span-4',
    },
    {
      id: 4,
      title: 'Instant Reels, Instant Editing',
      description: 'No hidden charges! Clients get upfront pricing, secure payment options, and a seamless checkout experience.',
      image: '/images/Instant Reels, Instant Editing.png',
      span: 'md:col-span-8',
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-[#050505] py-16 text-white selection:bg-[#fc8019]/30 selection:text-white md:py-24">
      <div className="container mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="mb-8 flex flex-col items-center justify-center text-center md:mb-12">
          <h2 className="text-3xl font-black uppercase leading-[1.1] tracking-tighter md:text-4xl lg:text-5xl">
            Not Just Instant <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-[#fc8019] to-[#ff4d4d] bg-clip-text text-transparent">Delivery</span>,{' '}
            <span className="font-serif text-gray-400 italic lowercase opacity-90">but...</span>
          </h2>
          <div className="mt-8 h-[1px] w-full max-w-3xl bg-gradient-to-r from-transparent via-white/10 to-transparent md:mt-10" />
        </div>

        <div className="hide-scrollbar -mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-12 md:mx-0 md:grid md:snap-none md:grid-cols-12 md:gap-8 md:overflow-visible md:px-0 md:pb-0 lg:gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-8 flex justify-center md:mt-24">
          <a href="#" className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:border-[#fc8019]/40 hover:bg-[#fc8019]/10 hover:text-[#fc8019] md:text-xl">
            Explore More
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
}
