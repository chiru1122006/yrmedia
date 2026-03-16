import React, { useEffect, useRef, useState } from 'react';

// --- Types ---
interface Stage {
  number: number;
  title: string;
  tag?: string;
  description: React.ReactNode;
  imageUrl: string;
}

const STAGES: Stage[] = [
  {
    number: 1,
    title: "Strategic Planning",
    tag: "Free Consultation",
    description: (
      <>
        <p className="mb-4">We understand your brand and goals, then craft a unique concept and quick plan for maximum impact.</p>
        <ul className="list-disc pl-5 space-y-1 text-zinc-400">
          <li>Personalized concept</li>
          <li>Platform alignment</li>
        </ul>
      </>
    ),
    imageUrl: "https://cdn.prod.website-files.com/6916200346ddd8428d3d953b/691cb7bc0a4b297c526c6bf3_c8c39e48c9cd7332dee4420f5b23c03f_img-1.webp"
  },
  {
    number: 2,
    title: "Shoot & Direction",
    tag: "Professional 10-Minute Execution",
    description: (
      <>
        <p className="mb-4">Our certified YR Media reel creators handle the complete shoot. Everything is captured efficiently — without wasting your time.</p>
        <ul className="list-disc pl-5 space-y-1 text-zinc-400">
          <li>High-quality iPhone cinematography</li>
          <li>Proper lighting & framing</li>
          <li>Creative direction on expressions and movements</li>
          <li>Multiple short takes for best output</li>
          <li>Fast and structured workflow</li>
        </ul>
      </>
    ),
    imageUrl: "https://cdn.prod.website-files.com/6916200346ddd8428d3d953b/693ff47795d7febaa32a0fe5_292465b3bb477eb48d4a78db2cb7ccd0_stage-img-2.webp"
  },
  {
    number: 3,
    title: "Instant Editing & Delivery",
    tag: "Fast Turnaround",
    description: (
      <>
        <p className="mb-4">We transform raw footage into a scroll-stopping reel. Your edited reel is delivered within minutes after the shoot.</p>
        <ul className="list-disc pl-5 space-y-1 text-zinc-400">
          <li>Professional cuts & transitions</li>
          <li>Trend-based music sync</li>
          <li>Color grading</li>
          <li>Text overlays & captions</li>
          <li>Brand watermarking</li>
        </ul>
      </>
    ),
    imageUrl: "https://cdn.prod.website-files.com/6916200346ddd8428d3d953b/693ff476afcdc32e411e2367_aa9110a41ea04e71c0d15596dee6b16c_stage-img-3.webp"
  },
  {
    number: 4,
    title: "Support & Growth",
    tag: "Post-Shoot Assistance",
    description: (
      <>
        <p className="mb-4">After delivery, we provide the necessary support to ensure your reel performs — not just looks good.</p>
        <ul className="list-disc pl-5 space-y-1 text-zinc-400">
          <li>Minor revision support</li>
          <li>Posting guidance & caption suggestions</li>
          <li>Hashtag strategy</li>
          <li>Optimization tips for reach</li>
        </ul>
      </>
    ),
    imageUrl: "https://cdn.prod.website-files.com/6916200346ddd8428d3d953b/693ff475d26d1435ca50e923_df7bcb7b15e88ac9fc3aaf770885f8af_stage-img-7.webp"
  }
];

