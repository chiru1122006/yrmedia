import Hero from './components/Hero';
import Header from './components/Header';
import PremiumMarqueeBar from './components/PremiumMarqueeBar';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page5 from './components/Page5';
import Page6 from './components/Page6';
import Page7 from './components/Page7';
import Footer from './components/Footer';
import { useLenis } from './hooks/useLenis';

function App() {
  useLenis();

  return (
    <div className="App relative">
      {/* Fixed Orange Gradient Background - ONLY visible behind Hero section */}
      <div 
        style={{
          position: 'fixed', 
          top: 0,
          left: 0,
          width: '100%', 
          height: '100vh',
          background: '#050505',
          zIndex: -2,
          pointerEvents: 'none'
        }}
      />
      
      {/* Fixed Radial Orange Glow - stays fixed while scrolling, only visible in hero area */}
      <div 
        style={{
          position: 'fixed', 
          top: '-20%', 
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%', 
          height: '80vh',
          backgroundImage: 'radial-gradient(ellipse 70% 70% at 50% 30%, rgba(204, 68, 0, 0.4) 0%, rgba(109, 36, 0, 0.2) 40%, transparent 70%)',
          filter: 'blur(100px)',
          zIndex: -1,
          pointerEvents: 'none'
        }}
      />
      
      {/* Content */}
      <Header />
      <div className="relative">
        {/* Hero Section with relative positioning */}
        <div className="relative">
          <Hero />
          {/* Smooth fade from Hero to Page1 */}
          <div 
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: '200px',
              background: 'linear-gradient(to bottom, transparent 0%, #050505 100%)',
              zIndex: 5,
              pointerEvents: 'none'
            }}
          />
        </div>
        
        {/* Smooth fade from Hero to Page1 */}
        <div style={{ background: '#050505', position: 'relative', zIndex: 10 }}>
          <PremiumMarqueeBar />
        </div>
        
        {/* Page1 with solid black background */}
        <div style={{ background: '#050505', position: 'relative', zIndex: 10 }}>
          <Page1 />
        </div>
        {/* Page2 with solid black background */}
        <div style={{ background: '#050505', position: 'relative', zIndex: 10 }}>
          <Page2 />
        </div>
        {/* Page3 with solid black background */}
        <div style={{ background: '#050505', position: 'relative', zIndex: 10 }}>
          <Page3 />
        </div>
        {/* Page5 with solid black background */}
        <div style={{ background: '#050505', position: 'relative', zIndex: 10 }}>
          <Page5 />
        </div>
        {/* Page6 with solid black background */}
        <div style={{ background: '#050505', position: 'relative', zIndex: 10 }}>
          <Page6 />
        </div>
        {/* Page7 with solid black background */}
        <div style={{ background: '#050505', position: 'relative', zIndex: 10 }}>
          <Page7 />
        </div>
        {/* Footer with solid black background */}
        <div style={{ background: '#050505', position: 'relative', zIndex: 10 }}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
