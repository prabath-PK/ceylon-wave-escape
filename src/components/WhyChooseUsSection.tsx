import { MapPin, Leaf, Users, Award, Heart, Sparkles } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Prime Location",
    description: "Easy access to Weligama, Midigama, and Kabalana surf points - the best waves on Sri Lanka's south coast."
  },
  {
    icon: Leaf, 
    title: "Eco-Friendly Vibe",
    description: "Stay in our eco-conscious surf camp with sustainable practices and minimal environmental impact."
  },
  {
    icon: Award,
    title: "Surf + Stay Packages", 
    description: "Combine accommodation with tailored surf lessons designed for your skill level and goals."
  },
  {
    icon: Users,
    title: "Community & Culture",
    description: "Meet fellow travelers and feel at home in our diverse, welcoming surf community."
  },
  {
    icon: Heart,
    title: "Local Expertise",
    description: "Our team knows the best breaks, conditions, and hidden gems along the Sri Lankan coast."
  },
  {
    icon: Sparkles,
    title: "Complete Experience",
    description: "Ride waves, savor delicious Sri Lankan cuisine, and experience our warm Surfing Ceylon family!"
  }
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-20 bg-ocean-gradient text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose Surfing Ceylon?
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            We're not just another surf school - we're your gateway to the authentic Sri Lankan surf experience
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group text-center p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="opacity-90 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-2xl font-light opacity-90">
            Come ride the waves, savor delicious Sri Lankan cuisine,<br />
            and experience the warmth of our Surfing Ceylon family!
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;