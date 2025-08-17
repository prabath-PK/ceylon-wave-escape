import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import heroImage from "@/assets/hero-surf-sri-lanka.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Surf, Stay & Live the<br />
          <span className="text-coral-sunset">Sri Lankan Wave</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-light opacity-90">
          Book your surf lessons and stay in paradise between Weligama & Midigama
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button size="lg" className="btn-coral text-lg px-10 py-6 rounded-full">
            Book Now
          </Button>
          
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-4">
            <Calendar className="w-5 h-5" />
            <span className="text-sm">Select dates to check availability</span>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;