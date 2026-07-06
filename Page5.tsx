'use client';

import { useEffect, useRef, useState } from 'react';

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
    title: 'Strategic Planning',
    tag: 'Free Consultation',
    description: (
      <>
        <p className="mb-4">We understand your brand and goals, then craft a unique concept and quick plan for maximum impact.</p>
        <ul className="list-disc space-y-1 pl-5 text-zinc-400">
          <li>Personalized concept</li>
          <li>Platform alignment</li>
        </ul>
      </>
    ),
    imageUrl: '/images/How YR Media works/img1.png',
  },
  {
    number: 2,
    title: 'Shoot & Direction',
    tag: 'Professional 10-Minute Execution',
    description: (
      <>
        <p className="mb-4">Our certified YR Media reel creators handle the complete shoot. Everything is captured efficiently — without wasting your time.</p>
        <ul className="list-disc space-y-1 pl-5 text-zinc-400">
          <li>High-quality iPhone cinematography</li>
          <li>Proper lighting & framing</li>
          <li>Creative direction on expressions and movements</li>
          <li>Multiple short takes for best output</li>
          <li>Fast and structured workflow</li>
        </ul>
      </>
    ),
    imageUrl: '/images/How YR Media works/img2.png',
  },
  {
    number: 3,
    title: 'Instant Editing & Delivery',
    tag: 'Fast Turnaround',
    description: (
      <>
        <p className="mb-4">We transform raw footage into a scroll-stopping reel. Your edited reel is delivered within minutes after the shoot.</p>
        <ul className="list-disc space-y-1 pl-5 text-zinc-400">
          <li>Professional cuts & transitions</li>
          <li>Trend-based music sync</li>
          <li>Color grading</li>
          <li>Text overlays & captions</li>
          <li>Brand watermarking</li>
        </ul>
      </>
    ),
    imageUrl: '/images/How YR Media works/img3.png',
  },
  {
    number: 4,
    title: 'Support & Growth',
    tag: 'Post-Shoot Assistance',
    description: (
      <>
        <p className="mb-4">After delivery, we provide the necessary support to ensure your reel performs — not just looks good.</p>
        <ul className="list-disc space-y-1 pl-5 text-zinc-400">
          <li>Minor revision support</li>
          <li>Posting guidance & caption suggestions</li>
          <li>Hashtag strategy</li>
          <li>Optimization tips for reach</li>
        </ul>
      </>
    ),
    imageUrl: '/images/How YR Media works/img4.png',
  },
];

