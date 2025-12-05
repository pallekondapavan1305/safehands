import { Menu, X, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from './ui/neon-button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full max-w-full overflow-x-hidden ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full box-border">
        <div className="flex justify-between items-center py-3 sm:py-4">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm sm:text-lg">SH</span>
            </div>
            <h1 className="text-lg sm:text-xl md:text-2xl font-display font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Safe Hands Finserv
            </h1>
          </div>

          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group text-sm xl:text-base">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group text-sm xl:text-base">
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </a>
            <a href="#calculator" className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group text-sm xl:text-base">
              EMI Calculator
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group text-sm xl:text-base">
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group text-sm xl:text-base">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </a>
            <a href="tel:9966171074">
              <Button
                variant="solid"
                size="default"
                className="flex items-center gap-2 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-xs sm:text-sm"
              >
                <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden xl:inline">Call Now</span>
                <span className="xl:hidden">Call</span>
              </Button>
            </a>
          </nav>

          <button
            className="lg:hidden text-gray-700 p-2 hover:bg-gray-100 rounded-lg transition-colors touch-manipulation"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden border-t py-4 animate-slide-up">
            <nav className="flex flex-col space-y-2 sm:space-y-3">
              <a 
                href="#home" 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors py-2.5 px-3 rounded-lg hover:bg-blue-50 text-base touch-manipulation"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#services" 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors py-2.5 px-3 rounded-lg hover:bg-blue-50 text-base touch-manipulation"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#calculator" 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors py-2.5 px-3 rounded-lg hover:bg-blue-50 text-base touch-manipulation"
                onClick={() => setIsMenuOpen(false)}
              >
                EMI Calculator
              </a>
              <a 
                href="#about" 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors py-2.5 px-3 rounded-lg hover:bg-blue-50 text-base touch-manipulation"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </a>
              <a 
                href="#contact" 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors py-2.5 px-3 rounded-lg hover:bg-blue-50 text-base touch-manipulation"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <a href="tel:9966171074" onClick={() => setIsMenuOpen(false)} className="mt-2">
                <Button
                  variant="solid"
                  size="default"
                  className="flex items-center justify-center gap-2 text-white w-full text-base touch-manipulation"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
