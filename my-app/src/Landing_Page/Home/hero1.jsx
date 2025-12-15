import { useEffect, useState } from "react";
import { heroSlides } from "@/data/constants";
import { useNavigate } from "react-router-dom";

const Hero1 = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[90vh] min-h-[520px] w-full overflow-hidden">
      
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}          
        >
          {/* Background Image */}
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          {/* Content */}
          <div className="relative h-full flex items-end">
            <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 pb-12 sm:pb-16">
              
              <div className="max-w-2xl text-white">

                {/* Heading */}
                <h1
                  className="
                    text-3xl
                    text-[#D59E43]
                    sm:text-4xl
                    md:text-6xl
                    font-bold
                    leading-tight
                    mb-3 sm:mb-4
                  "
                >
                  {slide.title}
                </h1>

                {/* Subtitle */}
                <p
                  className="
                    text-base
                    sm:text-lg
                    md:text-xl
                    text-white/90
                    mb-6 sm:mb-8
                  "
                >
                  {slide.subtitle}
                </p>

                {/* Buttons */}
                <div className="flex gap-3 sm:gap-4 flex-wrap">
                  <button
                    className="
                      px-6 py-2.5
                      sm:px-8 sm:py-3
                      text-base sm:text-lg
                      rounded-xl
                      bg-[#D59E43]
                      text-white
                      hover:bg-[#C6922E]
                      transition
                    "
                    onClick={() => navigate("/login")}
                  >
                    {slide.cta || "Subscribe Now"}
                  </button>

                  <button
                    className="
                      px-6 py-2.5
                      sm:px-8 sm:py-3
                      text-base sm:text-lg
                      rounded-xl
                      border border-white
                      text-white
                      hover:bg-white
                      hover:text-black
                      transition
                    "
                  >
                    Explore Services
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Dots Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all ${
              current === index ? "w-6 bg-white" : "w-2 bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </section>
  );
};

export default Hero1;