export default function Page5() {
  const [activeStage, setActiveStage] = useState(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let scrollInterval: ReturnType<typeof setInterval>;
    let interactionTimeout: ReturnType<typeof setTimeout>;

    const startAutoScroll = () => {
      clearInterval(scrollInterval);
      scrollInterval = setInterval(() => {
        if (!scrollContainerRef.current) return;
        const container = scrollContainerRef.current;
        const maxScrollLeft = container.scrollWidth - container.clientWidth;
        const cardWidthWithGap = window.innerWidth * 0.75 + 16;
        let nextScrollLeft = container.scrollLeft + cardWidthWithGap;
        if (nextScrollLeft >= maxScrollLeft - 20) nextScrollLeft = 0;
        container.scrollTo({ left: nextScrollLeft, behavior: 'smooth' });
      }, 3500);
    };

    const handleUserInteraction = () => {
      clearInterval(scrollInterval);
      clearTimeout(interactionTimeout);
      interactionTimeout = setTimeout(() => startAutoScroll(), 4000);
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('touchstart', handleUserInteraction, { passive: true });
      container.addEventListener('touchmove', handleUserInteraction, { passive: true });
      container.addEventListener('mousedown', handleUserInteraction, { passive: true });
    }

    const carouselObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          if (scrollContainerRef.current && scrollContainerRef.current.scrollLeft <= 20) {
            setTimeout(() => {
              if (!scrollContainerRef.current) return;
              scrollContainerRef.current.scrollTo({
                left: window.innerWidth * 0.75 + 16,
                behavior: 'smooth',
              });
            }, 800);
          }
          startAutoScroll();
        } else {
          clearInterval(scrollInterval);
          clearTimeout(interactionTimeout);
        }
      },
      { root: null, rootMargin: '0px', threshold: 0.5 },
    );

    if (scrollContainerRef.current && window.innerWidth < 768) {
      carouselObserver.observe(scrollContainerRef.current);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) setActiveStage(index);
          }
        });
      },
      { root: null, rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    );

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

  return (
    <div className="min-h-screen bg-black font-sans text-white selection:bg-[#FC8019] selection:text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=Inter:wght@400;700;800&display=swap');
        .font-handwriting { font-family: 'Caveat', cursive; }
        .font-inter { font-family: 'Inter', sans-serif; }
      `}</style>

      <div className="mx-auto max-w-7xl px-6 py-0 font-inter">
        <header className="mb-12 flex flex-col items-center justify-center text-center md:mb-24">
          <h2 className="text-3xl font-black uppercase leading-[1.1] tracking-tighter md:text-4xl lg:text-5xl">
            How YR Media <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-[#fc8019] to-[#ff4d4d] bg-clip-text text-transparent">works</span>
          </h2>
          <div className="mt-8 h-[1px] w-full max-w-3xl bg-gradient-to-r from-transparent via-white/10 to-transparent md:mt-10" />
        </header>

        <div ref={scrollContainerRef} className="hide-scrollbar flex gap-4 overflow-x-auto px-4 pb-8 transition-all scroll-smooth snap-x snap-mandatory md:hidden">
          {STAGES.map((stage) => (
            <section key={stage.number} className="snap-always flex w-[75vw] flex-none snap-center flex-col overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 shadow-2xl sm:w-[60vw]">
              <div className="relative h-48 sm:h-56">
                <img src={stage.imageUrl} alt={stage.title} className="h-full w-full object-cover" />
                <div className="absolute top-4 left-4 z-10 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#FC8019] text-xl font-black shadow-lg">
                  {stage.number}
                </div>
              </div>
              <div className="flex flex-grow flex-col p-6">
                <div className="mb-4 flex flex-col gap-2">
                  <h2 className="text-2xl leading-tight font-bold tracking-tight uppercase">{stage.title}</h2>
                  {stage.tag ? <span className="self-start rounded-full bg-[#FC8019] px-2.5 py-1 text-[10px] font-black tracking-wider text-black uppercase">{stage.tag}</span> : null}
                </div>
                <div className="text-sm leading-relaxed font-light text-zinc-400">{stage.description}</div>
              </div>
            </section>
          ))}
        </div>

        <div className="hidden grid-cols-[180px_1fr] items-start gap-12 md:grid lg:grid-cols-[220px_1fr] lg:gap-24">
          <aside className="sticky top-48 hidden h-[600px] md:block">
            <div className="absolute top-0 left-0 h-32 w-32 rounded-2xl bg-[#FC8019] shadow-[0_0_30px_rgba(252,128,25,0.2)]" />
            <div className="relative z-10 flex flex-col transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" style={{ transform: `translate3d(0, -${activeStage * 128}px, 0)` }}>
              {STAGES.map((stage, index) => (
                <div key={stage.number} className={`flex h-32 w-32 items-center justify-center text-[90px] font-black transition-all duration-500 ${activeStage === index ? 'scale-100 text-white opacity-100' : 'scale-90 text-zinc-500 opacity-20'}`}>
                  {stage.number}
                </div>
              ))}
            </div>
          </aside>

          <main className="flex flex-col gap-32 pb-64 md:gap-56">
            {STAGES.map((stage, index) => (
              <section key={stage.number} ref={(el) => { sectionRefs.current[index] = el; }} className="scroll-mt-48">
                <div className="mb-6 flex flex-wrap items-baseline gap-4">
                  <h2 className="text-3xl font-bold tracking-tight uppercase md:text-5xl">{stage.title}</h2>
                  {stage.tag ? <span className="rounded-full bg-[#FC8019] px-3 py-1 text-xs font-black tracking-wider text-black uppercase md:text-sm">{stage.tag}</span> : null}
                </div>
                <div className="mb-12 max-w-3xl text-lg leading-relaxed font-light text-zinc-300 md:text-2xl">{stage.description}</div>
                <div className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 shadow-2xl transition-transform duration-500 hover:scale-[1.01]">
                  <img src={stage.imageUrl} alt={stage.title} className="h-auto w-full object-cover opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              </section>
            ))}
          </main>
        </div>
      </div>
    </div>
  );
}
