import { cn } from '../../lib/utils';
import { motion, HTMLMotionProps } from 'motion/react';

interface BadgeProps extends HTMLMotionProps<"span"> {
  variant?: 'solid' | 'outline' | 'glass';
  className?: string;
}

export function Badge({ variant = 'outline', className, ...props }: BadgeProps) {
  const variants = {
    solid: "bg-primary text-white",
    outline: "border border-text-dark/10 bg-card shadow-sm text-text-dark",
    glass: "bg-white/70 backdrop-blur-sm border border-text-dark/10 text-text-dark shadow-[0_4px_12px_rgba(0,0,0,0.05)]",
  };

  return (
    <motion.span 
      className={cn("inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold font-inter", variants[variant], className)}
      {...props}
    />
  );
}
