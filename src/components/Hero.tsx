import { motion, useScroll, useTransform } from 'motion/react';
import { Button } from './ui/Button';

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section className="relative w-full min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden px-6 md:px-12 py-12 md:py-20">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center relative z-10 h-full pt-12 md:pt-20 text-center">
        
        {/* Centered Content */}
        <div className="w-full z-20 relative flex flex-col justify-center items-center h-full">
          <motion.div
            initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xs md:text-sm tracking-[0.2em] font-sans uppercase mb-6 md:mb-8 text-text-dark/50 font-bold"
            >
              Content Creator • Social Media Executive • UGC Creator
            </motion.h2>
            
            <h1 className="text-[3rem] sm:text-[4.5rem] md:text-[7.5rem] lg:text-[10rem] font-serif tracking-tighter leading-[0.9] md:leading-[0.85] mb-8 md:mb-12 text-text-dark text-center">
              <motion.span 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="block pb-1 md:pb-2"
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
              className="flex flex-wrap items-center justify-center gap-4 md:gap-6"
            >
              <motion.a 
                href="#work"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center bg-text-dark text-cream hover:bg-black border-none rounded-full px-8 py-4 md:px-10 md:py-6 text-sm tracking-wide shadow-xl shadow-text-dark/10 hover-lift hover:shadow-2xl hover:shadow-text-dark/20 transition-all duration-500 font-sans"
              >
                Selected Works
              </motion.a>
              <motion.a 
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center border border-text-dark/20 text-text-dark hover:bg-text-dark hover:text-cream rounded-full px-8 py-4 md:px-10 md:py-6 text-sm tracking-wide bg-transparent hover-lift transition-all duration-500 font-sans"
              >
                Get in Touch
              </motion.a>
            </motion.div>
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
