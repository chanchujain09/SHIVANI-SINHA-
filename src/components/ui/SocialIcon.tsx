import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';
import { cn } from '../../lib/utils';

interface SocialIconProps {
  icon: LucideIcon;
  href: string;
  className?: string;
}

export function SocialIcon({ icon: Icon, href, className }: SocialIconProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -4, scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={cn("w-12 h-12 flex items-center justify-center rounded-full bg-card shadow-[0_4px_12px_rgb(0,0,0,0.04)] border border-text-dark/5 text-text-dark hover:text-primary hover:border-primary/20 transition-colors", className)}
    >
      <Icon className="w-5 h-5" />
    </motion.a>
  );
}
