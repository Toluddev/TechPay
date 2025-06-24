// import { Link } from "react-router-dom";
// import { IoGridOutline } from "react-icons/io5";
// import { useState } from "react";
// const Navbar = () => {
//   const navLinks = [
//     { title: "Home", path: "/", active: true },
//     { title: "About Us", path: "/Aboutus", active: false },
//     { title: "Products", path: "/Products", active: false },
//     { title: "Partners", path: "/Partners", active: false },
//     { title: "Contact", path: "/Contact", active: false },
// ]
// const[ active, setActive ]= useState('');
//   return (
//      <div className="z-[100] w-full my-auto mx-0 h-16 md:px-[40px] px-8 py-10 flex items-center justify-between fixed bg-transparent top-0 ">
//       <span className="flex items-center right-[209px]">
//       <img src="https://techpay.ng/assets/img/black-logo.png" alt="Techpay" height="19px" width="118px" className="absolute" />
//       </span>
// 			<div className="md:flex hidden items-center gap-7 ">
// 				{navLinks.map((navLink) => {
// 					return (
// 						<Link
// 							to={navLink.path}
// 							key={navLink.title}
//               onClick={() => {
//                 setActive(""); 
//                 window.scrollTo(0,0);
//             }}
// 						>
// 							<span
// 								className={`font-medium ${navLink.active ? "text-blue-400" : "text-black"} hover:${navLink.active ? "text-black" : "text-blue-400"}`}
// 							>
// 								{navLink.title}
// 							</span>
// 						</Link>
// 					);
// 				})}
//       </div>
//       <div className="md:hidden block cursor-pointer">
//         <IoGridOutline color="#000" />
//       </div>
//     </div>
//   )
// }

// export default Navbar;




import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Photojournalism', href: '/photojournalism' },
    { name: 'About', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md">
        <div className="container mx-auto px-4 lg:px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo - Hidden on mobile, visible on desktop */}
            <div className="flex items-center space-x-2 bg-black p-2 rounded-full">
                <Link to="/" className="text-white">
                    <img src="/lovable-uploads/Conjugal Vows_2.jpg-1.PNG" alt="Logo" className="h-20 w-25" />
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
            <Button className="hidden md:flex bg-black hover:bg-gray-800 text-white px-6 lg:px-8 py-2 rounded-full font-medium">
              Explore
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
              <div className="flex items-center space-x-2 bg-black p-2 rounded-full">
                <Link to="/" className="text-white">
                    <img src="/lovable-uploads/Conjugal Vows_2.jpg-1.PNG" alt="Logo" className="h-20 w-25" />
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
                    className="block text-2xl font-medium text-gray-900 hover:text-gray-600 transition-colors"
                    onClick={closeMenu}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
              
              {/* CTA Button in Mobile Menu */}
              <div className="mt-12">
                <Button 
                  className="w-full bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full font-medium"
                  onClick={closeMenu}
                >
                  Explore
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;