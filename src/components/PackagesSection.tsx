import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Star, Users, Calendar, Waves } from "lucide-react";

const packages = [
  {
    title: "Surf Starter",
    subtitle: "3 Nights + 3 Surf Lessons",
    price: "$299",
    duration: "3 Days",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
    features: [
      "3 nights accommodation",
      "3 beginner surf lessons",
      "Surfboard & wetsuit included",
      "Airport transfer",
      "Welcome dinner"
    ],
    popular: false
  },
  {
    title: "Wave Rider",
    subtitle: "7 Nights Surf & Stay",
    price: "$699",
    duration: "1 Week",
    image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=400&h=300&fit=crop",
    features: [
      "7 nights accommodation",
      "5 surf lessons (all levels)",
      "Daily breakfast included",
      "Yoga sessions",
      "Local excursions",
      "Equipment rental"
    ],
    popular: true
  },
  {
    title: "Ocean Master",
    subtitle: "Surf Only Experience",
    price: "$89",
    duration: "Per Day",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
    features: [
      "Professional instruction",
      "All equipment provided",
      "Video analysis",
      "Flexible timing",
      "Transport to breaks"
    ],
    popular: false
  },
  {
    title: "Island Explorer",
    subtitle: "14 Days Ultimate Package",
    price: "$1299",
    duration: "2 Weeks",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop",
    features: [
      "14 nights premium stay",
      "Unlimited surf lessons",
      "All meals included",
      "Island excursions",
      "Spa treatments",
      "Photography sessions"
    ],
    popular: false
  }
];

const PackagesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-ocean-deep">
            Surf & Stay Packages
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect combination of accommodation and surf lessons tailored to your level and goals
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, index) => (
            <Card key={index} className={`card-surf group relative ${pkg.popular ? 'ring-2 ring-coral-sunset' : ''}`}>
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-coral-sunset text-white px-6 py-2 rounded-full flex items-center gap-2">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-semibold">Most Popular</span>
                  </div>
                </div>
              )}
              
              <div 
                className="h-48 bg-cover bg-center rounded-t-2xl"
                style={{ backgroundImage: `url(${pkg.image})` }}
              />
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-ocean-deep">{pkg.title}</h3>
                    <p className="text-sm text-gray-600">{pkg.subtitle}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-coral-sunset">{pkg.price}</div>
                    <div className="text-sm text-gray-500">{pkg.duration}</div>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-ocean-bright flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className={`w-full ${pkg.popular ? 'btn-coral' : 'btn-ocean'}`}
                >
                  Book Package
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;