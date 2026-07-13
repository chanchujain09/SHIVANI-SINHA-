import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Button } from './ui/Button';

const projects = [
  { title: "UGC Videos", platform: "TikTok / Instagram", description: "Authentic user-generated content that builds trust." },
  { title: "Instagram Reels", platform: "Instagram", description: "High-energy short-form video content." },
  { title: "Brand Collaborations", platform: "Multiple Platforms", description: "Strategic partnerships with leading brands." },
  { title: "Product Promotions", platform: "Social Media", description: "Visually striking product showcases." },
  { title: "Social Media Campaigns", platform: "Omnichannel", description: "Comprehensive digital rollout strategies." }
];

export default function FeaturedWork() {
  return (
    <section id="work" className="py-32 lg:py-40 px-6 md:px-12 w-full max-w-7xl mx-auto relative z-10 min-h-screen">
      <motion.h2 
        initial={{ opacity: 0, y: 30, filter: 'blur(5px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-xs md:text-sm tracking-[0.3em] font-sans uppercase mb-24 text-text-dark/40 font-bold"
      >
        Featured Work
      </motion.h2>

      <div className="flex flex-col gap-32 md:gap-48">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;
          return (
            <div key={index} className={`flex flex-col md:flex-row items-center gap-12 lg:gap-24 ${isEven ? '' : 'md:flex-row-reverse'}`}>
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="w-full md:w-3/5"
              >
                <div className="relative aspect-[4/5] md:aspect-[3/4] w-full rounded-[2rem] overflow-hidden glass-panel group hover-lift">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/10 transition-transform duration-[1.5s] ease-[0.16,1,0.3,1] flex items-center justify-center group-hover:scale-105 z-10">
                    <span className="text-text-dark/40 font-sans text-xs uppercase tracking-[0.2em] font-semibold transition-transform duration-[1.5s] ease-[0.16,1,0.3,1] group-hover:scale-105">
                      Thumbnail
                    </span>
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 md:p-12 z-20">
                    <motion.div 
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        className="translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out flex justify-end"
                    >
                      <Button variant="primary" className="bg-white/90 backdrop-blur-md hover:bg-white text-text-dark border-none shadow-xl rounded-full px-8 py-6">
                        View Project <ArrowUpRight className="w-5 h-5 ml-2" />
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
              
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? 50 : -50, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="w-full md:w-2/5 flex flex-col justify-center"
              >
                <p className="text-xs font-semibold tracking-[0.3em] uppercase text-text-dark/40 mb-6">{project.platform}</p>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-text-dark mb-6 tracking-tight leading-[1.1]">{project.title}</h3>
                <p className="text-text-dark/70 font-sans font-light leading-relaxed text-lg md:text-xl mb-10">{project.description}</p>
                <div className="h-[1px] w-full bg-text-dark/10"></div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
