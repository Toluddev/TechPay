import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/Aboutus' },
     { name: 'Partners', href: '/Partners' },
    { name: 'Products', href: '/Products' },
    { name: 'Contact', href: '/Contact' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md">
        <div className="container mx-auto px-4 lg:px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo - Hidden on mobile, visible on desktop */}
            <div className="flex items-center space-x-2 p-2">
                <Link to="/" className="text-white">
                    <img src="https://techpay.ng/assets/img/black-logo.png" alt="Logo" className="h-8 w-25" />
                </Link>
            </div>
            {/* Navigation Pills - Hidden on mobile */}
            <div className="hidden md:flex items-center bg-gray-100 rounded-full p-1">
              {navItems.map((item) => (
                <Link 
                  key={item.name}
                  to={item.href}
                  className="px-4 lg:px-6 py-2 rounded-full text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA Button - Hidden on mobile */}
            <Button className="hidden md:flex bg-gradient-to-r from-[#00afef] via-[#00afef] to-[#3e4095] text-black px-6 lg:px-8 py-2 rounded-full font-medium">
              Get Started
            </Button>

            {/* Mobile Hamburger Menu Button */}
            <button 
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <Menu className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Full-Screen Overlay Menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-50 md:hidden"
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-menu-title"
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-white"
            onClick={closeMenu}
            aria-hidden="true"
          />
          
          {/* Menu Content */}
          <div className="relative h-full flex flex-col">
            {/* Header with Logo and Close Button */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              {/* Logo - Visible in mobile menu */}
              <div className="flex items-center space-x-2 p-2">
                <Link to="/" className="text-white">
                    <img src="https://techpay.ng/assets/img/black-logo.png" alt="Logo" className="h-8 w-13" />
                </Link>
            </div>
              
              {/* Close Button */}
              <button 
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <X className="w-6 h-6 text-gray-700" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 flex flex-col justify-center px-6">
              <nav className="space-y-8" id="mobile-menu-title">
                {navItems.map((item) => (
                  <Link 
                    key={item.name}
                    to={item.href}
                    className="block text-2xl font-serif text-gray-900 hover:text-gray-600 transition-colors"
                    onClick={closeMenu}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
              
              {/* CTA Button in Mobile Menu */}
              {/* <div className="mt-12">
                <Button 
                  className="w-full bg-gradient-to-r from-[#00afef] via-[#00afef] to-[#3e4095] text-black hover:bg-gray-800 px-8 py-3 rounded-full font-medium"
                  onClick={closeMenu}
                >
                  Get Started
                </Button>
              </div> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;