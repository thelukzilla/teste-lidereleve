import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'O Método', href: '#methodology' },
    { name: 'Benefícios', href: '#benefits' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-800/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Text */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <span className={`font-bold text-2xl tracking-widest ${scrolled ? 'text-white' : 'text-brand-900'}`}>
              LIDERE<span className="text-brand-gold">LEVE</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium uppercase tracking-wide hover:text-brand-gold transition-colors duration-200 ${scrolled ? 'text-gray-200' : 'text-brand-800'}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#pricing"
              className="px-6 py-2 bg-brand-gold text-white font-bold text-sm uppercase rounded-full shadow-md hover:bg-brand-goldlight transition-all transform hover:-translate-y-0.5"
            >
              Garantir Vaga
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none p-2 ${scrolled ? 'text-white' : 'text-brand-900'}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-800 border-t border-brand-700 shadow-xl">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-center text-white hover:text-brand-gold font-medium uppercase tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#pricing"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-6 py-3 bg-brand-gold text-white font-bold uppercase rounded-lg"
            >
              Garantir Vaga
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;