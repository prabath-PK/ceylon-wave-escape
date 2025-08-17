import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Clock, Trophy, Camera } from "lucide-react";
import surfLessonsImage from "@/assets/surf-lessons-group.jpg";

const levels = [
  {
    level: "Beginner",
    color: "bg-green-500",
    description: "Perfect for first-time surfers. Learn water safety, paddling, and catching your first waves.",
    duration: "2 hours",
    groupSize: "4-6 people",
    includes: ["Professional instructor", "Surfboard & wetsuit", "Beach safety briefing", "Photos of your session"]
  },
  {
    level: "Intermediate", 
    color: "bg-orange-500",
    description: "Take your surfing to the next level. Focus on technique, wave selection, and turning.",
    duration: "2.5 hours",
    groupSize: "3-4 people", 
    includes: ["Advanced technique coaching", "Video analysis", "Wave reading skills", "Equipment upgrade options"]
  },
  {
    level: "Advanced",
    color: "bg-red-500", 
    description: "Master advanced maneuvers and tackle bigger waves with expert guidance.",
    duration: "3 hours",
    groupSize: "2-3 people",
    includes: ["Elite coaching", "Big wave preparation", "Competitive techniques", "Personalized training plan"]
  }
];

const SurfLessonsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-ocean-deep">
            Surf Lessons for Every Level
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our experienced local instructors will help you progress from beginner to advanced, 
            ensuring you have the best surf experience possible
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <img 
              src={surfLessonsImage} 
              alt="Surf lessons with instructor" 
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>
          
          {/* Content */}
          <div className="order-1 lg:order-2">
            <h3 className="text-3xl font-bold mb-8 text-ocean-deep">
              Learn from the Best
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-ocean-bright rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Expert Local Instructors</h4>
                  <p className="text-gray-600">Certified instructors with years of experience teaching in Sri Lankan waters</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-coral-sunset rounded-full flex items-center justify-center flex-shrink-0">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Proven Teaching Methods</h4>
                  <p className="text-gray-600">Step-by-step progression system that gets you standing on waves quickly and safely</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-ocean-deep rounded-full flex items-center justify-center flex-shrink-0">
                  <Camera className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Photo & Video Analysis</h4>
                  <p className="text-gray-600">Capture your progress and review techniques with professional video analysis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Lesson Levels */}
        <div className="grid md:grid-cols-3 gap-8">
          {levels.map((levelData, index) => (
            <div key={index} className="card-surf bg-white p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-4 h-4 ${levelData.color} rounded-full`}></div>
                <Badge variant="outline" className="text-ocean-deep border-ocean-bright">
                  {levelData.level}
                </Badge>
              </div>
              
              <h3 className="text-xl font-bold text-ocean-deep mb-4">{levelData.level} Lessons</h3>
              <p className="text-gray-600 mb-6">{levelData.description}</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-ocean-bright" />
                  <span className="text-sm text-gray-700">{levelData.duration} per session</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-4 h-4 text-ocean-bright" />
                  <span className="text-sm text-gray-700">{levelData.groupSize} max</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">What's Included:</h4>
                <ul className="space-y-1">
                  {levelData.includes.map((item, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="text-ocean-bright mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <Button className="w-full btn-ocean">
                Book {levelData.level} Lesson
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SurfLessonsSection;