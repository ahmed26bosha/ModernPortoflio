
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';

const navLinks = [
  { name: 'Home', href: '#home', section: 'home' },
  { name: 'About', href: '#about', section: 'about' },
  { name: 'Projects', href: '#projects', section: 'projects' },
  { name: 'Skills', href: '#skills', section: 'skills' },
  { name: 'Contact', href: '#contact', section: 'contact' },
];

const Navbar = ({ activeSection, scrollY }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isScrolled = scrollY > 50;

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 shadow-md blur-bg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-bold text-gradient">Portfolio</a>
          </div>
          
          <div className="flex items-center">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`nav-link text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === link.section ? 'text-primary active' : 'text-foreground/80'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>
            
            {/* Contact Button (Desktop) & Theme Toggle */}
            <div className="hidden md:flex items-center space-x-4 ml-8">
              <Button asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </Button>
            </div>
          </div>
          
          {/* Mobile Menu Button & Theme Toggle */}
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme" className="mr-2">
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu} aria-label="Menu">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden bg-background/95 blur-bg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 pt-2 pb-4 space-y-1 sm:px-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`block py-2 px-3 text-base font-medium rounded-md ${
                    activeSection === link.section
                      ? 'text-primary bg-primary/10'
                      : 'text-foreground/80 hover:bg-accent hover:text-accent-foreground'
                  }`}
                  onClick={closeMobileMenu}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2">
                <Button asChild className="w-full">
                  <a href="#contact" onClick={closeMobileMenu}>Get in Touch</a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
