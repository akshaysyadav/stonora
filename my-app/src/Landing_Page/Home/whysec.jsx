import { whyStonoraPoints } from "@/data/constants";
import { X, Check } from "lucide-react";

const WhySec = () => {
  return (
    <section className="py-20 bg-[#0C3024]">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-2 text-[#D59E43]">
            Why Choose Stonora?
          </h2>
          <p className="text-lg text-gray-300">
            We solve the problems that matter most to homeowners
          </p>
        </div>

        {/* MOBILE STICKY STACK */}
        <div className="md:hidden relative">
          <div className="space-y-8 pb-20">
            {whyStonoraPoints.map((point, index) => (
              <div
                key={index}
                className={`
                  sticky top-20
                  z-${whyStonoraPoints.length - index}
                  bg-[#0F3A2C]
                  text-white
                  p-6
                  rounded-xl
                  border border-[#D59E43]/20
                  shadow-lg
                `}
              >
                <div className="mb-6 text-center">
                  <point.icon className="w-14 h-14 mx-auto text-[#D59E43]" />
                </div>

                {/* Problem */}
                <div className="mb-4 pb-4 border-b border-white/10">
                  <div className="flex items-start gap-3">
                    <X size={20} className="text-red-500" />
                    <div>
                      <p className="text-xs uppercase text-red-400 font-semibold mb-1">
                        Problem
                      </p>
                      <p className="text-[#D59E43]">{point.problem}</p>
                    </div>
                  </div>
                </div>

                {/* Solution */}
                <div className="flex items-start gap-3">
                  <Check size={20} className="text-[#D59E43]" />
                  <div>
                    <p className="text-xs uppercase text-[#D59E43] font-medium mb-1">
                      Our Solution
                    </p>
                    <p className="text-[#D59E43] font-semibold">{point.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DESKTOP GRID */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {whyStonoraPoints.map((point, index) => (
            <div
              key={index}
              className="bg-[#0F3A2C] text-white p-8 rounded-xl border border-[#D59E43]/20 shadow-xl"
            >
              <div className="text-center mb-6">
                <point.icon className="w-16 h-16 mx-auto text-[#D59E43]" />
              </div>

              <div className="pb-6 mb-6 border-b border-white/10">
                <div className="flex items-start gap-3">
                  <X size={20} className="text-red-500" />
                  <div>
                    <p className="text-xs uppercase text-red-400 font-semibold">
                      Problem
                    </p>
                    <p className="text-[#D59E43]">{point.problem}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check size={20} className="text-[#D59E43]" />
                <div>
                  <p className="text-xs uppercase text-[#D59E43] font-medium">
                    Our Solution
                  </p>
                  <p className="text-[#D59E43] font-semibold">{point.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhySec;