const Page5: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let scrollInterval: ReturnType<typeof setInterval>;
    let interactionTimeout: ReturnType<typeof setTimeout>;
    
    // Auto-scroll logic for mobile
    const startAutoScroll = () => {
      // Clear any existing interval to prevent speeding up
      clearInterval(scrollInterval);
      
      scrollInterval = setInterval(() => {
        if (scrollContainerRef.current) {
          const container = scrollContainerRef.current;
          const scrollWidth = container.scrollWidth;
          const clientWidth = container.clientWidth;
          const maxScrollLeft = scrollWidth - clientWidth;
          
          // Using 75vw cards + 16px gap (gap-4)
          // Rough calculation for next snap point
          const cardWidthWithGap = (window.innerWidth * 0.75) + 16; 
          
          let nextScrollLeft = container.scrollLeft + cardWidthWithGap;
          
          // Give a small buffer (20px) before resetting
          if (nextScrollLeft >= maxScrollLeft - 20) {
            nextScrollLeft = 0; // Seamlessly go back to first
          }

          container.scrollTo({
            left: nextScrollLeft,
            behavior: 'smooth'
          });
        }
      }, 3500); // 3.5s per card to ensure they have enough time to read
    };

    // Pause auto-scroll when user interacts with the carousel
    const handleUserInteraction = () => {
      clearInterval(scrollInterval);
      clearTimeout(interactionTimeout);
      
      // Resume auto-scroll after 4 seconds of inactivity
      interactionTimeout = setTimeout(() => {
        startAutoScroll();
      }, 4000); 
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('touchstart', handleUserInteraction, { passive: true });
      container.addEventListener('touchmove', handleUserInteraction, { passive: true });
      container.addEventListener('mousedown', handleUserInteraction, { passive: true });
    }

    // Observer to detect when the mobile carousel is in view
    const carouselObserverOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // Require 50% visibility before starting
    };

    const carouselObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        // Trigger initial bump
        if (scrollContainerRef.current && scrollContainerRef.current.scrollLeft <= 20) {
          setTimeout(() => {
            if (scrollContainerRef.current) {
              const container = scrollContainerRef.current;
              // Card width is 75vw + 16px gap, and taking padding/margins into effect
              const cardWidth = (window.innerWidth * 0.75) + 16;
              
              // Smooth bump to show the second card quickly
              container.scrollTo({
                left: cardWidth,
                behavior: 'smooth'
              });
            }
          }, 800); // Trigger 0.8s after it comes into view 
        }
        
        startAutoScroll();
      } else {
        clearInterval(scrollInterval);
        clearTimeout(interactionTimeout);
      }
    }, carouselObserverOptions);

    if (scrollContainerRef.current && window.innerWidth < 768) { 
       carouselObserver.observe(scrollContainerRef.current);
    }


    const observerOptions = {
      root: null,
      rootMargin: '-45% 0px -45% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionRefs.current.indexOf(entry.target as HTMLDivElement);
          if (index !== -1) {
            setActiveStage(index);
          }
        }
      });
    }, observerOptions);

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (container) {
        container.removeEventListener('touchstart', handleUserInteraction);
        container.removeEventListener('touchmove', handleUserInteraction);
        container.removeEventListener('mousedown', handleUserInteraction);
      }
      observer.disconnect();
      carouselObserver.disconnect();
      clearInterval(scrollInterval);
      clearTimeout(interactionTimeout);
    };
  }, []);

  const swiggyOrange = "#FC8019";

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#FC8019] selection:text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=Inter:wght@400;700;800&display=swap');
        .font-handwriting { font-family: 'Caveat', cursive; }
        .font-inter { font-family: 'Inter', sans-serif; }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 py-0 font-inter">
        
        <header className="mb-12 md:mb-24 flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter leading-[1.1] md:leading-[1.1]">
            How YR Media <br className="hidden sm:block" /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fc8019] to-[#ff4d4d]">works</span>
          </h2>
          <div className="w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mt-8 md:mt-10"></div>
        </header>

        <div  
          ref={scrollContainerRef}
          className="md:hidden flex overflow-x-auto gap-4 pb-8 snap-x snap-mandatory hide-scrollbar transition-all scroll-smooth px-4"
        >
          {STAGES.map((stage) => (
            <section 
              key={stage.number}
              className="flex-none w-[75vw] sm:w-[60vw] snap-center snap-always bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            >
              <div className="relative h-48 sm:h-56">
                <img 
                  src={stage.imageUrl} 
                  alt={stage.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 inline-flex items-center justify-center w-12 h-12 rounded-xl text-xl font-black shadow-lg z-10"
                   style={{ backgroundColor: swiggyOrange }}>
                  {stage.number}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-col gap-2 mb-4">
                  <h2 className="text-2xl font-bold uppercase tracking-tight leading-tight">
                    {stage.title}
                  </h2>
                  {stage.tag && (
                    <span 
                      className="text-black text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider self-start"
                      style={{ backgroundColor: swiggyOrange }}
                    >
                      {stage.tag}
                    </span>
                  )}
                </div>

                <div className="text-zinc-400 text-sm leading-relaxed font-light">
                  {stage.description}
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Existing Grid for Tablet/Desktop */}
        <div className="hidden md:grid grid-cols-[180px_1fr] lg:grid-cols-[220px_1fr] gap-12 lg:gap-24 items-start">
          
          {/* Sidebar with sticky numbers */}
          <aside className="hidden md:block sticky top-48 h-[600px]">
            {/* The Stationary Active Box (Square background) */}
            <div 
              className="absolute top-0 left-0 w-32 h-32 rounded-2xl z-0 shadow-[0_0_30px_rgba(252,128,25,0.2)]"
              style={{ backgroundColor: swiggyOrange }}
            />

            {/* Sliding Numbers List - Always visible but different opacities */}
            <div 
              className="relative z-10 flex flex-col transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: `translate3d(0, -${activeStage * 128}px, 0)` }}
            >
              {STAGES.map((s, i) => (
                <div 
                  key={s.number}
                  className={`w-32 h-32 flex items-center justify-center text-[90px] font-black transition-all duration-500 ${
                    activeStage === i 
                      ? 'text-white opacity-100 scale-100' 
                      : 'text-zinc-500 opacity-20 scale-90'
                  }`}
                >
                  {s.number}
                </div>
              ))}
            </div>
          </aside>

          <main className="flex flex-col gap-32 md:gap-56 pb-64">
            {STAGES.map((stage, index) => (
              <section 
                key={stage.number}
                ref={(el: HTMLDivElement | null) => { sectionRefs.current[index] = el; }}
                className="stage-section scroll-mt-48"
              >

                <div className="flex flex-wrap items-baseline gap-4 mb-6">
                  <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">
                    {stage.title}
                  </h2>
                  {stage.tag && (
                    <span 
                      className="text-black text-xs md:text-sm font-black px-3 py-1 rounded-full uppercase tracking-wider"
                      style={{ backgroundColor: swiggyOrange }}
                    >
                      {stage.tag}
                    </span>
                  )}
                </div>

                <div className="text-zinc-300 text-lg md:text-2xl leading-relaxed mb-12 max-w-3xl font-light">
                  {stage.description}
                </div>

                <div className="group relative rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl transition-transform duration-500 hover:scale-[1.01]">
                  <img 
                    src={stage.imageUrl} 
                    alt={stage.title} 
                    className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </div>
              </section>
            ))}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Page5;