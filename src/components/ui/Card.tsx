import { motion, HTMLMotionProps } from 'motion/react';
import { cn } from '../../lib/utils';
import { forwardRef } from 'react';

interface CardProps extends HTMLMotionProps<"div"> {
  hover?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = true, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={hover ? { y: -8, transition: { duration: 0.3, ease: 'easeOut' } } : undefined}
        className={cn(
          "bg-card rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden",
          hover && "hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-shadow duration-300",
          className
        )}
        {...props}
      />
    );
  }
);
Card.displayName = 'Card';
