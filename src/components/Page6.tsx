import React, { useState, useEffect, useRef, MouseEvent, TouchEvent } from 'react';

// --- Types ---
interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  feedback: string;
  avatar: string;
  gradient: string;
}

// --- Data ---
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Arjun Mehta",
    role: "Content Creator",
    quote: "INSTANT & PREMIUM REELS",
    feedback: "Absolutely loved the experience! The team shot my reel in just 10 minutes and edited it instantly on the spot. The quality looked like something from a professional studio. Highly recommend for anyone who wants quick and premium reels.",
    avatar: "https://i.pravatar.cc/150?u=11",
    gradient: "radial-gradient(94.21% 78.4% at 50% 29.91%, rgba(39,61,180,0.3), rgba(15,9,38,0.4))"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Influencer",
    quote: "FAST & PROFESSIONAL",
    feedback: "I was surprised by how fast and professional the service was. From shooting to editing, everything was done within minutes, and the reel looked amazing. Perfect for creators who want high-quality content quickly.",
    avatar: "https://i.pravatar.cc/150?u=12",
    gradient: "radial-gradient(84.35% 70.19% at 50% 38.11%, rgba(2,96,101,0.3), rgba(5,136,178,0.1))"
  },
  {
    id: 3,
    name: "Rahul Verma",
    role: "Digital Nomad",
    quote: "FASTEST REEL SERVICE",
    feedback: "This is the fastest reel service I’ve ever seen. The team captured everything perfectly and delivered a fully edited reel in minutes. It’s perfect for events, creators, and anyone who wants instant social media content.",
    avatar: "https://i.pravatar.cc/150?u=13",
    gradient: "radial-gradient(86.88% 75.47% at 50% 24.53%, rgba(82,48,145,0.3), rgba(26,11,51,0.14))"
  },
  {
    id: 4,
    name: "Sneha Reddy",
    role: "Lifestyle Blogger",
    quote: "GAME-CHANGING SERVICE",
    feedback: "Super smooth process! The creators were very skilled and knew exactly how to capture the best angles. In just 10 minutes, I had a reel ready to post on Instagram. Truly a game-changing service.",
    avatar: "https://i.pravatar.cc/150?u=14",
    gradient: "radial-gradient(90.35% 49.25% at 50% 59.06%, rgba(2,61,114,0.3), rgba(5,11,28,0.42))"
  },
  {
    id: 5,
    name: "Vikram Kapoor",
    role: "Entrepreneur",
    quote: "READY-TO-POST VIDEOS",
    feedback: "Professional creators, quick shooting, and instant editing — everything was handled perfectly. I walked in, got my reel shot, and walked out with a ready-to-post video.",
    avatar: "https://i.pravatar.cc/150?u=15",
    gradient: "radial-gradient(126.42% 76.6% at 50% 32.26%, rgba(84,95,102,0.3), rgba(0,36,69,0.13))"
  }
];

