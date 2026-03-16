import React from 'react';

export default function Marquee() {
  const itemsCount = 6; // Reduced repetitions per track since the text is longer
  const textContent = "Your Reel. Shot by Professionals. Edited Instantly. Delivered in 10 Minutes.";
  
  // Create an array to map over for the repeating content
  const repeatedItems = Array(itemsCount).fill(textContent);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Space+Grotesk:wght@600;700;800&family=Inter:wght@400;500;600&display=swap');
        
        .font-impact {
            font-family: 'Anton', sans-serif;
            letter-spacing: 0.03em;
        }

        @keyframes marquee {
            0% { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(-100%, 0, 0); }
        }

        .animate-marquee {
            animation: marquee 60s linear infinite;
            will-change: transform;
        }

        @keyframes noise {
            0%, 100% { transform: translate(0, 0); }
            10% { transform: translate(-1%, -1%); }
            20% { transform: translate(1%, 1%); }
            30% { transform: translate(-2%, -2%); }
            40% { transform: translate(2%, -1%); }
            50% { transform: translate(-1%, 2%); }
            60% { transform: translate(1%, -2%); }
            70% { transform: translate(-2%, 1%); }
            80% { transform: translate(2%, 2%); }
            90% { transform: translate(-1%, -1%); }
        }

        .bg-noise {
            background-image: url('data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)"/%3E%3C/svg%3E');
            animation: noise 0.4s infinite steps(2);
        }
      `}</style>
      
      <div className="marquee-container relative flex w-full h-[50px] md:h-[60px] bg-white overflow-hidden items-center border-y-[3px] border-[#FC8019] shadow-[0_4px_15px_rgba(252,128,25,0.2),0_-4px_15px_rgba(252,128,25,0.2),inset_0_4px_8px_rgba(252,128,25,0.15),inset_0_-4px_8px_rgba(252,128,25,0.15)] z-20">
        
        {/* Subtle Animated Noise Texture Overlay */}
        <div className="absolute inset-[-100%] z-0 opacity-[0.04] bg-noise pointer-events-none mix-blend-multiply will-change-transform"></div>

        {/* Marquee Track Wrapper */}
        <div className="flex whitespace-nowrap z-10 w-full relative">
          
          {/* Track 1 */}
          <div className="flex animate-marquee shrink-0 items-center">
            {repeatedItems.map((text, i) => (
              <React.Fragment key={`track1-${i}`}>
                <span className="text-[#151515] font-impact text-2xl md:text-3xl uppercase mx-6 md:mx-8 antialiased pt-1 md:pt-1.5">
                  {text}
                </span>
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#151515] mx-2 shrink-0"></div>
              </React.Fragment>
            ))}
          </div>

          {/* Track 2 (Duplicate for seamless infinite scroll illusion) */}
          <div className="flex animate-marquee shrink-0 items-center" aria-hidden="true">
            {repeatedItems.map((text, i) => (
              <React.Fragment key={`track2-${i}`}>
                <span className="text-[#151515] font-impact text-2xl md:text-3xl uppercase mx-6 md:mx-8 antialiased pt-1 md:pt-1.5">
                  {text}
                </span>
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#151515] mx-2 shrink-0"></div>
              </React.Fragment>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}
