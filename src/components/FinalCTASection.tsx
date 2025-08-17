import { Button } from "@/components/ui/button";
import { Waves, Calendar, MessageCircle } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="py-20 bg-sunset-gradient text-white wave-divider relative">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
              <Waves className="w-10 h-10 text-white" />
            </div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Ready to Ride the Waves?
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto">
            Join our surf family and experience the magic of Sri Lanka's south coast. 
            Perfect waves, amazing community, and memories that will last a lifetime await you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-ocean-deep hover:bg-white/90 font-bold px-12 py-6 rounded-full text-lg"
            >
              <Calendar className="w-5 h-5 mr-3" />
              Book Your Stay Now
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-ocean-deep font-bold px-12 py-6 rounded-full text-lg"
            >
              <MessageCircle className="w-5 h-5 mr-3" />
              Chat with Us
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold">150+</div>
              <div className="opacity-90">Happy Surfers</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold">4.9★</div>
              <div className="opacity-90">Average Rating</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold">3</div>
              <div className="opacity-90">World-Class Breaks</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;