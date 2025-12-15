import { services } from "@/data/constants";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const OurServices1 = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-[#0C3024]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#D59E43] mb-3">
            Our Services
          </h2>
          <p className="text-base text-[#D59E43]/75 max-w-2xl mx-auto">
            Everything you need for a hassle-free home, all in one subscription
          </p>
        </div>

        {/* Cards */}
        <div className="
          flex flex-col gap-8
          md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-10
        ">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="
                relative rounded-2xl p-7
                bg-[#0F3A2C]
                border border-[#D59E43]/20
                transition-all duration-300
                hover:-translate-y-2
                hover:border-[#D59E43]/50
                hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)]
                sticky md:static
              "
              style={{ top: `${80 + index * 16}px` }}
            >
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#D59E43]/10 rounded-bl-full" />

              {/* Title */}
              <h3 className="text-xl font-semibold text-[#D59E43] mb-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-base font-medium leading-relaxed text-[#D59E43]/70 mb-5">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <Check size={14} className="text-[#D59E43] mt-1 shrink-0" />
                    <span className="text-sm font-medium text-[#D59E43]/85">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Price */}
              <p className="text-lg font-semibold text-[#D59E43] mb-6">
                {service.price}
              </p>

              {/* CTA */}
              <button
                onClick={() => navigate("/services")}
                className="
                  px-5 py-2 text-sm font-medium rounded-md
                  border border-[#D59E43]/40
                  text-[#D59E43]
                  transition-all duration-300
                  hover:bg-[#D59E43]
                  hover:text-[#0C3024]
                "
              >
                Learn More
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurServices1;
