import { motion, useScroll, useTransform } from 'motion/react';
import { Button } from './ui/Button';

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section className="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden px-6 md:px-12">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10 h-full pt-20">
        
        {/* Left Content */}
        <div className="w-full md:w-[50%] z-20 relative flex flex-col justify-center h-full">
          <motion.div
            initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xs md:text-sm tracking-[0.2em] font-sans uppercase mb-8 text-text-dark/50 font-bold"
            >
              Content Creator • Social Media Executive • UGC Creator
            </motion.h2>
            
            <h1 className="text-[5rem] md:text-[7rem] lg:text-[9rem] font-serif tracking-tighter leading-[0.85] mb-12 text-text-dark">
              <motion.span 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="block pb-2"
              >
                Shivani
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="block italic text-text-dark/80"
              >
                Sinha.
              </motion.span>
            </h1>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-wrap items-center gap-6"
            >
              <motion.a 
                href="#work"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center bg-text-dark text-cream hover:bg-black border-none rounded-full px-10 py-7 text-sm tracking-wide shadow-xl shadow-text-dark/10 hover-lift hover:shadow-2xl hover:shadow-text-dark/20 transition-all duration-500 font-sans"
              >
                Selected Works
              </motion.a>
              <motion.a 
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center border border-text-dark/20 text-text-dark hover:bg-text-dark hover:text-cream rounded-full px-10 py-7 text-sm tracking-wide bg-transparent hover-lift transition-all duration-500 font-sans"
              >
                Get in Touch
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Image Placeholder */}
        <div className="w-full md:w-[45%] h-[60%] md:h-[80%] flex justify-end mt-12 md:mt-0 relative">
          <motion.div
            style={{ y }}
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full relative group hover-lift"
          >
            <div className="w-full h-full glass-panel rounded-[2rem] overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary/30 to-primary/10 mix-blend-overlay z-10 transition-transform duration-[1.5s] ease-out group-hover:scale-105"></div>
              <div className="absolute inset-0 flex items-center justify-center text-text-dark/40 font-sans tracking-[0.3em] text-xs uppercase font-bold z-20 transition-transform duration-[1.5s] ease-out group-hover:scale-105">
                Editorial Portrait
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating abstract shape */}
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -150]) }}
        className="absolute top-[20%] right-[40%] w-[30vw] h-[30vw] bg-secondary/20 rounded-full blur-[100px] pointer-events-none -z-10"
      />
    </section>
  );
}
