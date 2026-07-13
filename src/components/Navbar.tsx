import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Portfolio', href: '#work' },
  { name: 'Experience', href: '#experience' },
  { name: 'Expertise', href: '#expertise' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled ? 'py-4 glass-panel' : 'py-8 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <span className="text-xl md:text-2xl font-serif tracking-tight text-text-dark">
            Shivani<span className="italic font-light ml-1">Sinha.</span>
          </span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-xs font-sans font-bold tracking-[0.2em] uppercase text-text-dark/60 hover:text-text-dark transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a 
            href="#contact"
            className="text-xs font-sans font-bold text-text-dark uppercase tracking-[0.2em] px-6 py-3 rounded-full border border-text-dark/20 hover:bg-text-dark hover:text-white transition-all duration-300 ml-4"
          >
            Connect
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-text-dark p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cream border-b border-text-dark/10 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-6 space-y-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-sm font-sans font-bold tracking-[0.2em] uppercase text-text-dark/80 hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact"
                className="text-sm font-sans font-bold tracking-[0.2em] uppercase text-primary pt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Connect
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
