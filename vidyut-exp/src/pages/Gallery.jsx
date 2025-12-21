import { useState } from 'react';
import { theme } from '../theme/colors';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('photos');
  const [selectedImage, setSelectedImage] = useState(null);

  const photos = [
    { id: 1, title: 'Inaugural Ceremony - Vidyut Expo 2023', url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&h=300&fit=crop', date: '15 March 2023', location: 'Main Auditorium' },
    { id: 2, title: 'Technology Innovation Pavilion', url: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&h=300&fit=crop', date: '16 March 2023', location: 'Hall A' },
    { id: 3, title: 'Industry Leaders Summit', url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=500&h=300&fit=crop', date: '16 March 2023', location: 'Conference Room 1' },
    { id: 4, title: 'Product Demonstration Arena', url: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=500&h=300&fit=crop', date: '17 March 2023', location: 'Demo Zone' },
    { id: 5, title: 'Excellence Awards Ceremony', url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&h=300&fit=crop', date: '17 March 2023', location: 'Main Auditorium' },
    { id: 6, title: 'Technical Workshop Sessions', url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&h=300&fit=crop', date: '18 March 2023', location: 'Workshop Hall' }
  ];

  const videos = [
    { id: 1, title: 'Official Highlights - Vidyut Expo 2023', thumbnail: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&h=300&fit=crop', duration: '5:30', date: 'March 2023' },
    { id: 2, title: 'Ministerial Address & Policy Announcements', thumbnail: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=500&h=300&fit=crop', duration: '18:45', date: 'March 2023' },
    { id: 3, title: 'Innovation Showcase Documentary', thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&h=300&fit=crop', duration: '12:15', date: 'March 2023' },
    { id: 4, title: 'Success Stories & Case Studies', thumbnail: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=500&h=300&fit=crop', duration: '15:20', date: 'March 2023' }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Official Header */}
        <div className="bg-white border-l-4 p-8 mb-8 shadow-sm" style={{ borderColor: theme.primary[600] }}>
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full mr-4 flex items-center justify-center text-white font-bold" style={{ backgroundColor: theme.primary[600] }}>
              VE
            </div>
            <div>
              <h1 className="text-3xl font-bold" style={{ color: theme.primary[700] }}>
                VIDYUT EXPO - OFFICIAL GALLERY
              </h1>
              <p className="text-sm font-medium" style={{ color: theme.neutral[600] }}>
                Government of India | Ministry of Power & Renewable Energy
              </p>
            </div>
          </div>
          <p className="text-base leading-relaxed" style={{ color: theme.neutral[700] }}>
            Official documentation of India's premier technology and innovation exhibition showcasing advancements in power sector, renewable energy, and sustainable development initiatives.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white shadow-sm mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex">
              {[
                { key: 'photos', label: 'Photographs', count: photos.length },
                { key: 'videos', label: 'Video Documentation', count: videos.length }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-8 py-4 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === tab.key 
                      ? 'border-blue-600 text-blue-600' 
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label} ({tab.count})
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Photos Section */}
        {activeTab === 'photos' && (
          <div className="space-y-6">
            <div className="bg-white shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold" style={{ color: theme.primary[700] }}>Event Photography Archive</h2>
                <p className="text-sm mt-1" style={{ color: theme.neutral[600] }}>Official photographs from Vidyut Expo 2023</p>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {photos.map((photo) => (
                    <div 
                      key={photo.id} 
                      className="group relative bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-200 cursor-pointer"
                      onClick={() => setSelectedImage(photo)}
                    >
                      <div className="aspect-w-4 aspect-h-3">
                        <img 
                          src={photo.url} 
                          alt={photo.title}
                          className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-200"
                        />
                      </div>
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-200"></div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3">
                        <h3 className="text-white text-xs font-medium leading-tight">{photo.title}</h3>
                        <p className="text-white text-xs opacity-80 mt-1">{photo.date}</p>
                      </div>
                      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md">
                          <svg className="w-3 h-3" style={{ color: theme.primary[600] }} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Statistics Footer */}
              <div className="bg-gray-50 px-6 py-4 border-t">
                <div className="flex justify-between items-center text-sm">
                  <span style={{ color: theme.neutral[600] }}>Total Images: {photos.length}</span>
                  <span style={{ color: theme.neutral[600] }}>Event Duration: 15-18 March 2023</span>
                  <span style={{ color: theme.neutral[600] }}>Official Documentation</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Videos Section */}
        {activeTab === 'videos' && (
          <div className="space-y-6">
            <div className="bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4" style={{ color: theme.primary[700] }}>
                Official Video Documentation
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {videos.map((video) => (
                  <div key={video.id} className="border border-gray-200 bg-white hover:shadow-md transition-shadow">
                    <div className="relative">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
                          <svg className="w-6 h-6 ml-1" style={{ color: theme.primary[600] }} fill="currentColor" viewBox="0 0 20 20">
                            <path d="M8 5v10l8-5-8-5z"/>
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 text-xs rounded">
                        {video.duration}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-sm mb-2" style={{ color: theme.neutral[800] }}>
                        {video.title}
                      </h3>
                      <div className="text-xs space-y-1" style={{ color: theme.neutral[600] }}>
                        <div className="flex justify-between">
                          <span>Duration:</span>
                          <span className="font-medium">{video.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Published:</span>
                          <span className="font-medium">{video.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Official Footer */}
        <div className="bg-white border-t-4 p-6 mt-12 shadow-sm" style={{ borderColor: theme.primary[600] }}>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2" style={{ color: theme.primary[700] }}>
              Participate in Vidyut Expo 2024
            </h3>
            <p className="text-sm mb-4" style={{ color: theme.neutral[600] }}>
              Join India's largest technology exhibition and contribute to the nation's sustainable development goals
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button 
                className="px-6 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm hover:opacity-90 transition-opacity"
                style={{ backgroundColor: theme.primary[600] }}
              >
                Register as Participant
              </button>
              <button 
                className="px-6 py-2 text-sm font-medium border rounded-md shadow-sm hover:bg-gray-50 transition-colors"
                style={{ borderColor: theme.primary[600], color: theme.primary[600] }}
              >
                Download Brochure
              </button>
            </div>
          </div>
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
            <div className="relative max-w-4xl max-h-full bg-white rounded-lg overflow-hidden">
              <img 
                src={selectedImage.url} 
                alt={selectedImage.title}
                className="max-w-full max-h-96 object-contain"
              />
              <div className="p-4 border-t">
                <h3 className="font-semibold text-lg mb-2" style={{ color: theme.neutral[800] }}>
                  {selectedImage.title}
                </h3>
                <div className="text-sm space-y-1" style={{ color: theme.neutral[600] }}>
                  <div><strong>Date:</strong> {selectedImage.date}</div>
                  <div><strong>Location:</strong> {selectedImage.location}</div>
                </div>
              </div>
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;