import { motion } from 'motion/react';
import { Card } from './Card';
import { Badge } from './Badge';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  index?: number;
}

export function ProjectCard({ title, category, description, technologies, imageUrl, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <Card hover={false} className="h-full flex flex-col bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(230,122,77,0.15)] transition-all duration-500 rounded-[32px] overflow-hidden">
        
        {/* Image Container */}
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <div className="absolute inset-0 bg-text-dark/5 flex items-center justify-center text-text-dark/20 font-medium group-hover:scale-105 transition-transform duration-700 ease-out z-0">
            {imageUrl ? (
              <img src={imageUrl} alt={title} loading="lazy" className="w-full h-full object-cover" />
            ) : (
              <span>[ {title} Image ]</span>
            )}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
          <div className="absolute top-6 left-6 z-20">
             <Badge variant="glass">{category}</Badge>
          </div>
        </div>

        {/* Content Container */}
        <div className="p-8 flex flex-col flex-grow">
          <h3 className="text-2xl font-serif text-text-dark mb-3 group-hover:text-primary transition-colors">{title}</h3>
          <p className="text-text-dark/70 text-base leading-relaxed mb-6 flex-grow">{description}</p>
          
          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-8">
            {technologies.map((tech) => (
              <span key={tech} className="px-3 py-1 bg-text-dark/5 rounded-full text-xs font-inter font-medium text-text-dark/70">
                {tech}
              </span>
            ))}
          </div>

          <motion.a 
            href="#"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center rounded-[24px] font-inter font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-cream border border-text-dark/10 hover:bg-text-dark/5 text-text-dark px-8 py-3.5 text-base w-full sm:w-auto group/btn"
          >
            View Case Study <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </motion.a>
        </div>
      </Card>
    </motion.div>
  );
}
