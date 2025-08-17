import { Play } from "lucide-react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop",
    alt: "Surfer riding wave at sunset"
  },
  {
    src: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=600&h=400&fit=crop", 
    alt: "Beach sunset at Weligama"
  },
  {
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
    alt: "Group dinner at surf camp"
  },
  {
    src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
    alt: "Yoga session on the beach"
  },
  {
    src: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop",
    alt: "Surf action at Midigama"
  },
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop",
    alt: "Perfect barrel wave"
  }
];

const GallerySection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-ocean-deep">
            Life at Surfing Ceylon
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the magic through our lens - from epic waves to unforgettable moments with our surf family
          </p>
        </div>
        
        {/* Featured Video */}
        <div className="relative mb-16 rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
          <img 
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=675&fit=crop"
            alt="Surfing Ceylon video preview"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="group cursor-pointer">
              <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Play className="w-8 h-8 text-ocean-deep ml-1" />
              </div>
              <p className="text-white mt-4 text-center font-semibold">Watch Our Story</p>
            </div>
          </div>
        </div>
        
        {/* Image Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer"
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
        
        {/* Instagram CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Follow our adventure on Instagram</p>
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform cursor-pointer">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @SurfingCeylon
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;