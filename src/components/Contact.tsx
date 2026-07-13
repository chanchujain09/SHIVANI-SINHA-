import { motion } from 'motion/react';
import { Mail, Phone, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 md:py-48 px-6 md:px-12 w-full relative z-10 bg-text-dark text-cream mt-32 min-h-[90vh] flex flex-col justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto flex flex-col items-center text-center"
      >
        <p className="text-xs font-sans font-bold tracking-[0.3em] uppercase text-cream/40 mb-8">
          Let's Work Together
        </p>

        <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-serif leading-[0.9] mb-12 tracking-tighter hover:text-cream/80 transition-colors duration-500 cursor-default">
          Connect.
        </h2>
        
        <p className="text-xl md:text-2xl text-cream/70 font-sans font-light max-w-2xl leading-relaxed mb-24">
          I'm always excited to collaborate with brands, agencies, and businesses looking to create authentic, engaging, and meaningful content.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 w-full max-w-4xl border-t border-cream/10 pt-16">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
             <h3 className="text-sm tracking-[0.3em] uppercase font-sans font-bold text-cream/30 mb-8">Contact Info</h3>
             <a href="mailto:shivanisinha2105@gmail.com" className="flex items-center text-xl md:text-3xl hover:text-primary transition-colors duration-300 group/link font-serif mb-6">
               shivanisinha2105@gmail.com
               <ArrowUpRight className="w-8 h-8 ml-3 opacity-0 group-hover/link:opacity-100 -translate-x-4 group-hover/link:translate-x-0 transition-all duration-300 hidden lg:block text-primary" />
             </a>
             <a href="tel:+919588810524" className="flex items-center text-xl md:text-3xl hover:text-primary transition-colors duration-300 group/link font-serif">
               +91 95888 10524
             </a>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
             <h3 className="text-sm tracking-[0.3em] uppercase font-sans font-bold text-cream/30 mb-8">Social Media</h3>
             <div className="flex flex-col gap-6">
               {['Instagram', 'LinkedIn', 'TikTok'].map((platform) => (
                 <a key={platform} href="#" className="text-xl md:text-2xl font-sans text-cream/80 hover:text-primary transition-colors duration-300 font-light group/social flex items-center">
                   {platform}
                   <ArrowUpRight className="w-5 h-5 ml-2 opacity-0 group-hover/social:opacity-100 -translate-x-2 group-hover/social:translate-x-0 transition-all duration-300 text-primary" />
                 </a>
               ))}
             </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
