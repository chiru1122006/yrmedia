
import { useEffect, useRef } from 'react';
import mainImg from '../images/main.jpeg';

export default function Page3() {
    const cardRef = useRef<HTMLDivElement>(null);
    const row1Ref = useRef<HTMLDivElement>(null);
    const row2Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let animationFrameId: number;
        // Variables for smooth interpolation (lerping)
        let currentTextScroll = window.scrollY;
        let currentProgress = 0;

        const renderLoop = () => {
            const scrollY = window.scrollY;
            
            // --- Smooth Background Text Scroll Logic ---
            // Interpolate the text scroll value towards the actual scroll position
            currentTextScroll += (scrollY - currentTextScroll) * 0.08;

            if (row1Ref.current) {
                // Top row moves left smoothly
                row1Ref.current.style.transform = `translateX(${currentTextScroll * -0.8}px)`;
            }
            
            if (row2Ref.current) {
                // Bottom row moves right smoothly
                // We start with a large negative offset (-4000px) so it can comfortably move right
                row2Ref.current.style.transform = `translateX(calc(-4000px + ${currentTextScroll * 0.8}px))`;
            }

            // --- Smooth 3D Card Animation Logic ---
            if (cardRef.current) {
                const rect = cardRef.current.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                
                const elementCenter = rect.top + rect.height / 2;
                const startY = windowHeight + (rect.height / 2);
                const endY = windowHeight / 2;
                
                // Calculate the target progress based on exact scroll position
                let targetProgress = (startY - elementCenter) / (startY - endY);
                targetProgress = Math.max(0, Math.min(1, targetProgress));
                
                // Interpolate the progress for a buttery smooth 3D unfolding effect
                currentProgress += (targetProgress - currentProgress) * 0.1;
                
                const rotateX = -45 * (1 - currentProgress);
                const scale = 0.85 + (0.15 * currentProgress);
                const translateY = 60 * (1 - currentProgress);
                
                cardRef.current.style.transform = `translateY(${translateY}px) scale(${scale}) rotateX(${rotateX}deg)`;
            }

            // Keep the loop running for continuous 60fps smoothness
            animationFrameId = requestAnimationFrame(renderLoop);
        };

        // Start the animation loop
        renderLoop();

        // Cleanup on unmount
        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    return (
        <div className="antialiased min-h-screen relative font-sans text-white bg-black overflow-x-hidden">
            <style dangerouslySetInnerHTML={{__html: `
                @import url('https://fonts.googleapis.com/css2?family=Covered+By+Your+Grace&family=Funnel+Display:wght@400;500;700;800&family=Plus+Jakarta+Sans:wght@300;400;500&display=swap');
                
                .font-funnel {
                    font-family: 'Funnel Display', sans-serif;
                }
                
                .font-covered {
                    font-family: 'Covered By Your Grace', cursive;
                }

                .font-subheading {
                    font-family: 'Plus Jakarta Sans', sans-serif;
                }
                
                .text-colorfull {
                    background-image: linear-gradient(to right, #FC8019, #FF9F54, #E36D00, #FC8019);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-size: 300% 100%;
                }

                .animate-gradient-x {
                    animation: gradient-x 3s ease-in-out infinite;
                }

                @keyframes gradient-x {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }

                .tracking-custom {
                    letter-spacing: 5px;
                }

                .media-style {
                    letter-spacing: -0.04em;
                    line-height: 1.1;
                    transform: skew(-8deg, -4deg);
                    display: inline-block;
                    padding-top: 0.1em;
                }

                /* Scrolling Text Background Styles */
                .scrolling-wrapper {
                    position: absolute;
                    top: 10%;
                    left: 0;
                    width: 100vw;
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                    z-index: 0;
                    overflow: hidden;
                    pointer-events: none;
                    user-select: none;
                    /* Fades the extreme left and right edges nicely */
                    -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
                    mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
                }

                .scroll-row {
                    display: flex;
                    width: max-content;
                    will-change: transform;
                }

                .bg-txt {
                    font-size: clamp(4rem, 9vw, 9rem);
                    font-weight: 800;
                    text-transform: uppercase;
                    /* Highly visible Swiggy orange */
                    color: #fc8019; 
                    opacity: 0.85;
                    padding: 0 2rem;
                    letter-spacing: -0.03em;
                    line-height: 1;
                }

                .perspective-container {
                    perspective: 1500px;
                }
                
                #quote-card {
                    box-shadow: 0 40px 80px rgba(0, 0, 0, 0.4);
                    will-change: transform;
                    transform-origin: center center;
                }
            `}} />

            {/* Top Spacer - Decreased space at the top and pure black */}
            <div className="h-[30vh] w-full bg-black flex flex-col items-center justify-end pb-12">
                <p className="text-white/40 font-bold tracking-widest uppercase animate-bounce text-sm">Scroll Down ↓</p>
            </div>

            {/* Main Section - Pure black */}
            <section className="relative min-h-[100vh] w-full flex flex-col items-center pt-12 pb-32 bg-black">
                
                {/* Background Animated Text */}
                <div className="scrolling-wrapper">
                    {/* Top Row (Moves Left) */}
                    <div className="scroll-row" ref={row1Ref}>
                        {[...Array(12)].map((_, i) => (
                            <div key={`row1-${i}`} className="flex">
                                <div className="bg-txt">Strategic consultation</div>
                                <div className="bg-txt">Competitor analysis</div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Row (Moves Right) */}
                    <div className="scroll-row" ref={row2Ref}>
                        {[...Array(8)].map((_, i) => (
                            <div key={`row2-${i}`} className="flex">
                                <div className="bg-txt">Insight discovery</div>
                                <div className="bg-txt">Project planning</div>
                                <div className="bg-txt">UX Research</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Foreground Quote Card inside Perspective Container */}
                <div className="perspective-container relative z-10 w-full max-w-[640px] px-4 mt-20">
                    <div id="quote-card" ref={cardRef} className="bg-white rounded-[1.5rem] md:rounded-[2rem] p-8 md:p-12 transform-gpu">
                        
                        <div className="flex flex-col gap-6 md:gap-8">
                            {/* Quote Icon */}
                            <div className="text-[#5D3FD3] font-serif text-5xl md:text-6xl leading-none font-bold">
                                “
                            </div>
                            
                            {/* Quote Text */}
                            <h2 className="text-black text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight leading-[1.3] md:leading-snug">
                                Our reel production is built on speed, creativity, and real-time content strategy.
                            </h2>
                            
                            {/* Author Info */}
                            <div className="flex items-center gap-4 mt-2">
                                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#FFD700] overflow-hidden flex-shrink-0">
                                    <img 
                                        src={mainImg}
                                        alt="YR Media" 
                                        className="w-full h-full object-cover object-top"
                                        loading="lazy"
                                    />
                                </div>
                                
                                <div className="flex flex-col">
                                    <span className="text-black font-semibold text-lg md:text-xl">YR Media</span>
                                    <span className="text-gray-500 text-sm md:text-base">Founder & Creative Reel Director</span>
                                    <span className="text-[#fc8019] font-medium text-xs md:text-sm mt-0.5">10-Minute Reel Shooting Agency</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* New Text Section Below Card */}
                <div className="flex flex-col items-center text-center font-funnel z-10 w-full max-w-4xl mx-auto mt-32 mb-20 scale-90 sm:scale-100">
        
                    {/* LINE 1 */}
                    <h2 className="text-white font-[800] text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-custom leading-[0.85] m-0 whitespace-nowrap uppercase">
                        WE CREATE
                    </h2>
                    
                    {/* LINE 2 */}
                    <div className="relative text-white font-[800] text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-custom leading-[0.85] m-0 -mt-1 md:-mt-2 whitespace-nowrap flex items-center justify-center">
                        
                        <span 
                            className="font-covered media-style animate-gradient-x text-colorfull lowercase absolute pointer-events-none drop-shadow-xl"
                            style={{
                                fontSize: '3em',      
                                left: '-0.4em',         
                                top: '52%',             
                                transform: 'translateY(-50%) rotate(-7deg)', 
                                lineHeight: 1,
                                zIndex: 20,
                                filter: 'drop-shadow(0 6px 10px rgba(0,0,0,0.4))'
                            }}
                        >
                            more
                        </span>
                        
                        <span className="relative z-10 uppercase ml-36 sm:ml-44 md:ml-56">THAN</span>
                    </div>
                    
                    {/* LINE 3 */}
                    <h2 className="text-white font-[800] text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-custom leading-[0.85] m-0 mt-1 md:mt-0 whitespace-nowrap uppercase">
                        VIDEOS
                    </h2>

                    {/* SUBHEADING */}
                    <p className="font-subheading text-[#D7DFE9] text-sm sm:text-base md:text-lg lg:text-xl mt-8 md:mt-10 max-w-[90%] md:max-w-2xl font-[300] tracking-wide opacity-80 leading-relaxed">
                        We transform real-time moments into <span className="text-white font-[500]">cinematic reels</span> in under 10 minutes.
                    </p>
                    
                </div>
            </section>

            {/* Bottom Spacer - Pure black - Reduced for Page 4 visibility */}
            <div className="h-[10vh] w-full bg-black"></div>
        </div>
    );
}