import { Button } from "@/components/ui/button";
import { Wifi, Car, Coffee, Utensils, Wind, Dumbbell } from "lucide-react";
import accommodationImage from "@/assets/accommodation-surf-camp.jpg";

const amenities = [
  { icon: Wifi, label: "Free WiFi" },
  { icon: Car, label: "Airport Transfer" },
  { icon: Coffee, label: "Common Areas" },
  { icon: Utensils, label: "Shared Kitchen" },
  { icon: Wind, label: "Air Conditioning" },
  { icon: Dumbbell, label: "Yoga Deck" },
];

const rooms = [
  {
    title: "Shared Dorm",
    description: "Comfortable bunk beds in shared rooms with AC and lockers",
    price: "$25/night",
    image: "https://images.unsplash.com/photo-1555854877-bab0e299b8cd?w=300&h=200&fit=crop"
  },
  {
    title: "Private Room",
    description: "Cozy private rooms with double bed and private bathroom",
    price: "$65/night", 
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=300&h=200&fit=crop"
  },
  {
    title: "Beachfront Bungalow",
    description: "Premium eco bungalows just steps from the beach",
    price: "$120/night",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=300&h=200&fit=crop"
  }
];

const AccommodationSection = () => {
  return (
    <section className="py-20 bg-sand-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-ocean-deep">
            Stay in Paradise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From budget-friendly dorms to premium beachfront bungalows, we have the perfect accommodation for every traveler
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Main accommodation image */}
          <div className="relative">
            <img 
              src={accommodationImage} 
              alt="Surfing Ceylon accommodation" 
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
          
          {/* Amenities */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-ocean-deep">
              Everything You Need
            </h3>
            
            <div className="grid grid-cols-2 gap-6">
              {amenities.map((amenity, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-ocean-bright rounded-full flex items-center justify-center">
                    <amenity.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-medium text-gray-700">{amenity.label}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-white/80 rounded-xl backdrop-blur-sm">
              <h4 className="font-bold text-ocean-deep mb-3">What's Included</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Daily breakfast at our beachfront café</li>
                <li>• Access to yoga deck and meditation area</li>
                <li>• Complimentary surfboard storage</li>
                <li>• 24/7 security and reception</li>
                <li>• Laundry facilities</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Room Types */}
        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div key={index} className="card-surf bg-white">
              <img 
                src={room.image} 
                alt={room.title}
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-ocean-deep">{room.title}</h3>
                  <span className="text-lg font-bold text-coral-sunset">{room.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{room.description}</p>
                <Button className="w-full btn-ocean">
                  Check Availability
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccommodationSection;