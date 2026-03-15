import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 py-4 ${
          isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="font-heading font-bold text-2xl tracking-tighter flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-neon rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-black text-xs font-black">NK</span>
            </div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
              NKIRU
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { name: 'HOME', path: '/' },
              { name: 'ABOUT', path: '/about' },
              { name: 'SERVICES', path: '/services' },
              { name: 'PROJECTS', path: '/projects' },
              { name: 'TEAM', path: '/team' },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-heading text-xs tracking-widest transition-all duration-300 hover:text-accent-cyan ${
                  isActive(link.path) ? 'text-accent-cyan font-bold' : 'text-white/70'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="btn-neon text-xs tracking-widest !py-2 !px-6"
            >
              CONTACT US
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? (
              <X size={24} className="text-white" />
            ) : (
              <Menu size={24} className="text-white" />
            )}
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div 
            className="fixed inset-0 bg-black/90 backdrop-blur-xl transition-opacity"
            onClick={closeMobileMenu}
          />
          
          <div className="fixed top-0 right-0 h-full w-full bg-background/95 border-l border-white/10 shadow-2xl transform transition-transform p-8 flex flex-col justify-center items-center">
            <button
              onClick={closeMobileMenu}
              className="absolute top-6 right-6 p-2 bg-white/5 rounded-full"
            >
              <X size={24} />
            </button>

            <div className="flex flex-col space-y-8 text-center">
              {[
                { name: 'HOME', path: '/' },
                { name: 'ABOUT US', path: '/about' },
                { name: 'SERVICES', path: '/services' },
                { name: 'PROJECTS', path: '/projects' },
                { name: 'TEAM', path: '/team' },
                { name: 'CONTACT US', path: '/contact' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={closeMobileMenu}
                  className={`font-heading text-2xl tracking-widest transition-colors ${
                    isActive(link.path) ? 'text-accent-cyan' : 'text-white/60 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
      <div className="h-20 md:h-24" /> {/* Spacer for fixed header */}
    </>
  );
}
