import { motion, HTMLMotionProps } from 'motion/react';
import { cn } from '../../lib/utils';
import { forwardRef } from 'react';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-[24px] font-inter font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-cream";
    
    const variants = {
      primary: "bg-primary text-white hover:bg-primary/90 shadow-[0_4px_14px_0_rgba(230,122,77,0.39)] hover:shadow-[0_6px_20px_rgba(230,122,77,0.23)]",
      secondary: "bg-secondary text-text-dark hover:bg-secondary/90",
      outline: "border border-text-dark/10 hover:bg-text-dark/5 text-text-dark",
      ghost: "hover:bg-text-dark/5 text-text-dark",
    };

    const sizes = {
      sm: "px-5 py-2.5 text-sm",
      md: "px-8 py-3.5 text-base",
      lg: "px-10 py-4 text-lg",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
