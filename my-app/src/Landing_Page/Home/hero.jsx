import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative h-[90vh] min-h-[520px] w-full overflow-hidden">
      
      {/* Background Image */}
      <img
        src="/media/cleaning.png"
        alt="Professional home services by Stonora"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative h-full flex items-end">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 pb-12 sm:pb-16">
          
          <div className="max-w-2xl text-white">
            
            {/* Heading */}
            <h1 className="
              text-3xl 
              sm:text-4xl 
              md:text-6xl 
              font-bold 
              leading-tight 
              mb-3 sm:mb-4
            ">
              Trusted Home Services,
              <br />
              <span className="text-[#D59E43]">Just One Tap Away</span>
            </h1>

            {/* Description */}
            <p className="
              text-base 
              sm:text-lg 
              md:text-xl 
              text-white/90 
              mb-6 sm:mb-8
            ">
              Cleaning, Plumbing, Pest Control & more — verified professionals
              at affordable prices.
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
                Subscribe Now
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
    </section>
  );
};

export default Hero;
