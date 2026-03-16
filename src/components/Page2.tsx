import { useEffect, MouseEvent } from 'react';

// Reusable Check Icon Component for the features list
const CheckIcon = () => (
  <svg 
    className="feature-icon" 
    width="22" 
    height="22" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

export default function Page2() {
  // Setup Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-scroll');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Mouse move handler for the dynamic spotlight glow effect
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  const hourlyFeatures = [
    "1 Hour Shoot",
    "1 Edited Reel Delivered",
    "Shot on Latest iPhone",
    "Fast Delivery (10 mins post shoot)",
    "Trained and Certified Reel Maker",
    "Flashoot Branding Included"
  ];

  const halfDayFeatures = [
    "Up to 3 Hours Shoot",
    "2 Edited reels",
    "Shot on Latest iPhone",
    "Fast Delivery (10 mins post shoot)",
    "Trained and Certified Reel Maker",
    "Flashoot Branding Included"
  ];

  return (
    <>
      {/* Injecting all the raw CSS from the HTML version */}
      <style dangerouslySetInnerHTML={{__html: styles}} />

      <div className="pricing-wrapper">
        <div className="ambient-glow"></div>

        <section className="pricing-section">
          <div className="section-header animate-scroll">
            <h2 className="font-inter">Bestsellers</h2>
          </div>
          
          <div className="pricing-grid">
            
            {/* Hourly Plan (Silver Theme) */}
            <div 
              className="pricing-card card-silver animate-scroll delay-1"
              onMouseMove={handleMouseMove}
            >
              <div className="card-content">
                <div className="card-header">
                  <div className="plan-name">Hourly Plan</div>
                  <div className="plan-subtitle">Quickest Content</div>
                  <p className="plan-desc">Perfect for anyone who want a single, fast, high quality reel.</p>
                  
                  <div className="plan-price-wrapper">
                    <div className="plan-price"><span className="amount">₹1,999</span></div>
                  </div>
                  <div className="plan-gst">+ GST</div>
                </div>

                <div className="whats-included">What's Included</div>
                
                <ul className="features">
                  {hourlyFeatures.map((feature, idx) => (
                    <li key={idx}>
                      <CheckIcon />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="btn btn-silver">Book Hourly Plan</button>
              </div>
            </div>

            {/* Half-Day Plan (Gold Theme) */}
            <div 
              className="pricing-card card-gold animate-scroll delay-2"
              onMouseMove={handleMouseMove}
            >
              <div className="card-content">
                <div className="card-header">
                  <div className="plan-name">Half-Day Plan</div>
                  <div className="plan-subtitle">Event Essential</div>
                  <p className="plan-desc">Ideal for events and creators who need more time and more content.</p>
                  
                  <div className="plan-price-wrapper">
                    <div className="plan-price"><span className="amount">₹4,999</span></div>
                  </div>
                  <div className="plan-gst">+ GST</div>
                </div>

                <div className="whats-included">What's Included</div>
                
                <ul className="features">
                  {halfDayFeatures.map((feature, idx) => (
                    <li key={idx}>
                      <CheckIcon />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="btn btn-gold">Book Half-Day Plan</button>
              </div>
            </div>

          </div>
        </section>
      </div>
    </>
  );
}

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

  :root {
    --bg: #050101;
    --text-main: #FFFFFF;
    --text-muted: #A0A0A0;
    --card-bg: rgba(255, 255, 255, 0.02);
    --card-border: rgba(255, 255, 255, 0.06);
    
    --silver-light: #F5F7FA;
    --silver-main: #C3CFD9;
    --silver-dark: #8797A6;
    --silver-glow: rgba(195, 207, 217, 0.2);
    
    --gold-light: #FFF4D0;
    --gold-main: #FADB5F;
    --gold-dark: #D4AF37;
    --gold-glow: rgba(250, 219, 95, 0.3);
    
    --brand-orange: #FC8019; /* Swiggy Orange */
    --brand-yellow: #FACC15;
    
    --transition: 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  }

  /* Scoped wrapper for the component background */
  .pricing-wrapper {
    background-color: var(--bg);
    color: var(--text-main);
    font-family: 'Space Grotesk', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
    position: relative;
    transform-origin: top center;
    padding-bottom: 0px; /* Removed bottom space */
  }

  .font-inter {
    font-family: 'Inter', sans-serif;
  }

  .ambient-glow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100vw;
    height: 100vh;
    background: radial-gradient(circle at 30% 50%, rgba(239, 68, 68, 0.03) 0%, transparent 40%),
                radial-gradient(circle at 70% 50%, rgba(250, 219, 95, 0.04) 0%, transparent 50%);
    filter: blur(80px);
    z-index: 0;
    pointer-events: none;
  }

  .pricing-section {
    width: 100%;
    max-width: 1200px;
    padding: 60px 24px;
    position: relative;
    z-index: 1;
    margin-bottom: 0px; 
  }

  .section-header {
    text-align: center;
    margin-bottom: 60px;
  }

  .section-header h2 {
    font-size: 3rem;
    font-weight: 900; /* Matching font-black */
    text-transform: uppercase;
    color: var(--text-main);
    letter-spacing: -0.05em; /* Tighter tracking like Page 1 */
    margin: 0;
    line-height: 1.1;
  }

  .pricing-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
    max-width: 900px;
    margin: 0 auto;
    align-items: stretch;
  }

  .pricing-card {
    background: linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid var(--card-border);
    border-radius: 24px;
    padding: 48px 40px;
    position: relative;
    transition: transform var(--transition), box-shadow var(--transition), border-color var(--transition);
    display: flex;
    flex-direction: column;
    height: 100%;
    text-align: left;
  }

  .pricing-card::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: radial-gradient(
        800px circle at var(--mouse-x, 0px) var(--mouse-y, 0px),
        var(--spotlight-color, rgba(255, 255, 255, 0.05)),
        transparent 40%
    );
    z-index: 0;
    opacity: 0;
    transition: opacity 0.5s ease;
    pointer-events: none;
  }

  .pricing-card:hover::before {
    opacity: 1;
  }

  .card-silver {
    --spotlight-color: rgba(195, 207, 217, 0.08);
  }
  
  .card-silver:hover {
    transform: translateY(-8px);
    border-color: rgba(195, 207, 217, 0.3);
    box-shadow: 0 24px 48px rgba(0, 0, 0, 0.5), 
                0 0 40px var(--silver-glow);
  }

  .card-gold {
    --spotlight-color: rgba(250, 219, 95, 0.12);
    border: 1px solid rgba(250, 219, 95, 0.25);
    transform: scale(1.03);
    background: linear-gradient(180deg, rgba(250, 219, 95, 0.04) 0%, rgba(255,255,255,0.01) 100%);
    box-shadow: 0 12px 32px rgba(0,0,0,0.5), 0 0 30px rgba(250, 219, 95, 0.08);
    z-index: 2;
  }
  
  .card-gold:hover {
    transform: translateY(-8px) scale(1.04);
    border-color: rgba(250, 219, 95, 0.6);
    box-shadow: 0 32px 64px rgba(0, 0, 0, 0.6), 
                0 0 60px var(--gold-glow);
  }

  .card-content {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .card-header {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .plan-name {
    font-size: 2.25rem;
    font-weight: 500;
    margin-bottom: 8px;
    letter-spacing: -0.02em;
  }

  .plan-subtitle {
    font-size: 0.95rem;
    font-weight: 600;
    margin-bottom: 20px;
    letter-spacing: 0.02em;
  }
  
  .card-silver .plan-subtitle { color: var(--brand-orange); }
  .card-gold .plan-subtitle { color: var(--brand-orange); }

  .plan-desc {
    font-size: 1.05rem;
    color: var(--text-muted);
    margin-bottom: 24px;
    line-height: 1.5;
    max-width: 90%;
    min-height: 48px;
    margin-top: 0;
  }

  .plan-price-wrapper {
    margin-bottom: 4px;
  }

  .plan-price .amount {
    font-size: 4.5rem;
    font-weight: 700;
    letter-spacing: -0.04em;
    line-height: 1;
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradientMove 4s linear infinite;
  }

  .card-silver .plan-price .amount {
    background-image: linear-gradient(to right, #C3CFD9 0%, #F5F7FA 25%, #8797A6 50%, #F5F7FA 75%, #C3CFD9 100%);
  }

  .card-gold .plan-price .amount {
    background-image: linear-gradient(to right, #F5F7FA 0%, #D4AF37 25%, #8797A6 50%, #D4AF37 75%, #F5F7FA 100%);
  }

  @keyframes gradientMove {
    0% { background-position: 0% center; }
    100% { background-position: 200% center; }
  }

  .plan-gst {
    font-size: 0.8rem;
    font-weight: 400;
    color: var(--text-muted);
    letter-spacing: 0.05em;
  }

  .whats-included {
    width: 100%;
    border-top: 1px solid var(--card-border);
    margin: 40px 0 24px;
    padding-top: 24px;
    text-align: center;
    font-size: 0.8rem;
    font-weight: 600;
    color: rgba(252, 128, 25, 0.8); /* Swiggy Orange */
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-family: 'Inter', sans-serif;
  }

  .features {
    list-style: none;
    margin-bottom: 40px;
    flex-grow: 1;
    width: 100%;
    padding: 0;
  }

  .features li {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 20px;
    font-size: 1.05rem;
    color: #E2E8F0;
    line-height: 1.4;
    font-weight: 500;
    font-family: 'Inter', sans-serif;
  }

  .feature-icon {
    flex-shrink: 0;
    color: var(--brand-orange); /* Swiggy Orange */
  }

  .btn {
    width: 100%;
    padding: 18px 24px;
    border-radius: 14px;
    border: none;
    font-family: inherit;
    font-size: 1.05rem;
    font-weight: 600;
    cursor: pointer;
    transition: all var(--transition);
    text-align: center;
    position: relative;
    overflow: hidden;
    letter-spacing: 0.02em;
  }

  .btn-silver {
    background: linear-gradient(135deg, var(--silver-light), var(--silver-dark));
    color: #000;
    box-shadow: 0 4px 16px rgba(195, 207, 217, 0.15);
  }

  .btn-silver:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(195, 207, 217, 0.3);
    filter: brightness(1.1);
  }

  .btn-gold {
    background: linear-gradient(135deg, var(--gold-light), var(--gold-main));
    color: #000;
    box-shadow: 0 4px 20px rgba(250, 219, 95, 0.25);
  }

  .btn-gold:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(250, 219, 95, 0.4);
    filter: brightness(1.1);
  }

  .animate-scroll {
    opacity: 0;
    transform: translateY(40px) scale(0.95);
    transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), 
                transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .animate-scroll.is-visible {
    opacity: 1;
    transform: translateY(0) scale(1);
  }

  .card-gold.animate-scroll.is-visible {
    transform: translateY(0) scale(1.03);
  }

  .delay-1 { transition-delay: 0.1s; }
  .delay-2 { transition-delay: 0.2s; }

  @media (max-width: 900px) {
    .pricing-wrapper {
      min-height: auto;
      padding-bottom: 40px;
    }
    .pricing-section {
      padding: 0px 10px; /* Kept very tight */
      margin-bottom: 0px;
    }
    .section-header h2 {
      font-size: 2.5rem; /* Better scaling for mobile */
    }
    .pricing-grid {
      grid-template-columns: 1fr;
      max-width: 480px;
      gap: 40px;
    }
    .card-gold {
      transform: scale(1);
    }
    .card-gold.animate-scroll.is-visible {
      transform: translateY(0) scale(1);
    }
    .card-gold:hover {
      transform: translateY(-8px) scale(1.02);
    }
    .delay-2 { transition-delay: 0.1s; }
  }

  @media (max-width: 480px) {
    .pricing-card {
      padding: 40px 24px;
    }
    .plan-name {
      font-size: 2rem;
    }
    .plan-price .amount {
      font-size: 3.8rem;
    }
    .features li {
      font-size: 0.95rem;
    }
  }
`;