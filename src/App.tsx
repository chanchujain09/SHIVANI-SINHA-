import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedWork from './components/FeaturedWork';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-cream selection:bg-primary/20 selection:text-text-dark font-sans relative overflow-x-hidden">
      <div className="noise-bg pointer-events-none"></div>
      
      {/* Premium Ambient Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute w-[800px] h-[800px] bg-secondary/20 rounded-full blur-[120px] -top-96 -left-96 opacity-50"></div>
      </div>

      <AnimatePresence mode="wait">
        {loading ? (
          <Loader onLoadingComplete={() => setLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", staggerChildren: 0.1 }}
            className="relative z-10"
          >
            <Navbar />
            <main className="flex flex-col pt-16">
              <Hero />
              <About />
              <FeaturedWork />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
