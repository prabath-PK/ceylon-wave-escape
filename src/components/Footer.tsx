import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-ocean-deep text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Surfing Ceylon</h3>
            <p className="text-ocean-light mb-6">
              Your gateway to the ultimate surf experience on Sri Lanka's beautiful south coast.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                <Facebook className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                <Instagram className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                <Youtube className="w-5 h-5" />
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#packages" className="text-ocean-light hover:text-white transition-colors">Packages</a></li>
              <li><a href="#accommodation" className="text-ocean-light hover:text-white transition-colors">Accommodation</a></li>
              <li><a href="#surf-lessons" className="text-ocean-light hover:text-white transition-colors">Surf Lessons</a></li>
              <li><a href="#about" className="text-ocean-light hover:text-white transition-colors">About Us</a></li>
              <li><a href="#gallery" className="text-ocean-light hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#reviews" className="text-ocean-light hover:text-white transition-colors">Reviews</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-3">
              <li className="text-ocean-light">Beginner Lessons</li>
              <li className="text-ocean-light">Advanced Coaching</li>
              <li className="text-ocean-light">Accommodation</li>
              <li className="text-ocean-light">Equipment Rental</li>
              <li className="text-ocean-light">Airport Transfers</li>
              <li className="text-ocean-light">Local Excursions</li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-coral-sunset flex-shrink-0" />
                <span className="text-ocean-light">
                  Midigama, Weligama<br />
                  Southern Province, Sri Lanka
                </span>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-coral-sunset flex-shrink-0" />
                <div className="text-ocean-light">
                  <div>+94 77 123 4567</div>
                  <div className="text-sm">WhatsApp Available</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-coral-sunset flex-shrink-0" />
                <span className="text-ocean-light">info@surfingceylon.com</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-ocean-light text-sm">
              © 2024 Surfing Ceylon. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-ocean-light hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-ocean-light hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-ocean-light hover:text-white transition-colors">Cancellation Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;