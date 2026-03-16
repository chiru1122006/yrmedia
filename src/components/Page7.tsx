import React, { useState } from 'react';

/**
 * Interface for FAQ Item data
 */
interface FAQItemData {
  id: number;
  question: string;
  answer: string;
}

/**
 * FAQ Item Component
 * Handles the individual accordion logic and animations
 */
const FAQItem: React.FC<{ 
  item: FAQItemData; 
  isOpen: boolean; 
  onToggle: () => void 
}> = ({ item, isOpen, onToggle }) => {
  return (
    <div 
      className={`faq-item bg-[#0a0a0a] border border-white/5 rounded-2xl transition-all duration-300 ${
        isOpen ? 'border-[#fc8019]/40 bg-[#0f0f0f] shadow-[0_0_15px_rgba(252,128,25,0.1)]' : 'hover:border-white/10'
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full py-6 px-6 sm:px-8 flex justify-between items-center cursor-pointer gap-4 text-left focus:outline-none"
        aria-expanded={isOpen}
      >
        <h2 className={`text-lg sm:text-xl font-bold uppercase tracking-wide flex-1 transition-colors ${isOpen ? 'text-[#fc8019]' : 'text-white'}`}>
          {item.question}
        </h2>
        <div className={`flex items-center justify-center w-8 h-8 rounded-full transition-colors ${isOpen ? 'bg-[#fc8019]/20 text-[#fc8019]' : 'bg-white/5 text-white'}`}>
          <svg 
            className={`w-4 h-4 flex-shrink-0 transition-transform duration-300 ease-in-out ${
              isOpen ? 'rotate-180' : 'rotate-0'
            }`}
            fill="none" 
            viewBox="0 0 12 8" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M1 1L6 6.02161L11 1" 
              stroke="currentColor" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2"
            />
          </svg>
        </div>
      </button>
      
      <div 
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 sm:px-8 pb-8 pt-2 transform transition-transform duration-300 translate-y-0 text-gray-400 text-base sm:text-lg font-light leading-relaxed">
            <p>
              {item.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Main Page7 Component
 */
export default function Page7() {
  const [openId, setOpenId] = useState<number | null>(null);

  const faqData: FAQItemData[] = [
    {
      id: 1,
      question: "10-Minute Process",
      answer: "Arrive at our location, shoot with professionals using proven templates, and get your fully edited reel delivered in just 10 minutes."
    },
    {
      id: 2,
      question: "Instant Editing & Delivery",
      answer: "We understand your brand goals and craft a unique concept with instant color-grading and dynamic pacing delivered straight to your phone."
    },
    {
      id: 3,
      question: "Professional Creators",
      answer: "Pair exclusively with trained videographers who know how to light, frame, and cut high-performing social media content that stops the scroll."
    },
    {
      id: 4,
      question: "High-End Equipment",
      answer: "We use cinematic mirrorless cameras, studio lighting, and high-fidelity microphones to ensure your content looks and sounds premium."
    },
    {
      id: 5,
      question: "Beginner Friendly",
      answer: "No camera experience needed. Our directors guide you step-by-step on poses and delivery so you look like an absolute pro."
    }
  ];

  const handleToggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-black text-white antialiased selection:bg-[#fc8019] selection:text-white font-sans">
      <div className="max-w-[700px] mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8">
        
        {/* Main Header */}
        <header className="text-center mb-12">
          <p className="text-[#fc8019] font-bold uppercase tracking-widest text-sm mb-2">Got Questions?</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter leading-[1.1] md:leading-[1.1] mb-4">
            Frequently Asked <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fc8019] to-[#ff4d4d]">
              Questions
            </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
            Everything you need to know about becoming a yr median.
          </p>
        </header>

        {/* FAQ List Container */}
        <section className="space-y-3" aria-label="Frequently Asked Questions">
          {faqData.map((item) => (
            <FAQItem 
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => handleToggle(item.id)}
            />
          ))}
        </section>
      </div>
    </div>
  );
}