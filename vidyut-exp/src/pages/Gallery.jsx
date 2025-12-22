import { theme } from '../theme/colors';
import FloatingCTA from '../components/FloatingCTA';
import { galleryCategories } from '../data/constants';
import content1 from "../assets/content/content-1.jpeg";
import content2 from "../assets/content/content-2.jpeg";
import content3 from "../assets/content/content-3.jpeg";
import content4 from "../assets/content/content-4.jpeg";
import content5 from "../assets/content/content-5.jpeg";
import content6 from "../assets/content/content-6.jpeg";
import content7 from "../assets/content/content-7.jpeg";
import content8 from "../assets/content/content-8.jpeg";

const Gallery = () => {
  const images = [
    { src: content1, category: 'Electrical Infrastructure', title: 'Power Distribution Systems' },
    { src: content2, category: 'Renewable Energy', title: 'Solar Panel Installation' },
    { src: content3, category: 'Panels & Switchgear', title: 'Control Panel Manufacturing' },
    { src: content4, category: 'Smart Energy & IoT', title: 'Smart Grid Technology' },
    { src: content5, category: 'Electrical Infrastructure', title: 'Transformer Installation' },
    { src: content6, category: 'Renewable Energy', title: 'Wind Energy Solutions' },
    { src: content7, category: 'Panels & Switchgear', title: 'Electrical Safety Equipment' },
    { src: content8, category: 'Smart Energy & IoT', title: 'Energy Management Systems' }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6" style={{ color: theme.primary[700] }}>
            Gallery
          </h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: theme.neutral[600] }}>
            Explore the world of electrical innovations and technologies
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {galleryCategories.map((category, idx) => (
            <button
              key={idx}
              className="px-6 py-3 rounded-full font-medium transition-all hover:scale-105"
              style={{
                backgroundColor: theme.primary[100],
                color: theme.primary[700],
                border: `2px solid ${theme.primary[300]}`
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Gallery */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {images.map((image, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={image.src} 
                alt={image.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <span 
                  className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-2"
                  style={{
                    backgroundColor: theme.secondary[100],
                    color: theme.secondary[700]
                  }}
                >
                  {image.category}
                </span>
                <h3 className="font-semibold" style={{ color: theme.neutral[800] }}>
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Video Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-8" style={{ color: theme.primary[700] }}>
            Event Videos
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <span className="text-gray-600 font-medium">[Expo Highlights Video]</span>
            </div>
            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <span className="text-gray-600 font-medium">[Technical Seminars Video]</span>
            </div>
          </div>
        </div>
      </div>
      
      <FloatingCTA />
    </div>
  );
};

export default Gallery;