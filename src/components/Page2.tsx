

// Defining types for our pricing plan data
interface PlanFeature {
  name: string;
}

interface PricingPlan {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  price: string;
  isPopular?: boolean;
  features: PlanFeature[];
}

const pricingData: PricingPlan[] = [
  {
    id: 'hourly-plan',
    title: 'Hourly Plan',
    subtitle: 'Quickest Content',
    description: 'Perfect for anyone who wants a single, fast, high-quality reel.',
    price: '1,999',
    features: [
      { name: '1 Hour Shoot' },
      { name: '1 Edited Reel Delivered' },
      { name: 'Shot on Latest iPhone' },
      { name: 'Fast Delivery (10 mins post shoot)' },
      { name: 'Trained and Certified Reel Maker' },
      { name: 'Flashoot Branding Included' },
    ],
  },
  {
    id: 'half-day-plan',
    title: 'Half-Day Plan',
    subtitle: 'Event Essential',
    description: 'Ideal for events and creators who need more time and more content.',
    price: '4,999',
    isPopular: true,
    features: [
      { name: 'Up to 3 Hours Shoot' },
      { name: '2 Edited reels' },
      { name: 'Shot on Latest iPhone' },
      { name: 'Fast Delivery (10 mins post shoot)' },
      { name: 'Trained and Certified Reel Maker' },
      { name: 'Flashoot Branding Included' },
    ],
  },
];

// Reusable Check Icon Component with a subtle refined glow
const CheckIcon = () => (
  <svg 
    className="w-4 h-4 text-[#fc8019] shrink-0 mt-0.5 drop-shadow-[0_0_4px_rgba(252,128,25,0.4)]" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor" 
    strokeWidth={2.5}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export default function App() {
  return (
    <>
      {/* Injecting Inter Font for the premium typography feel */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
          .font-inter { font-family: 'Inter', sans-serif; }
        `}
      </style>

      {/* Pure black premium background */}
      <section className="relative min-h-screen bg-black font-inter py-8 sm:py-10 md:py-12 px-3 sm:px-4 flex items-center justify-center z-0">
        
        <div className="max-w-4xl w-full mx-auto z-10">
          
          {/* Section Header */}
          <div className="text-center mb-8 md:mb-12 relative px-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight drop-shadow-sm">
              Bestsellers
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#fc8019] to-[#ff9f43] mx-auto mt-3 md:mt-4 rounded-full shadow-[0_0_10px_rgba(252,128,25,0.5)]"></div>
          </div>

          {/* Pricing Cards Grid Container with central focused glow */}
          <div className="relative max-w-3xl mx-auto pt-2">
            
            {/* Small orange blur specifically behind the 2 cards */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] md:w-[350px] h-[250px] md:h-[350px] bg-[#fc8019] rounded-full filter blur-[100px] md:blur-[130px] opacity-25 md:opacity-30 -z-10 pointer-events-none"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
              {pricingData.map((plan) => (
                <div 
                  key={plan.id}
                  className="relative bg-gradient-to-b from-white/[0.04] to-transparent backdrop-blur-xl border border-white/[0.08] rounded-3xl shadow-2xl hover:border-[#fc8019]/40 hover:shadow-[0_0_40px_-15px_rgba(252,128,25,0.2)] transition-all duration-500 hover:-translate-y-2 flex flex-col group"
                >
                  {/* Top Border Accent - Rounded to match card */}
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#fc8019] to-[#ff9f43] rounded-t-3xl opacity-80 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_15px_rgba(252,128,25,0.4)]"></div>

                {/* Popular Badge - Scaled down slightly */}
                {plan.isPopular && (
                  <div className="absolute -top-2.5 md:-top-3 right-4 md:right-6 bg-gradient-to-r from-[#fc8019] to-[#ff9f43] text-white text-[9px] md:text-[10px] font-bold px-3 md:px-4 py-1 md:py-1.5 rounded-full uppercase tracking-widest shadow-[0_4px_12px_-2px_rgba(252,128,25,0.6)] z-20">
                    Most Popular
                  </div>
                )}

                {/* Reduced padding for smaller cards */}
                <div className="p-5 sm:p-6 md:p-8 flex flex-col h-full relative z-10">
                  
                  {/* Card Header */}
                  <div className="text-center mb-5 md:mb-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 md:mb-1.5 tracking-wide">
                      {plan.title}
                    </h3>
                    <p className="text-[#fc8019] text-[10px] md:text-[11px] font-bold tracking-widest uppercase mb-2 md:mb-3 drop-shadow-[0_0_4px_rgba(252,128,25,0.3)]">
                      {plan.subtitle}
                    </p>
                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed px-0 md:px-1 min-h-[35px] md:min-h-[40px]">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price Section - Scaled text down */}
                  <div className="text-center mb-6 md:mb-8">
                    <div className="flex items-start justify-center text-white">
                      <span className="text-xl md:text-2xl font-bold mt-0.5 md:mt-1 mr-0.5 md:mr-1 text-[#fc8019]">₹</span>
                      <span className="text-4xl md:text-5xl font-extrabold tracking-tight">
                        {plan.price}
                      </span>
                    </div>
                    <span className="text-gray-500 text-[10px] md:text-xs font-semibold mt-1 md:mt-1.5 inline-block uppercase tracking-wider">
                      + GST
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6 md:mb-8 relative flex justify-center items-center">
                    <span className="bg-black border border-white/[0.08] px-2.5 md:px-3 py-0.5 md:py-1 rounded-full text-[8px] md:text-[9px] font-bold text-gray-500 tracking-widest uppercase absolute">
                      What's Included
                    </span>
                  </div>

                  {/* Features List - With Premium Hover Glow Effect */}
                  <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8 flex-1 px-0 md:px-1">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2.5 md:gap-3 group/feature cursor-default">
                        <CheckIcon />
                        <span className="text-gray-300 font-medium text-[11px] sm:text-xs md:text-sm transition-all duration-300 group-hover/feature:text-white group-hover/feature:drop-shadow-[0_0_10px_rgba(252,128,25,0.8)] group-hover/feature:translate-x-1 block leading-tight">
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Action Button - Scaled down padding and text */}
                  <button className="w-full py-2.5 md:py-3 px-4 md:px-5 rounded-xl font-bold text-white bg-gradient-to-r from-[#fc8019] to-[#ff9f43] hover:from-[#ff9f43] hover:to-[#fc8019] transition-all duration-300 shadow-[0_8px_20px_-6px_rgba(252,128,25,0.5)] hover:shadow-[0_12px_25px_-6px_rgba(252,128,25,0.7)] flex justify-center items-center gap-2 group/btn mt-auto">
                    <span className="opacity-90 font-medium text-sm md:text-base">₹</span>
                    <span className="tracking-wide text-xs md:text-sm">Book Now</span>
                    <svg 
                      className="w-4 h-4 ml-0.5 transform group-hover/btn:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor" 
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>

                </div>
              </div>
            ))}
            </div>
          </div>

        </div>
      </section>

      {/* Curved Wave Bottom */}
      <div className="relative w-full bg-black">
        <svg 
          viewBox="0 0 1440 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto block"
          preserveAspectRatio="none"
        >
          <path 
            d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z" 
            fill="#050505"
          />
        </svg>
      </div>
    </>
  );
}