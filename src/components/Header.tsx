
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    "HOME",
    "ABOUT US", 
    "OUR SERVICES",
    "WHAT WE DO",
    "TEAM",
    "PUBLICATIONS & MEDIA",
    "CONTACT US"
  ];

  return (
    <header className="bg-white shadow-sm relative z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">🌿</span>
            </div>
            <span className="text-xl font-bold">
              <span className="text-gray-800">Sidona</span>
              <span className="text-green-600 ml-1">Green</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t">
            {navigationItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="block py-2 text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
