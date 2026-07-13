import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Loader({ onLoadingComplete }: { onLoadingComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(onLoadingComplete, 500);
          return 100;
        }
        return p + Math.floor(Math.random() * 10) + 10;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-cream"
    >
      <div className="w-64 flex flex-col items-center">
        <div className="text-4xl font-serif font-bold text-text-dark tracking-tighter mb-8 overflow-hidden">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            S.S.
          </motion.div>
        </div>
        <div className="h-[2px] w-full bg-text-dark/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary"
            initial={{ width: 0 }}
            animate={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          />
        </div>
        <div className="mt-4 text-xs font-mono text-text-dark/40 tracking-widest uppercase">
          {Math.min(progress, 100)}%
        </div>
      </div>
    </motion.div>
  );
}
