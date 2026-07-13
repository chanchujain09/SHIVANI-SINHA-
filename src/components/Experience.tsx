import { motion, useScroll, useTransform } from 'motion/react';

export default function Experience() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section id="experience" className="py-32 lg:py-40 px-6 md:px-12 w-full max-w-7xl mx-auto relative z-10 min-h-[90vh] flex flex-col justify-center">
      <motion.h2 
        initial={{ opacity: 0, y: 30, filter: 'blur(5px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-xs md:text-sm tracking-[0.3em] font-sans uppercase mb-24 text-text-dark/40 font-bold text-center md:text-left"
      >
        Experience & Impact
      </motion.h2>

      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left Side: Image Placeholder */}
        <div className="w-full lg:w-1/2">
          <motion.div
            style={{ y }}
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full aspect-[4/5] rounded-[2rem] glass-panel relative overflow-hidden group hover-lift"
          >
             <div className="absolute inset-0 bg-gradient-to-tr from-secondary/40 to-primary/20 mix-blend-overlay z-10 transition-transform duration-[1.5s] ease-out group-hover:scale-105"></div>
             <div className="absolute inset-0 flex items-center justify-center text-text-dark/40 font-sans uppercase tracking-[0.2em] text-xs z-20 font-semibold transition-transform duration-[1.5s] ease-out group-hover:scale-105">
                Editorial Image
             </div>
             
             {/* Decorative abstract elements */}
             <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/40 rounded-full blur-3xl"></div>
             <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/40 rounded-full blur-3xl pointer-events-none"></div>
          </motion.div>
        </div>

        {/* Right Side: Content & Cards */}
        <div className="w-full lg:w-1/2 space-y-12 flex flex-col justify-center">
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl md:text-3xl lg:text-4xl text-text-dark font-serif leading-[1.4] tracking-tight drop-shadow-sm"
          >
            With 1 year of experience as a Content Creator at Mediagarh and as a Freelance UGC Creator for different brands, I have developed a strong foundation in creating authentic, visually compelling, and story-led content that elevates brand presence and fosters meaningful engagement.
          </motion.p>
        </div>

      </div>
    </section>
  );
}
