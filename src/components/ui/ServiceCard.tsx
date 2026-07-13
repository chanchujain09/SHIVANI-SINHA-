import { motion } from 'motion/react';
import { Card } from './Card';
import { ReactNode } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  index?: number;
}

export function ServiceCard({ title, description, icon, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative group p-[1px] rounded-[32px] overflow-hidden bg-text-dark/5 hover:bg-gradient-to-tr hover:from-primary hover:to-secondary transition-all duration-500 h-full"
    >
      {/* Ambient hover glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-secondary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl z-0" />
      
      <Card hover={false} className="relative z-10 p-10 h-full border-none bg-white/90 backdrop-blur-xl rounded-[31px] shadow-none flex flex-col">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-8 text-primary group-hover:scale-110 transition-transform duration-500 border border-primary/10">
           {icon}
        </div>
        <h3 className="text-2xl font-serif mb-4 text-text-dark group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-text-dark/70 leading-relaxed font-inter flex-grow">{description}</p>
      </Card>
    </motion.div>
  );
}
