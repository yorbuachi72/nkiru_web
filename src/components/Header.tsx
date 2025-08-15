import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-6 bg-white relative z-50">
        <Link to="/" className="font-bold" style={{fontSize: '24px', letterSpacing: '-0.6px'}}>
          NKIRU
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
        <Link 
          to="/" 
          className={`font-medium transition-colors ${
            isActive('/') ? 'text-black' : 'text-gray-600 hover:text-black'
          }`} 
          style={{fontSize: '14px', letterSpacing: '0.35px'}}
        >
          HOME
        </Link>
        <Link 
          to="/about" 
          className={`font-medium transition-colors ${
            isActive('/about') ? 'text-black' : 'text-gray-600 hover:text-black'
          }`} 
          style={{fontSize: '14px', letterSpacing: '0.35px'}}
        >
          ABOUT US
        </Link>
        <Link 
          to="/services" 
          className={`font-medium transition-colors ${
            isActive('/services') ? 'text-black' : 'text-gray-600 hover:text-black'
          }`} 
          style={{fontSize: '14px', letterSpacing: '0.35px'}}
        >
          SERVICES
        </Link>
        <Link 
          to="/projects" 
          className={`font-medium transition-colors ${
            isActive('/projects') ? 'text-black' : 'text-gray-600 hover:text-black'
          }`} 
          style={{fontSize: '14px', letterSpacing: '0.35px'}}
        >
          PROJECTS
        </Link>
        <Link 
          to="/team" 
          className={`font-medium transition-colors ${
            isActive('/team') ? 'text-black' : 'text-gray-600 hover:text-black'
          }`} 
          style={{fontSize: '14px', letterSpacing: '0.35px'}}
        >
          TEAM
        </Link>
        <Link 
          to="/contact" 
          className={`font-medium transition-colors ${
            isActive('/contact') ? 'text-black' : 'text-gray-600 hover:text-black'
          }`} 
          style={{fontSize: '14px', letterSpacing: '0.35px'}}
        >
          CONTACT US
        </Link>
        </div>
        
        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
          style={{ minWidth: '44px', minHeight: '44px' }}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <X size={24} className="text-black" />
          ) : (
            <Menu size={24} className="text-black" />
          )}
        </button>
      </nav>
      
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
            onClick={closeMobileMenu}
          />
          
          {/* Mobile Menu */}
          <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-xl transform transition-transform">
            <div className="flex flex-col pt-20 px-6 space-y-6">
              <Link 
                to="/" 
                onClick={closeMobileMenu}
                className={`font-medium transition-colors py-3 border-b border-gray-100 ${
                  isActive('/') ? 'text-black' : 'text-gray-600 hover:text-black'
                }`} 
                style={{fontSize: '16px', letterSpacing: '0.4px', minHeight: '44px'}}
              >
                HOME
              </Link>
              <Link 
                to="/about" 
                onClick={closeMobileMenu}
                className={`font-medium transition-colors py-3 border-b border-gray-100 ${
                  isActive('/about') ? 'text-black' : 'text-gray-600 hover:text-black'
                }`} 
                style={{fontSize: '16px', letterSpacing: '0.4px', minHeight: '44px'}}
              >
                ABOUT US
              </Link>
              <Link 
                to="/services" 
                onClick={closeMobileMenu}
                className={`font-medium transition-colors py-3 border-b border-gray-100 ${
                  isActive('/services') ? 'text-black' : 'text-gray-600 hover:text-black'
                }`} 
                style={{fontSize: '16px', letterSpacing: '0.4px', minHeight: '44px'}}
              >
                SERVICES
              </Link>
              <Link 
                to="/projects" 
                onClick={closeMobileMenu}
                className={`font-medium transition-colors py-3 border-b border-gray-100 ${
                  isActive('/projects') ? 'text-black' : 'text-gray-600 hover:text-black'
                }`} 
                style={{fontSize: '16px', letterSpacing: '0.4px', minHeight: '44px'}}
              >
                PROJECTS
              </Link>
              <Link 
                to="/team" 
                onClick={closeMobileMenu}
                className={`font-medium transition-colors py-3 border-b border-gray-100 ${
                  isActive('/team') ? 'text-black' : 'text-gray-600 hover:text-black'
                }`} 
                style={{fontSize: '16px', letterSpacing: '0.4px', minHeight: '44px'}}
              >
                TEAM
              </Link>
              <Link 
                to="/contact" 
                onClick={closeMobileMenu}
                className={`font-medium transition-colors py-3 border-b border-gray-100 ${
                  isActive('/contact') ? 'text-black' : 'text-gray-600 hover:text-black'
                }`} 
                style={{fontSize: '16px', letterSpacing: '0.4px', minHeight: '44px'}}
              >
                CONTACT US
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}