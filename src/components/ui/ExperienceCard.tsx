import { motion } from 'motion/react';
import { Card } from './Card';

interface ExperienceCardProps {
  role: string;
  company: string;
  period: string;
  description?: string;
  index?: number;
}

export function ExperienceCard({ role, company, period, description, index = 0 }: ExperienceCardProps) {
  const isEven = index % 2 === 0;

  return (
    <div className="relative flex flex-col md:flex-row items-start md:items-center w-full group pl-12 md:pl-0">
      
      {/* Timeline Node */}
      <motion.div 
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute left-4 md:left-[50%] top-6 md:top-1/2 w-4 h-4 rounded-full bg-white border-2 border-primary -translate-x-1/2 md:-translate-y-1/2 z-20 group-hover:scale-125 transition-transform duration-300 shadow-md"
      />
      
      {/* Desktop Layout - Alternating */}
      <div className={`hidden md:flex w-full items-center ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
        
        {/* Card Side */}
        <div className="w-[50%] px-8 xl:px-12">
          <motion.div
            initial={{ opacity: 0, x: isEven ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Card hover={false} className="p-8 border border-white/60 bg-white/40 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(230,122,77,0.15)] rounded-[32px] transition-all duration-500 relative">
               {/* Connector Line (Desktop only) */}
               <div className={`absolute top-1/2 w-8 xl:w-12 h-[2px] bg-text-dark/10 -translate-y-1/2 ${isEven ? '-right-8 xl:-right-12' : '-left-8 xl:-left-12'}`} />
               
               <h3 className="text-2xl font-serif text-text-dark mb-2 group-hover:text-primary transition-colors">{role}</h3>
               <div className="text-text-dark/60 font-inter font-semibold tracking-wide uppercase text-xs mb-4">{company}</div>
               {description && <p className="text-text-dark/70 text-base leading-relaxed">{description}</p>}
            </Card>
          </motion.div>
        </div>

        {/* Date Side */}
        <div className={`w-[50%] px-8 xl:px-12 flex ${isEven ? 'justify-start' : 'justify-end'}`}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-primary font-inter font-semibold tracking-wider text-sm px-6 py-2 rounded-full bg-primary/10 backdrop-blur-md shadow-sm border border-primary/20"
          >
            {period}
          </motion.div>
        </div>
      </div>

      {/* Mobile Layout - Left Aligned Timeline */}
      <div className="md:hidden w-full flex flex-col pt-1">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4"
        >
          <div className="text-primary font-inter font-semibold tracking-wider text-xs px-4 py-1.5 rounded-full bg-primary/10 inline-block border border-primary/20 shadow-sm">
            {period}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Card hover={false} className="p-6 border border-white/60 bg-white/40 backdrop-blur-md shadow-sm rounded-[24px]">
             <h3 className="text-xl font-serif text-text-dark mb-1">{role}</h3>
             <div className="text-text-dark/60 font-inter tracking-wide uppercase text-[10px] font-semibold mb-4">{company}</div>
             {description && <p className="text-text-dark/70 text-sm leading-relaxed">{description}</p>}
          </Card>
        </motion.div>
      </div>

    </div>
  );
}
