import React from 'react';
import { 
  HiOutlineDeviceMobile, 
  HiOutlineCode, 
  HiOutlineLightningBolt, 
  HiOutlineGlobeAlt 
} from 'react-icons/hi';

/**
 * Services Data 
 * Defines the specialty cards with icons, specific gradient colors, and professional tags.
 */
const servicesData = [
  {
    title: "Frontend Development",
    desc: "Crafting modern, scalable, and high-performance web applications using React and Tailwind.",
    icon: HiOutlineCode,
    tags: ["React", "Next.js", "Clean Code"],
    color: "from-blue-500 to-cyan-400",
    shadow: "shadow-blue-500/20"
  },
  {
    title: "Responsive UI/UX",
    desc: "Designing adaptive interfaces that provide a seamless experience from mobile to ultra-wide monitors.",
    icon: HiOutlineDeviceMobile,
    tags: ["Mobile First", "Fluid Design", "Figma"],
    color: "from-purple-500 to-pink-400",
    shadow: "shadow-purple-500/20"
  },
  {
    title: "Performance Optimization",
    desc: "Fine-tuning web apps for lightning-fast load times and achieving perfect Core Web Vitals.",
    icon: HiOutlineLightningBolt,
    tags: ["Lazy Loading", "SEO", "Vite"],
    color: "from-yellow-500 to-orange-400",
    shadow: "shadow-yellow-500/20"
  },
  {
    title: "API & Backend Integration",
    desc: "Bridging the gap between frontend and backend with robust API consumption and data flow.",
    icon: HiOutlineGlobeAlt,
    tags: ["RESTful", "Axios", "JSON"],
    color: "from-green-500 to-emerald-400",
    shadow: "shadow-green-500/20"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-4 max-w-6xl mx-auto perspective-1000">
      {/* Section Header */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Specialties</span>
        </h2>
        <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full mb-6"></div>
        <p className="text-slate-400 max-w-lg mx-auto leading-relaxed">
          I provide top-notch digital services to help you build modern, smarter, and visually stunning web products.
        </p>
      </div>

      {/* Services Grid with 3D and Hover Effects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {servicesData.map((service, index) => (
          <div 
            key={index} 
            className={`glass group relative p-10 rounded-[2.5rem] border-white/5 transition-all duration-500 
                       hover:-rotate-1 hover:scale-[1.02] hover:border-white/20 hover:shadow-2xl ${service.shadow}`}
          >
            {/* Abstract Glowing Background (Hidden by default, shows on hover) */}
            <div className={`absolute -right-16 -top-16 w-48 h-48 bg-gradient-to-br ${service.color} 
                            opacity-0 group-hover:opacity-10 blur-[60px] rounded-full transition-opacity duration-500`}></div>

            <div className="relative z-10">
              {/* Animated Icon Section */}
              <div className={`inline-flex p-5 rounded-2xl bg-gradient-to-br ${service.color} 
                              bg-opacity-10 text-white mb-8 group-hover:rotate-12 transition-transform duration-300 shadow-lg`}>
                <service.icon size={36} />
              </div>

              {/* Service Title and Description */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-400 leading-relaxed mb-8">
                {service.desc}
              </p>
              
              {/* Professional Micro-tags */}
              <div className="flex flex-wrap gap-3">
                {service.tags.map((tag, tIndex) => (
                  <span 
                    key={tIndex} 
                    className="text-[10px] uppercase tracking-widest font-black px-3 py-1.5 
                               bg-white/5 border border-white/10 rounded-lg text-slate-300 
                               group-hover:bg-white/10 group-hover:border-blue-500/30 transition-all"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;