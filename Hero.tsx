'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      style={{
        minHeight: '100vh',
        position: 'relative',
        overflowX: 'hidden',
        backgroundImage: 'url(/images/background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&family=Inter:wght@400;600&family=Syne:wght@700;800&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Covered+By+Your+Grace&family=Zalando+Sans+Expanded:ital,wght@0,200..900;1,200..900&display=swap');
        @import url('https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

        .pixel-text {
          font-family: 'Press Start 2P', monospace;
          font-size: 1.25rem;
          background: linear-gradient(to right, #fc8019, #ff4d4d);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-align: center;
          line-height: 1.6;
          letter-spacing: normal;
        }

        @media (min-width: 768px) {
          .pixel-text {
            font-size: 2rem;
          }
        }

        .hero-subtext {
          font-family: 'Inter', sans-serif;
          font-size: 0.65rem;
          color: #ffffff;
          font-weight: 500;
          letter-spacing: 0.06em;
          line-height: 1.5;
          text-transform: uppercase;
          opacity: 0.9;
          margin-top: 1.2rem;
          padding-left: 0.5rem;
          padding-right: 0.5rem;
        }

        @media (min-width: 768px) {
          .hero-subtext {
            font-size: 0.85rem;
            letter-spacing: 0.15em;
            margin-top: 1.8rem;
            padding-left: 0;
            padding-right: 0;
          }
        }

        .bg-grain {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          pointer-events: none;
          z-index: 1;
          opacity: 0.12;
          mix-blend-mode: overlay;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }

        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 1s ease-out, transform 1s ease-out;
        }

        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .reveal-container {
          position: relative;
          display: inline-flex;
          overflow: hidden;
          padding-bottom: 0.1em;
        }

        .text-reveal-layer {
          opacity: 0;
          animation: textReveal 1.2s cubic-bezier(0.77, 0, 0.175, 1) forwards;
        }

        .block-reveal-layer {
          position: absolute;
          inset: 0;
          background-color: #FC8019;
          transform-origin: right;
          transform: scaleX(0);
          z-index: 10;
          animation: blockReveal 1.2s cubic-bezier(0.77, 0, 0.175, 1) forwards;
        }

        @keyframes blockReveal {
          0% { transform-origin: right; transform: scaleX(0); }
          35% { transform-origin: right; transform: scaleX(1); }
          36% { transform-origin: left; transform: scaleX(1); }
          100% { transform-origin: left; transform: scaleX(0); }
        }

        @keyframes textReveal {
          0%, 35% { opacity: 0; }
          36%, 100% { opacity: 1; }
        }
      `}</style>

      <div className="bg-grain" />

      <div className="relative z-10 flex w-full items-start justify-center pt-10 md:pt-28">
        <div className="sticky top-0 flex w-full max-w-7xl flex-col items-center px-4 pt-4 text-center md:h-screen md:pt-6">
          <div className="relative flex h-[75vh] w-full flex-col items-center justify-center pt-[10vh] md:h-[70vh] md:mt-8 md:justify-end md:pt-0">
            <div className="relative z-0 mt-8 mb-4 flex w-full flex-col items-center text-center text-[1.55rem] font-black uppercase leading-[1.1] tracking-tighter text-white drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] md:absolute md:top-0 md:mt-0 md:text-[38px] lg:text-[48px]">
              {isLoaded && (
                <div className="reveal-container">
                  <div className="text-reveal-layer" style={{ animationDelay: '0.2s' }}>
                    We Shoot • Edit • Deliver <span className="bg-gradient-to-r from-[#fc8019] to-[#ff4d4d] bg-clip-text pr-2 text-transparent md:pr-4">Reels in</span>
                  </div>
                  <div className="block-reveal-layer" style={{ animationDelay: '0.2s' }} />
                </div>
              )}

              {isLoaded && (
                <div className="reveal-container mt-1 flex w-full max-w-[800px] justify-center md:mt-2">
                  <div className="text-reveal-layer flex w-full justify-center md:pl-12" style={{ animationDelay: '0.6s' }}>
                    10<span className="bg-gradient-to-r from-[#fc8019] to-[#ff4d4d] bg-clip-text px-2 text-transparent md:px-3">Minutes*</span>
                  </div>
                  <div className="block-reveal-layer" style={{ animationDelay: '0.6s', backgroundColor: '#ffffff' }} />
                </div>
              )}

              {isLoaded && (
                <div className="reveal-container mt-4 flex w-full justify-center md:mt-6">
                  <div className="text-reveal-layer pixel-text normal-case flex flex-col items-center justify-center font-normal" style={{ animationDelay: '1.0s' }}>
                    &lt;Made/&gt;
                    <br />
                    to Go Viral&gt;
                  </div>
                  <div className="block-reveal-layer" style={{ animationDelay: '1.0s', backgroundColor: '#fc8019' }} />
                </div>
              )}

              {isLoaded && (
                <div
                  className={`fade-in ${isLoaded ? 'visible' : ''} hero-subtext`}
                  style={{ transitionDelay: '1.4s' }}
                >
                  500+ Reels Delivered &nbsp;|&nbsp; Certified Creators &nbsp;|&nbsp; 4.9/5 Rating
                </div>
              )}

              {isLoaded && (
                <div 
                  className={`fade-in ${isLoaded ? 'visible' : ''} mt-8 md:mt-10 flex flex-col items-center gap-4`}
                  style={{ transitionDelay: '1.8s' }}
                >
                  <a href="#register" className="inline-block transition-transform duration-200 hover:scale-105 active:scale-95 pointer-events-auto cursor-pointer">
                    <img 
                      src="/images/registernowbutton.png" 
                      alt="Register Now" 
                      className="h-14 md:h-18 w-auto object-contain drop-shadow-md"
                    />
                  </a>
                  
                  <a 
                    href="#partner" 
                    className="text-xs md:text-sm font-bold uppercase tracking-wider text-white/50 hover:text-white transition-colors duration-200 pointer-events-auto mt-2"
                  >
                    Become a Partner
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
