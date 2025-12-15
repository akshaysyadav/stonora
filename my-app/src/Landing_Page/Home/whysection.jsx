import { useEffect, useRef } from "react";
import { whyStonoraPoints } from "@/data/constants";
import { X, Check } from "lucide-react";

const WhySection = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
  
    let index = 0;
    const total = whyStonoraPoints.length;
    const cards = slider.children;
  
    const getCardWidth = () => cards[0].offsetWidth + 16;
  
    slider.style.scrollBehavior = "smooth";
  
    const interval = setInterval(() => {
      const cardWidth = getCardWidth();
      index++;
  
      slider.scrollTo({
        left: cardWidth * index,
      });
  
      // 🔁 Reset smoothly (invisible jump)
      if (index >= total) {
        requestAnimationFrame(() => {
          slider.style.scrollBehavior = "auto";
          index = 0;
          slider.scrollLeft = 0;
  
          requestAnimationFrame(() => {
            slider.style.scrollBehavior = "smooth";
          });
        });
      }
    }, 3000);
  
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="py-20 bg-[#0C3024]">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-[#D59E43]">
            Why Choose Stonora?
          </h2>
          <p className="text-gray-300 mt-2">
            We solve the problems that matter most to homeowners
          </p>
        </div>

        {/* ================= MOBILE SLIDER ================= */}
        <div
          ref={sliderRef}
          className="
            flex
            overflow-x-auto
            snap-x snap-mandatory
            scrollbar-none
            md:hidden
            px-4
            space-x-4
          "
        >
          {[...whyStonoraPoints, ...whyStonoraPoints].map((point, index) => (
            <div
              key={index}
              className="
                snap-center
                flex-shrink-0
                w-[70%]
                bg-[#103B2D]
                p-6
                rounded-xl
                border border-white/10
                shadow-md
              "
            >
              <div className="text-white">
                <div className="mb-5 text-center">
                  <point.icon className="w-12 h-12 mx-auto text-[#D59E43]" />
                </div>

                {/* Problem */}
                <div className="mb-4 pb-4 border-b border-white/10">
                  <div className="flex items-start gap-3">
                    <X size={18} className="text-red-500 mt-1" />
                    <div>
                      <p className="text-xs uppercase text-red-400 font-semibold mb-1">
                        Problem
                      </p>
                      <p className="text-[#D59E43] text-sm leading-relaxed">
                        {point.problem}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Solution */}
                <div className="flex items-start gap-3">
                  <Check size={18} className="text-[#D59E43] mt-1" />
                  <div>
                    <p className="text-xs uppercase text-[#D59E43] font-medium mb-1">
                      Our Solution
                    </p>
                    <p className="text-[#D59E43] font-medium text-sm leading-relaxed">
                      {point.solution}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ================= DESKTOP GRID ================= */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {whyStonoraPoints.map((point, index) => (
            <div
              key={index}
              className="
                bg-[#0F3A2B]
                p-8
                rounded-xl
                border border-white/10
                shadow-md
                hover:shadow-lg
                transition-shadow
              "
            >
              <div className="text-white">
                <div className="text-center mb-6">
                  <point.icon className="w-14 h-14 mx-auto text-[#D59E43]" />
                </div>

                <div className="pb-6 mb-6 border-b border-white/10">
                  <div className="flex items-start gap-3">
                    <X size={18} className="text-red-500 mt-1" />
                    <div>
                      <p className="text-xs uppercase text-red-400 font-semibold">
                        Problem
                      </p>
                      <p className="text-[#D59E43] text-sm leading-relaxed">
                        {point.problem}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check size={18} className="text-[#D59E43] mt-1" />
                  <div>
                    <p className="text-xs uppercase text-[#D59E43] font-medium">
                      Our Solution
                    </p>
                    <p className="text-[#D59E43] font-medium text-sm leading-relaxed">
                      {point.solution}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhySection;
