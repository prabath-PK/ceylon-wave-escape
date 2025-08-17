import { Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const reviews = [
  {
    name: "Emma Thompson",
    location: "Australia", 
    rating: 5,
    text: "Amazing experience! The instructors were so patient and knowledgeable. I went from never surfing to catching waves on my own in just 3 days. The accommodation was clean and the community vibe was incredible.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Marcus Silva",
    location: "Brazil",
    rating: 5, 
    text: "As an intermediate surfer, I was looking to improve my skills. The advanced coaching here took my surfing to the next level. The breaks around Weligama are world-class and the local knowledge is priceless.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Lily Chen",
    location: "Singapore",
    rating: 5,
    text: "Perfect for solo female travelers! I felt safe and welcome from day one. Made lifelong friends and learned to surf in the most beautiful setting. The sunrise sessions were magical.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Jake Williams",
    location: "UK", 
    rating: 5,
    text: "Been to surf camps around the world, but Surfing Ceylon stands out. The combination of great waves, authentic culture, amazing food, and genuine hospitality makes this place special.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  }
];

const ReviewsSection = () => {
  return (
    <section className="py-20 bg-sand-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-ocean-deep">
            What Our Surfers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from the amazing people who've experienced the magic of Surfing Ceylon
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {reviews.map((review, index) => (
            <div key={index} className="card-surf bg-white p-6">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold text-ocean-deep">{review.name}</h3>
                  <p className="text-sm text-gray-600">{review.location}</p>
                </div>
              </div>
              
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-coral-sunset text-coral-sunset" />
                ))}
              </div>
              
              <div className="relative">
                <Quote className="w-6 h-6 text-ocean-light absolute -top-2 -left-1" />
                <p className="text-gray-700 leading-relaxed pl-6 italic">
                  "{review.text}"
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-coral-sunset text-coral-sunset" />
              ))}
            </div>
            <span className="font-bold text-ocean-deep">4.9/5</span>
            <span className="text-gray-600">based on 150+ reviews</span>
          </div>
          
          <Button variant="outline" className="border-ocean-bright text-ocean-bright hover:bg-ocean-bright hover:text-white">
            Read All Reviews
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;