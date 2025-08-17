import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PackagesSection from "@/components/PackagesSection";
import AccommodationSection from "@/components/AccommodationSection";
import SurfLessonsSection from "@/components/SurfLessonsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ReviewsSection from "@/components/ReviewsSection";
import GallerySection from "@/components/GallerySection";
import LocationSection from "@/components/LocationSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <PackagesSection />
      <AccommodationSection />
      <SurfLessonsSection />
      <WhyChooseUsSection />
      <ReviewsSection />
      <GallerySection />
      <LocationSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;