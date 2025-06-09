
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      {/* Breaking News Bar */}
      <div className="bg-orange-600 py-2">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <span className="font-medium">Breaking News:</span>
          <span className="flex-1 mx-4">Click Here to watch news.</span>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Our Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">What We Do</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Team</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Publications & Media</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>

            {/* Address */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Address</h3>
              <div className="text-gray-300 space-y-2">
                <p>📍 20-22 Wenlock Road | London| N1 7GU England</p>
                <p>📧 enquiry@sidonaconsulting.co.uk</p>
                <p>📞 +44 7736 497010</p>
              </div>
            </div>

            {/* Follow Us */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <p className="text-gray-300 mb-4">
                Sidona Green - We are a niche consulting advisory company providing advisory services to help your company to be sustainable.
              </p>
              <div className="flex space-x-4">
                <Facebook className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer transition-colors" />
                <Twitter className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer transition-colors" />
                <Instagram className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer transition-colors" />
                <Linkedin className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 py-4">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; Sidona 2023 | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
