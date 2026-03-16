import React from 'react';
import headerImg from '../images/herosection/header.png';

interface HeaderProps {
  activeTab?: string;
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="bg-transparent font-sans text-white">
      <style>{`
        /* Minimalist Typography Styles */
        .nav-link {
          color: rgba(255, 255, 255, 0.5);
          transition: color 0.3s ease;
          position: relative;
          font-size: 0.875rem;
          font-weight: 500;
        }

        .nav-link:hover {
          color: rgba(255, 255, 255, 0.9);
        }

        .nav-link-active {
          color: rgb(255, 255, 255) !important;
        }

        .brand-text {
          font-weight: 700;
          letter-spacing: -0.03em;
          color: white;
          font-size: 1.25rem;
        }
        
        /* The Blur Curtain - Primary Visual Effect */
        .page-top-blur {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            height: 160px;
            z-index: 40;
            pointer-events: none;
            backdrop-filter: blur(20px); 
            -webkit-backdrop-filter: blur(20px);
            /* This mask creates the smooth transition from blurred to clear */
            mask-image: linear-gradient(to bottom, 
              rgba(0,0,0,1) 0%, 
              rgba(0,0,0,1) 30%, 
              rgba(0,0,0,0) 100%
            );
            -webkit-mask-image: linear-gradient(to bottom, 
              rgba(0,0,0,1) 0%, 
              rgba(0,0,0,1) 30%, 
              rgba(0,0,0,0) 100%
            );
        }

        /* Simple underline for active state instead of glow */
        .active-indicator {
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 1px;
          background: white;
          opacity: 0.8;
        }
      `}</style>

      {/* The Blur Effect */}
      <div className="page-top-blur" aria-hidden="true" />

      {/* Floating Header */}
      <header className="fixed top-0 left-0 right-0 z-[50] w-full pointer-events-none">
        <nav className="container mx-auto flex items-center justify-between py-6 px-4 md:py-8 md:px-12 pointer-events-auto">
          
          {/* LEFT: Menu / Navigation */}
          <div className="flex-1 flex justify-start items-center gap-8">
            {/* Mobile/Desktop Hamburger Menu */}
            <button className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white bg-white flex items-center justify-center transition-all duration-500 hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] hover:scale-110 active:scale-95">
              <div className="flex flex-col gap-1 md:gap-1.5 items-center justify-center w-4 md:w-5">
                <span className="w-full h-[1.5px] bg-black rounded-full" />
                <span className="w-2/3 h-[1.5px] bg-black rounded-full self-start" />
              </div>
            </button>
            
            {/* Desktop Full Navigation (Optional, currently hidden to match minimal style, can uncomment if needed) */}
            {/* <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id.toLowerCase()}`}
                  className={`nav-link ${activeTab === item.id ? 'nav-link-active' : ''}`}
                >
                  {item.label}
                  {activeTab === item.id && <div className="active-indicator" />}
                </a>
              ))}
            </div> */}
          </div>

          {/* CENTER: Brand Icon */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <a href="/" className="hover:opacity-80 transition-opacity">
               <img src={headerImg} alt="yr media" className="h-10 md:h-16 w-auto object-contain" />
            </a>
          </div>

          {/* RIGHT: Contact Button  */}
          <div className="flex-1 flex justify-end items-center">
            {/* Desktop: Talk Button / Contact Us */}
            <button className="hidden md:flex px-6 py-2.5 rounded-full border border-white bg-white items-center gap-3 transition-all duration-500 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] hover:scale-105 active:scale-95">
              <span className="text-black text-sm font-semibold tracking-wide">Talk</span>
              <span className="w-6 h-6 rounded-full bg-black flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </button>
            {/* Mobile Empty space to keep logo centered perfectly */}
            <div className="md:hidden w-10"></div>
          </div>

        </nav>
      </header>
    </div>
  );
};

export default Header;