export default function Page6() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [cardsPerView, setCardsPerView] = useState<number>(3);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  
  // Drag State
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  const maxIndex = Math.max(0, testimonials.length - cardsPerView);
  const totalDots = maxIndex + 1;

  // --- Responsive Layout ---
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let newCardsPerView = 3;
      if (width < 768) newCardsPerView = 1;
      else if (width < 1024) newCardsPerView = 2;

      setCardsPerView(newCardsPerView);
      setCurrentIndex(prev => Math.min(prev, testimonials.length - newCardsPerView));
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // --- Autoplay Logic ---
  useEffect(() => {
    if (isPaused || isDragging) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, isDragging, maxIndex]);

  // --- Dragging Handlers ---
  const handleStart = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
    setDragOffset(0);
  };

  const handleMove = (clientX: number) => {
    if (!isDragging) return;
    setDragOffset(clientX - startX);
  };

  const handleEnd = () => {
    if (!isDragging) return;
    
    if (Math.abs(dragOffset) > 100) {
      if (dragOffset > 0 && currentIndex > 0) {
        setCurrentIndex(prev => prev - 1);
      } else if (dragOffset < 0 && currentIndex < maxIndex) {
        setCurrentIndex(prev => prev + 1);
      }
    }
    
    setIsDragging(false);
    setDragOffset(0);
  };

  return (
    <div className="w-full relative overflow-hidden font-sans">
      <style>{`
        .testimonials-section {
          position: relative;
          width: 100%;
          padding: 80px 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .container {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .section-header { 
          text-align: center; 
          margin-bottom: 60px; 
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        
        .heading {
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: -0.05em;
          line-height: 1.1;
          font-size: clamp(1.8rem, 5vw, 3.5rem);
          color: #ffffff;
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .sub-heading {
          margin-top: 16px;
          font-size: clamp(0.9rem, 1.5vw, 1.1rem);
          color: rgba(255, 255, 255, 0.5);
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          text-align: center;
          font-weight: 400;
        }

        .text-colorful {
          background: linear-gradient(to right, #fc8019, #ff4d4d);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .carousel-container {
          position: relative;
          width: 100%;
          cursor: ${isDragging ? 'grabbing' : 'grab'};
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }

        .carousel-track {
          display: flex;
          gap: 20px;
          padding: 40px 0;
          transition: ${isDragging ? 'none' : 'transform 0.7s cubic-bezier(0.2, 0, 0, 1)'};
          transform: translateX(calc((var(--index) * -1 * (var(--card-width) + 20px)) + ${dragOffset}px));
          --card-width: 100%;
        }

        @media (min-width: 768px) { .carousel-track { --card-width: calc((100% - 20px) / 2); } }
        @media (min-width: 1024px) { .carousel-track { --card-width: calc((100% - 40px) / 3); } }

        .card-item {
          flex: 0 0 var(--card-width);
          min-width: 0;
          user-select: none;
        }

        .card {
          background-color: #0a0a0a;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 32px;
          height: 100%;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          transition: transform 0.4s ease, border-color 0.4s ease;
        }

        .card:hover {
          border-color: rgba(252, 128, 25, 0.3);
        }

        .star-rating {
          color: #fc8019;
          font-size: 0.9rem;
          margin-bottom: 12px;
          display: block;
        }

        .card-quote {
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: -0.02em;
          line-height: 1.1;
          font-size: 1.5rem;
          color: #ffffff;
          margin-bottom: 16px;
        }

        .card-feedback {
          font-size: 0.95rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 32px;
          flex-grow: 1;
          font-weight: 400;
        }

        .card-footer {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: auto;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 20px;
        }

        .avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          object-fit: cover;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .user-name {
          font-weight: 700;
          font-size: 0.9rem;
          color: #ffffff;
          display: block;
        }

        .user-role {
          font-size: 0.7rem;
          color: rgba(255, 255, 255, 0.4);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 40px;
        }

        .dot {
          width: 24px;
          height: 4px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dot.active {
          background: #fc8019;
          width: 40px;
        }
      `}</style>

      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2 className="heading">
              What Our Loving <br className="hidden sm:block" />
              <span className="text-colorful">Customers Say</span>
            </h2>
            <p className="sub-heading">
              Join thousands of satisfied customers who trust yrmedia and decrease the wait time for your content.
            </p>
          </div>

          <div 
            className="carousel-container"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => { setIsPaused(false); handleEnd(); }}
            onMouseDown={(e) => handleStart(e.pageX)}
            onMouseMove={(e) => handleMove(e.pageX)}
            onMouseUp={handleEnd}
            onTouchStart={(e) => handleStart(e.touches[0].pageX)}
            onTouchMove={(e) => handleMove(e.touches[0].pageX)}
            onTouchEnd={handleEnd}
          >
            <div 
              className="carousel-track" 
              style={{ '--index': currentIndex } as React.CSSProperties}
            >
              {testimonials.map((t) => (
                <div key={t.id} className="card-item">
                  <div 
                    className="card" 
                    style={{ backgroundImage: t.gradient }}
                  >
                    <span className="star-rating">⭐⭐⭐⭐⭐</span>
                    <h3 className="card-quote">{t.quote}</h3>
                    <p className="card-feedback">“{t.feedback}”</p>
                    
                    <div className="card-footer">
                      <img src={t.avatar} alt={t.name} className="avatar" />
                      <div>
                        <span className="user-name">— {t.name}</span>
                        <span className="user-role">{t.role}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="dots">
            {Array.from({ length: totalDots }).map((_, index) => (
              <div
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}