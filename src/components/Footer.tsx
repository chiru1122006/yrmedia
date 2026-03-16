
import { useEffect, useRef } from 'react';
import { Linkedin, Youtube, Instagram, MessageCircle } from 'lucide-react';
import headerImg from '../images/herosection/header.png';

export default function Footer() {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only initialize custom cursor on devices that support hover (non-touch)
    const isHoverSupported = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    
    if (!isHoverSupported) return;

    const dot = cursorDotRef.current;
    const outline = cursorOutlineRef.current;

    if (!dot || !outline) return;

    const onMouseMove = (e: MouseEvent) => {
      const posX = e.clientX;
      const posY = e.clientY;

      dot.style.left = `${posX}px`;
      dot.style.top = `${posY}px`;

      outline.animate(
        {
          left: `${posX}px`,
          top: `${posY}px`,
        },
        { duration: 500, fill: 'forwards' }
      );
    };

    const onMouseEnterLink = () => {
      outline.style.width = '50px';
      outline.style.height = '50px';
      outline.style.backgroundColor = 'rgba(255, 90, 0, 0.1)';
      outline.style.borderColor = 'rgba(255, 90, 0, 0.8)';
    };

    const onMouseLeaveLink = () => {
      outline.style.width = '30px';
      outline.style.height = '30px';
      outline.style.backgroundColor = 'transparent';
      outline.style.borderColor = 'rgba(255, 90, 0, 0.5)';
    };

    const onWindowLeave = () => {
      dot.style.opacity = '0';
      outline.style.opacity = '0';
    };

    const onWindowEnter = () => {
      dot.style.opacity = '1';
      outline.style.opacity = '1';
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onWindowLeave);
    document.addEventListener('mouseenter', onWindowEnter);

    // Attach listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, .footer-image-wrapper');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnterLink);
      el.addEventListener('mouseleave', onMouseLeaveLink);
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onWindowLeave);
      document.removeEventListener('mouseenter', onWindowEnter);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnterLink);
        el.removeEventListener('mouseleave', onMouseLeaveLink);
      });
    };
  }, []);

  return (
    <div className="antialiased flex flex-col min-h-screen bg-[#0a0a0a] text-white font-['Inter',sans-serif]">
      <style>{`
        :root {
          --orange-theme: #FF5A00;
          --bg-color: #0a0a0a;
        }

        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

        body {
          margin: 0;
          overflow-x: hidden;
          background-color: var(--bg-color);
        }

        /* Only apply custom cursor hiding on devices with fine pointers */
        @media (hover: hover) and (pointer: fine) {
          body { cursor: none; }
        }

        /* Text selection color */
        ::selection {
          background-color: var(--orange-theme);
          color: #ffffff;
        }

        /* Link Underlines matching the original design */
        .link-underline {
          text-decoration: underline;
          text-decoration-thickness: 1px;
          text-underline-offset: 6px;
          text-decoration-color: #ffffff;
          transition: all 0.3s ease;
        }
        
        .social-underline {
          text-decoration: underline;
          text-decoration-thickness: 1px;
          text-underline-offset: 4px;
          text-decoration-color: #ffffff;
          transition: all 0.3s ease;
        }

        a:hover.link-underline, 
        a:hover.social-underline {
          color: var(--orange-theme);
          text-decoration-color: var(--orange-theme);
        }

        /* Hover behavior for main links without default underline */
        .hover-orange {
          transition: color 0.3s ease;
        }
        .hover-orange:hover {
          color: var(--orange-theme);
        }

        /* Custom Cursor Elements */
        #cursor-dot, #cursor-outline {
          position: fixed;
          top: 0;
          left: 0;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          z-index: 9999;
          pointer-events: none;
          transition: width 0.2s, height 0.2s, background-color 0.2s, border-color 0.2s, opacity 0.3s;
        }

        #cursor-dot {
          width: 8px;
          height: 8px;
          background-color: var(--orange-theme);
        }

        #cursor-outline {
          width: 30px;
          height: 30px;
          border: 1px solid rgba(255, 90, 0, 0.5);
          transition: width 0.15s ease-out, height 0.15s ease-out, transform 0.1s, opacity 0.3s;
        }

        /* Hide custom cursor elements on touch devices */
        @media (hover: none) and (pointer: coarse) {
          #cursor-dot, #cursor-outline {
            display: none;
          }
        }

        /* Image hover effect */
        .footer-image-wrapper img {
          transition: transform 0.7s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.5s;
          filter: grayscale(80%) contrast(1.2);
        }
        .footer-image-wrapper:hover img {
          transform: scale(1.05);
          filter: grayscale(0%) contrast(1.1);
          opacity: 1;
        }
        
        /* Subtle parallax animation for the background watermark text */
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
      `}</style>

      {/* Custom Cursor DOM Nodes */}
      <div id="cursor-dot" ref={cursorDotRef}></div>
      <div id="cursor-outline" ref={cursorOutlineRef}></div>

      {/* FOOTER SECTION */}
      <footer className="pt-10 md:pt-16 pb-12 relative flex flex-col justify-between min-h-[85vh] overflow-hidden">
        
        {/* TOP ROW */}
        <div className="flex flex-col md:flex-row justify-between items-start w-full px-5 sm:px-8 md:px-12 relative z-10">
            
          {/* Giant Brand Watermark */}
          <div 
            className="text-[#141414] font-bold uppercase tracking-tighter leading-[0.75] select-none text-[22vw] sm:text-[20vw] md:text-[14vw] -ml-2 sm:-ml-3 md:-ml-4 mt-4 md:mt-0 cursor-default" 
            style={{ animation: 'float 8s ease-in-out infinite' }}
          >
            yrmedia
          </div>

          {/* Top Middle Text - Shown below watermark on mobile, absolute center on desktop */}
          <div className="md:absolute left-1/2 top-16 md:-translate-x-1/2 text-[#777] text-sm md:text-base font-light tracking-wide mt-6 md:mt-0 px-2 md:px-0 max-w-xs md:max-w-none">
            We create everything.<br/>
            <span className="text-[#ccc]">Yes, everything.</span>
          </div>

          {/* Top Right Image - Hidden on very small screens, visible on md+ */}
          <div className="hidden md:block absolute right-6 md:right-10 top-6 w-24 h-24 md:w-48 md:h-48">
            <img 
              src={headerImg}
              alt="Header Graphic"
              className="w-full h-full object-contain"
              draggable="false"
            />
          </div>
        </div>

        {/* BOTTOM GRID ROW */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-x-6 gap-y-12 sm:gap-y-16 px-5 sm:px-8 md:px-12 mt-16 md:mt-auto relative z-20">
            
          {/* Column 1: Copyright & Tagline */}
          <div className="md:col-span-3 flex flex-col justify-between h-full order-last sm:order-none mt-8 sm:mt-0">
            <div className="text-[11px] md:text-xs text-[#666] leading-tight font-medium uppercase tracking-widest">
              <span className="text-white">YRMEDIA <span className="text-[#FF5A00]">©2026</span></span><br/>
              A DIVISION OF CONTENT<br/>
              PRODUCTIONS LTD
            </div>
            
            <div className="text-[11px] text-[#444] uppercase tracking-[0.2em] mt-16 md:mt-auto hover:text-[#FF5A00] transition-colors cursor-default w-max">
              CREATE MORE
            </div>
          </div>

          {/* Column 2: Main Navigation Links */}
          <div className="md:col-span-3 flex flex-col items-start gap-1 sm:gap-2">
            <a href="#" className="hover-orange text-4xl sm:text-5xl lg:text-[4rem] font-medium leading-[1.1] tracking-tight w-max">Work</a>
            <a href="#" className="hover-orange text-4xl sm:text-5xl lg:text-[4rem] font-medium leading-[1.1] tracking-tight w-max">Services</a>
            <a href="#" className="link-underline text-4xl sm:text-5xl lg:text-[4rem] font-medium leading-[1.1] tracking-tight w-max">About</a>
            
            <a href="#" className="link-underline text-4xl sm:text-5xl lg:text-[4rem] font-medium leading-[1.1] tracking-tight w-max mt-8 sm:mt-12 md:mt-16">Say Hello</a>
          </div>

          {/* Column 3: Secondary Links */}
          <div className="md:col-span-3 flex flex-col items-start gap-1 sm:gap-2 mt-4 sm:mt-0">
            <a href="#" className="hover-orange text-4xl sm:text-5xl lg:text-[4rem] font-medium leading-[1.1] tracking-tight w-max">Video</a>
            <a href="#" className="link-underline text-4xl sm:text-5xl lg:text-[4rem] font-medium leading-[1.1] tracking-tight w-max">CreatorNet</a>
          </div>

          {/* Column 4: Socials & Dynamic Image */}
          <div className="md:col-span-3 flex flex-col justify-between h-full mt-4 sm:mt-0">
            <div className="flex flex-col items-start gap-2 text-sm md:text-[15px] font-medium">
              <a href="#" className="social-underline w-max flex items-center gap-2"><Linkedin size={18} /> LinkedIn</a>
              <a href="#" className="social-underline w-max flex items-center gap-2"><Youtube size={18} /> YouTube</a>
              <a href="#" className="social-underline w-max flex items-center gap-2"><Instagram size={18} /> Instagram</a>
              <a href="#" className="social-underline w-max flex items-center gap-2"><MessageCircle size={18} /> WhatsApp</a>
            </div>

            {/* Footer Image Placeholder (Content Creation Theme with Orange Accent) */}
            <div className="mt-12 md:mt-auto pt-4 sm:pt-6 w-full max-w-sm sm:max-w-[320px] footer-image-wrapper overflow-hidden relative cursor-pointer rounded-sm">
              {/* Overlay for orange tint */}
              <div className="absolute inset-0 bg-[#FF5A00] mix-blend-multiply opacity-20 hover:opacity-0 transition-opacity duration-500 z-10 pointer-events-none"></div>
              <img src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=800&auto=format&fit=crop" alt="Content Creation Studio" className="w-full h-[160px] sm:h-[180px] object-cover opacity-80" />
            </div>
          </div>
            
        </div>
      </footer>
    </div>
  );
}
