import { useState, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import imgTrainedCertified from '../images/Trained&CertifiedReelMakers.png';
import imgEasyBooking from '../images/Easy Booking.png';
import imgUnbelievablePricing from '../images/UnbelievablePricing.png';
import imgInstantReels from '../images/Instant Reels, Instant Editing.png';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  span: string;
};

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLAnchorElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // Only apply parallax on larger screens where hovering is a thing
    if (!cardRef.current || window.innerWidth < 768) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Adjust the multiplier (12) to increase or decrease the movement distance
    const moveX = ((x - centerX) / centerX) * 12; 
    const moveY = ((y - centerY) / centerY) * 12;

    setOffset({ x: moveX, y: moveY });
  };

  const handleMouseLeave = () => {
    // Reset image position when cursor leaves the card
    setOffset({ x: 0, y: 0 });
  };

  return (
    <a 
      ref={cardRef}
      href="#" 
      // flex-col-reverse puts text up and image down on mobile. md:flex-col reverts it for desktop.
      className={`group flex flex-col-reverse md:flex-col cursor-pointer shrink-0 w-[85vw] sm:w-[380px] md:w-auto snap-center relative ${project.span}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      
      {/* Image Container with Hover & Parallax Effect */}
      <div className="relative w-full h-[280px] sm:h-[340px] lg:h-[460px] rounded-2xl md:rounded-[1.5rem] overflow-hidden bg-[#111] border border-white/5 group-hover:border-[#fc8019]/30 transition-colors shadow-2xl">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-[400ms] ease-out group-hover:scale-105"
          style={{
            transform: `scale(1.1) translate(${offset.x}px, ${offset.y}px)`,
          }}
          loading="lazy"
        />
        
        {/* Subtle Inner Shadow overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80 md:opacity-0 md:group-hover:opacity-60 transition-opacity duration-500 pointer-events-none" />
      </div>

      {/* Project Text Info (Up matter on mobile, down on desktop) */}
      <div className="mb-6 md:mb-0 md:mt-6 flex flex-col z-10">
        <h3 className="text-[22px] md:text-[32px] font-bold text-white tracking-tight leading-none mb-3 group-hover:text-[#fc8019] transition-colors duration-300">
          {project.title}
        </h3>
        <div className="text-sm md:text-base text-gray-400 leading-relaxed font-normal max-w-lg group-hover:text-gray-300 transition-colors duration-300">
          {project.description}
        </div>
      </div>

    </a>
  );
};

export default function App() {
  const projects = [
    {
      id: 1,
      title: "Trained & Certified Reel Makers",
      description: "Each Partner clears 6 filters to get their certification",
      image: imgTrainedCertified,
      span: "md:col-span-7",
    },
    {
      id: 2,
      title: "Easy Booking",
      description: "Stop strugging with complex booking procedure",
      image: imgEasyBooking,
      span: "md:col-span-5",
    },
    {
      id: 3,
      title: "Unbelievable Pricing",
      description: "Each Reel starts 1999/-",
      image: imgUnbelievablePricing,
      span: "md:col-span-4",
    },
    {
      id: 4,
      title: "Instant Reels, Instant Editing",
      description: "No hidden charges! Clients get upfront pricing, secure payment options, and a seamless checkout experience.",
      image: imgInstantReels,
      span: "md:col-span-8",
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white py-16 md:py-24 font-sans selection:bg-[#fc8019]/30 selection:text-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
        
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center text-center mb-12 md:mb-20">
          <h2 className="text-4xl md:text-[56px] lg:text-[72px] font-black uppercase tracking-tighter leading-[1.1] md:leading-[1.1]">
            Not Just Instant <br className="hidden sm:block" /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fc8019] to-[#ff4d4d]">Delivery</span>,{' '}
            {/* Elegant contrasting typography for "But..." */}
            <span className="font-serif italic lowercase font-medium tracking-normal text-gray-400 opacity-90">but...</span>
          </h2>
          <div className="w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mt-10 md:mt-14"></div>
        </div>

        {/* Projects Horizontal Scroll (Mobile) / Grid (Desktop) */}
        <div className="flex md:grid md:grid-cols-12 gap-6 md:gap-8 lg:gap-10 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none pb-12 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Action Button Area */}
        <div className="mt-8 md:mt-24 flex justify-center">
          <a 
            href="#" 
            className="group flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 hover:bg-[#fc8019]/10 hover:border-[#fc8019]/40 hover:text-[#fc8019] rounded-full text-white font-semibold text-lg md:text-xl transition-all duration-300"
          >
            Explore More
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>

      </div>
    </div>
  );
}