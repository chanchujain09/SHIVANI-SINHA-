import { motion } from 'motion/react';
import { Mail, Phone, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-32 lg:py-48 px-6 md:px-12 w-full relative z-10 bg-text-dark text-cream mt-16 md:mt-32 min-h-auto md:min-h-[90vh] flex flex-col justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto flex flex-col items-center text-center"
      >
        <p className="text-xs font-sans font-bold tracking-[0.3em] uppercase text-cream/40 mb-6 md:mb-8">
          Let's Work Together
        </p>

        <h2 className="text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] font-serif leading-[0.9] mb-8 md:mb-12 tracking-tighter hover:text-cream/80 transition-colors duration-500 cursor-default">
          Connect.
        </h2>
        
        <p className="text-lg md:text-2xl text-cream/70 font-sans font-light max-w-2xl leading-relaxed mb-12 md:mb-24">
          I'm always excited to collaborate with brands, agencies, and businesses looking to create authentic, engaging, and meaningful content.
        </p>

        <div className="flex flex-col items-center w-full max-w-4xl border-t border-cream/10 pt-10 md:pt-16">
          <div className="flex flex-col items-center text-center">
             <h3 className="text-sm tracking-[0.3em] uppercase font-sans font-bold text-cream/30 mb-8">Contact Info</h3>
             <a href="mailto:shivanisinha2105@gmail.com" className="flex items-center justify-center text-xl md:text-3xl hover:text-primary transition-colors duration-300 group/link font-serif mb-6">
               shivanisinha2105@gmail.com
               <ArrowUpRight className="w-8 h-8 ml-3 opacity-0 group-hover/link:opacity-100 -translate-x-4 group-hover/link:translate-x-0 transition-all duration-300 hidden lg:block text-primary" />
             </a>
             <a href="tel:+919588810524" className="flex items-center justify-center text-xl md:text-3xl hover:text-primary transition-colors duration-300 group/link font-serif">
               +91 95888 10524
             </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
