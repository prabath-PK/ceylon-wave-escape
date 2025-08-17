import { MapPin, Plane, Train, Car } from "lucide-react";
import { Button } from "@/components/ui/button";

const LocationSection = () => {
  return (
    <section className="py-20 bg-sand-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-ocean-deep">
            Find Us in Paradise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Located in the heart of Sri Lanka's surf coast, we're perfectly positioned between the world-famous breaks
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Map */}
          <div className="relative">
            <div className="bg-white p-4 rounded-2xl shadow-xl">
              <div className="aspect-video bg-ocean-light/20 rounded-xl flex items-center justify-center mb-4">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-ocean-bright mx-auto mb-4" />
                  <p className="text-ocean-deep font-semibold">Interactive Map</p>
                  <p className="text-gray-600 text-sm">Weligama - Midigama - Kabalana</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>📍 Southern Province, Sri Lanka</span>
                <Button size="sm" className="btn-ocean">
                  View on Google Maps
                </Button>
              </div>
            </div>
            
            {/* Location Highlights */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 bg-white rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-ocean-bright">5 min</div>
                <div className="text-sm text-gray-600">to Weligama Bay</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-coral-sunset">3 min</div>
                <div className="text-sm text-gray-600">to Midigama</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-ocean-deep">7 min</div>
                <div className="text-sm text-gray-600">to Kabalana</div>
              </div>
            </div>
          </div>
          
          {/* Getting Here */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-ocean-deep">
              Getting Here is Easy
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-ocean-bright rounded-full flex items-center justify-center flex-shrink-0">
                  <Plane className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">From Airport</h4>
                  <p className="text-gray-600 mb-3">
                    Bandaranaike International Airport (CMB) - 2.5 hours drive. 
                    We offer airport transfer services for all our guests.
                  </p>
                  <div className="text-sm text-ocean-bright font-semibold">
                    Transfer available: $45 per person
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-coral-sunset rounded-full flex items-center justify-center flex-shrink-0">
                  <Train className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">By Train</h4>
                  <p className="text-gray-600 mb-3">
                    Take the scenic coastal railway to Weligama station. 
                    We'll pick you up from the station - just 10 minutes away.
                  </p>
                  <div className="text-sm text-ocean-bright font-semibold">
                    Free pickup from Weligama station
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-ocean-deep rounded-full flex items-center justify-center flex-shrink-0">
                  <Car className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">By Car/Tuk-tuk</h4>
                  <p className="text-gray-600 mb-3">
                    Take the A2 coastal highway to Weligama, then follow signs to Midigama. 
                    Parking available on-site.
                  </p>
                  <div className="text-sm text-ocean-bright font-semibold">
                    GPS: 5.9716° N, 80.4150° E
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-ocean-bright to-ocean-deep rounded-xl text-white">
              <h4 className="font-bold mb-3">Need Help Planning Your Journey?</h4>
              <p className="mb-4 opacity-90">
                Our team is here to help you plan the perfect trip to Sri Lanka. 
                We can arrange transfers, recommend travel routes, and answer any questions.
              </p>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-ocean-deep">
                Contact Our Travel Team
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;