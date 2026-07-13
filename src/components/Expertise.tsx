import { motion } from 'motion/react';

const expertiseList = [
  "Creative Content",
  "UGC",
  "Storytelling",
  "Social Media",
  "Script Writing",
  "Brand Partnerships"
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-32 lg:py-40 px-6 md:px-12 w-full max-w-7xl mx-auto relative z-10 flex flex-col justify-center items-center min-h-[70vh]">
      <motion.h2 
        initial={{ opacity: 0, y: 30, filter: 'blur(5px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-xs md:text-sm tracking-[0.3em] font-sans uppercase mb-16 text-text-dark/40 font-bold text-center"
      >
        Expertise
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-4xl mx-auto">
        {expertiseList.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="px-8 md:px-10 py-4 md:py-5 rounded-full glass-panel hover:shadow-lg hover:border-text-dark/30 hover:-translate-y-1 transition-all duration-300 cursor-default"
          >
            <span className="font-serif text-xl md:text-2xl text-text-dark">{skill}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
