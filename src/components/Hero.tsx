import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import subjectImage from '../images/herosection/newsubject.png';
import bgImage from '../images/herosection/background.png';

// SplitHoverText Helper Component
const SplitHoverText = ({ text }: { text: string }) => {
  return (
    <a href="#" className="group relative inline-flex overflow-hidden text-[1rem] sm:text-[1.2rem] md:text-[1.5rem] font-black uppercase tracking-tighter leading-[1.1] md:leading-[1.1] text-white no-underline">
      <div className="flex">
        {text.split('').map((char, i) => (
          <span 
            key={i} 
            className="inline-block transition-transform duration-600 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full" 
            style={{ transitionDelay: `${i * 0.02}s` }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </div>
      <div className="flex absolute top-full left-0 text-[#FC8019]">
        {text.split('').map((char, i) => (
          <span 
            key={i} 
            className="inline-block transition-transform duration-600 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full" 
            style={{ transitionDelay: `${i * 0.02}s` }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </div>
    </a>
  );
};

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Simple fade-in animation on mount
    setIsLoaded(true);

    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized mouse position from -1 to 1
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'transparent', position: 'relative', overflowX: 'hidden', backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      {/* CSS Styles injected via style tag for component portability */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&family=Inter:wght@400;600&family=Syne:wght@700;800&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Covered+By+Your+Grace&family=Zalando+Sans+Expanded:ital,wght@0,200..900;1,200..900&display=swap');
          @import url('https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400&display=swap');

          body {
            font-family: 'Outfit', sans-serif;
            margin: 0;
            background-color: #050505;
          }
          
          .premium-text {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            text-rendering: optimizeLegibility;
          }

          .font-logo {
            font-family: 'Syne', sans-serif;
          }

          /* High-Quality SVG Noise/Grain Overlay */
          .bg-grain {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            pointer-events: none;
            z-index: 1; /* Above the glow, below the content */
            opacity: 0.12; 
            mix-blend-mode: overlay; 
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          }

          /* The "10 Minutes" Text */
          .hero-text-10min {
            background: linear-gradient(180deg, #FC8019 20%, #e06c0e 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-shadow: 0px 10px 30px rgba(252, 128, 25, 0.15);
          }

          /* --- NEW RAPID MEDIA STYLES --- */
          .font-image-match { 
            font-family: "Zalando Sans Expanded", sans-serif;
            font-optical-sizing: auto;
            font-style: normal;
          }
          .font-covered { 
            font-family: 'Covered By Your Grace', cursive; 
          }
          .media-style {
            letter-spacing: -0.04em;
            line-height: 1.1; /* Increased from 0.6 to prevent the 'i' dot from being clipped */
            transform: skew(-8deg, -4deg);
            display: inline-block;
            padding-top: 0.1em; /* Adds a tiny buffer to guarantee the top isn't cut off */
          }
          .text-colorfull {
            background-image: linear-gradient(to right, #fc8019, #ffb347, #ff6a00, #fc8019);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            color: transparent;
          }
          @keyframes gradient-x {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-gradient-x {
            background-size: 200% auto;
            animation: gradient-x 3s linear infinite;
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

          /* --- REVEAL ANIMATION STYLES --- */
          .font-impact {
            font-family: 'Inter', sans-serif;
            font-weight: 900;
            letter-spacing: -0.04em;
          }

          .font-satoshi {
            font-family: 'Satoshi', sans-serif;
          }

          .reveal-container {
            position: relative;
            display: inline-flex;
            overflow: hidden;
            padding-bottom: 0.1em; /* Accommodate descenders */
          }

          .text-reveal-layer {
            opacity: 0;
            animation: textReveal 1.2s cubic-bezier(0.77, 0, 0.175, 1) forwards;
          }

          .block-reveal-layer {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
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
        `}
      </style>

      {/* The Grain/Noise Overlay */}
      <div className="bg-grain" />

      {/* Main Content */}
      <div className="w-full relative flex justify-center items-start z-10 premium-text pt-10 md:pt-28">
        <div className="w-full max-w-7xl px-4 pt-4 md:pt-6 text-center flex flex-col items-center sticky top-0 md:h-screen">
            
          {/* HEADER AREA: We will remove the old header markup from here since it's now in App.tsx -> Header.tsx */}
          {/* Removed the old header code that was here */}

          {/* Text Content */}
          <div className="relative flex flex-col items-center justify-end w-full mt-4 md:mt-8 h-auto md:h-[70vh]">
            
            {/* Added Animation Text block */}
            <div className="md:absolute relative mt-8 md:mt-0 mb-4 md:mb-0 top-0 md:top-0 md:left-1/2 md:transform md:-translate-x-1/2 z-0 flex flex-col items-center text-center text-3xl md:text-[48px] lg:text-[60px] font-black uppercase tracking-tighter leading-[1.1] md:leading-[1.1] text-white drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] w-full">
              {/* Line 1 */}
              {isLoaded && (
                <div className="reveal-container">
                  <div className="text-reveal-layer" style={{ animationDelay: '0.2s' }}>
                    We Shoot • Edit • Deliver <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fc8019] to-[#ff4d4d] pr-2 md:pr-4">Reels in</span>
                  </div>
                  <div className="block-reveal-layer" style={{ animationDelay: '0.2s' }}></div>
                </div>
              )}

              {/* Line 2 */}
              {isLoaded && (
                <div className="reveal-container mt-1 md:mt-2 w-full max-w-[800px] flex justify-center">
                  <div className="text-reveal-layer flex w-full justify-center md:pl-12" style={{ animationDelay: '0.6s' }}>
                    10<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fc8019] to-[#ff4d4d] px-2 md:px-3">Minutes*</span>
                  </div>
                  <div className="block-reveal-layer" style={{ animationDelay: '0.6s', backgroundColor: '#ffffff' }}></div>
                </div>
              )}
            </div>

            {/* NEW FOOTER STYLE SPLIT TEXT - LEFT & RIGHT COLUMNS */}
            <div className="hidden sm:flex absolute top-[35%] md:top-[40%] w-full justify-between px-2 md:px-0 lg:px-8 z-20 pointer-events-auto">
              
              {/* Left Column */}
              <div className="flex flex-col items-start text-left md:-ml-8 lg:-ml-16">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                  className="w-full md:!opacity-100 md:!transform-none"
                >
                  <div className="flex items-center gap-4 text-[0.6rem] md:text-[0.7rem] uppercase tracking-[0.15em] text-[#888888] mb-4 font-bold">
                    <span className="w-8 h-px bg-[#888888] opacity-40 block"></span>
                    HOW IT WORKS
                  </div>
                </motion.div>
                <div className="flex flex-col items-start gap-3">
                  {[
                    "BOOK A CREATOR",
                    "WE SHOOT",
                    "WE EDIT",
                    "DELIVERED IN 10 MINUTES"
                  ].map((text, idx) => (
                    <motion.div
                      key={text}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: 0.1 * (idx + 2), ease: "easeOut" }}
                      className="md:!opacity-100 md:!transform-none"
                    >
                      <SplitHoverText text={text} />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right Column */}
              <div className="flex flex-col items-end text-right hidden sm:flex md:-mr-8 lg:-mr-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                  className="w-full md:!opacity-100 md:!transform-none"
                >
                  <div className="flex items-center gap-4 text-[0.6rem] md:text-[0.7rem] uppercase tracking-[0.15em] text-[#888888] mb-4 font-bold">
                    WHAT WE DO
                    <span className="w-8 h-px bg-[#888888] opacity-40 block"></span>
                  </div>
                </motion.div>
                <div className="flex flex-col items-end gap-3">
                  {[
                    "INSTANT REEL PRODUCTION",
                    "FAST SOCIAL EDITING",
                    "CREATOR NETWORK",
                    "READY TO POST CONTENT"
                  ].map((text, idx) => (
                    <motion.div
                      key={text}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: 0.1 * (idx + 2), ease: "easeOut" }}
                      className="md:!opacity-100 md:!transform-none"
                    >
                      <SplitHoverText text={text} />
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>

            {/* Main Subject Image with Parallax */}
            <div 
              className={`fade-in ${isLoaded ? 'visible' : ''} w-full flex justify-center pb-0 md:pb-2 max-h-full pointer-events-none transition-transform duration-200 ease-out`}
              style={{
                transform: `translate(${mousePos.x * -15}px, ${mousePos.y * -10}px)`
              }}
            >
                <img src={subjectImage} alt="Main Subject" className="h-[55vh] md:h-[80vh] w-auto object-contain drop-shadow-2xl relative z-10 mt-8 md:mt-32 mb-4 md:mb-0" />
            </div>

            {/* Mobile Call to Action Buttons */}
            <div className="md:hidden w-full flex flex-col items-center gap-3 z-30 px-6 pointer-events-auto">
              <button className="w-full py-4 rounded-xl bg-gradient-to-r from-[#fc8019] to-[#ff6a00] text-white font-bold text-lg tracking-wide uppercase shadow-[0_4px_20px_rgba(252,128,25,0.4)] active:scale-95 transition-transform">
                Book Now
              </button>
              <button className="w-full py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold text-lg tracking-wide uppercase active:scale-95 transition-transform mb-8">
                Become a Partner
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
