import { MapPin, Users, Waves } from "lucide-react";
import aerialImage from "@/assets/aerial-surf-spots.jpg";

const AboutSection = () => {
  return (
    <section className="py-20 bg-sand-warm wave-divider">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-ocean-deep">
              About Surfing Ceylon
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Nestled between the stunning surf spots of <strong>Weligama, Midigama, and Kabalana</strong>, 
                Surfing Ceylon is your gateway to the ultimate surf and travel experience along Sri Lanka's southern coast.
              </p>
              
              <p>
                Our surf camp is perfectly positioned for wave chasers and beach lovers, offering access to some of the 
                best surf breaks and local culture. With accommodation options and surf packages tailored for every level, 
                from beginners to advanced surfers, we're more than just a place to stay.
              </p>
              
              <p>
                Our community embraces travelers from around the world, creating a lively atmosphere where surf enthusiasts, 
                adventurers, and wanderers can connect, share stories, and enjoy the ocean lifestyle.
              </p>
              
              <p>
                Located just a stone's throw away from the beach, our retreat is tucked away to provide a serene and relaxed 
                environment, while still being close enough for you to paddle out to the waves in no time.
              </p>
            </div>
            
            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <div className="text-center">
                <div className="w-16 h-16 bg-ocean-bright rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-ocean-deep mb-2">Prime Location</h3>
                <p className="text-sm text-gray-600">Between 3 world-class surf spots</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-coral-sunset rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-ocean-deep mb-2">Community</h3>
                <p className="text-sm text-gray-600">Connect with fellow travelers</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-ocean-deep rounded-full flex items-center justify-center mx-auto mb-4">
                  <Waves className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-ocean-deep mb-2">All Levels</h3>
                <p className="text-sm text-gray-600">Beginner to advanced surfers</p>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <img 
              src={aerialImage} 
              alt="Aerial view of Weligama surf spots" 
              className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;