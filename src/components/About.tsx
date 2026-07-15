import { motion, useScroll, useTransform } from 'motion/react';

export default function About() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section id="about" className="relative w-full py-16 md:py-32 lg:py-40 px-6 md:px-12 z-10 min-h-auto md:min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-16 lg:gap-24">
        {/* Left: Image Portrait */}
        <motion.div 
          style={{ y }}
          initial={{ opacity: 0, x: -50, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full md:w-1/2 relative group hover-lift"
        >
          <div className="aspect-[3/4] w-full max-w-md mx-auto md:mr-auto rounded-[2rem] overflow-hidden glass-panel relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-stone-900/10 to-transparent mix-blend-overlay z-10"></div>
            <img 
              src="https://i.postimg.cc/9X6gRYYz/IMG-1120.jpg" 
              alt="Shivani Sinha - Content Creator" 
              loading="lazy"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 z-20 pointer-events-none"></div>
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 50, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-xs md:text-sm tracking-[0.3em] font-sans uppercase mb-8 text-text-dark/40 font-bold">About Me</h2>
          
          <div className="text-2xl md:text-4xl lg:text-5xl text-text-dark font-serif leading-[1.3] space-y-8 tracking-tight drop-shadow-sm">
            <p>
              Creating content that feels real, relatable, and genuinely connects with people is what I love the most.
            </p>
            <p className="text-text-dark/70 text-lg md:text-2xl font-sans font-light leading-relaxed">
              I focus on creating authentic, engaging content that feels natural and helps brands connect with their community in a meaningful way.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
