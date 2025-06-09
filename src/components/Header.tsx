
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/about-us" }, 
    { name: "OUR SERVICES", href: "/our-services" },
    { name: "TEAM", href: "/team" },
    { name: "PUBLICATIONS & MEDIA", href: "/publications-media" },
    { name: "CONTACT US", href: "/contact" }
  ];

  return (
    <header className="bg-white shadow-sm relative z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/">
              <img 
                src="/lovable-uploads/433fcb7a-bffb-4c95-b6ea-e92c3ee139ee.png" 
                alt="Sidona Green Logo" 
                className="h-10 w-auto cursor-pointer"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors"
              >
                {item.name}
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
                href={item.href}
                className="block py-2 text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
