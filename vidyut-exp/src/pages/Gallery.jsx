
import { useState } from "react";
import content1 from "../assets/content/content-1.jpeg";
import content2 from "../assets/content/content-2.jpeg";
import content3 from "../assets/content/content-3.jpeg";
import content4 from "../assets/content/content-4.jpeg";
import content5 from "../assets/content/content-5.jpeg";
import content6 from "../assets/content/content-6.jpeg";
import content7 from "../assets/content/content-7.jpeg";
import content8 from "../assets/content/content-8.jpeg";
import GalleryHeader from "../components/GalleryHeader";
import GalleryTabs from "../components/GalleryTabs";
import PhotosSection from "../components/PhotosSection";
import VideosSection from "../components/VideosSection";
import GalleryFooter from "../components/GalleryFooter";
import FloatingCTA from "../components/FloatingCTA";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("photos");
  const [selectedImage, setSelectedImage] = useState(null);

  const photos = [
    { id: 4, title: "Networking & Business Meetings", url: content7, date: "18 March 2023", location: "Business Lounge" },
    { id: 5, title: "Industry Leaders Summit", url: content3, date: "16 March 2023", location: "Conference Room 1" },
    { id: 8, title: "Technical Workshop Sessions", url: content6, date: "18 March 2023", location: "Workshop Hall" },
    { id: 7, title: "Closing Ceremony", url: content8, date: "18 March 2023", location: "Main Auditorium" },
    { id: 2, title: "Product Demonstration Arena", url: content4, date: "17 March 2023", location: "Demo Zone" },
    { id: 6, title: "Excellence Awards Ceremony", url: content5, date: "17 March 2023", location: "Main Auditorium" },
    { id: 3, title: "Inaugural Ceremony - Vidyut Expo 2023", url: content1, date: "15 March 2023", location: "Main Auditorium" },
    { id: 1, title: "Technology Innovation Pavilion", url: content2, date: "16 March 2023", location: "Hall A" },
  ];

  const videos = [
    { id: 1, title: "Official Highlights - Vidyut Expo 2023", thumbnail: content5, duration: "5:30", date: "March 2023" },
    { id: 2, title: "Ministerial Address & Policy Announcements", thumbnail: content6, duration: "18:45", date: "March 2023" },
    { id: 3, title: "Innovation Showcase Documentary", thumbnail: content7, duration: "12:15", date: "March 2023" },
    { id: 4, title: "Success Stories & Case Studies", thumbnail: content8, duration: "15:20", date: "March 2023" }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <GalleryHeader />
        
        <GalleryTabs 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          tabs={[
            { key: "photos", label: "Photographs", count: photos.length },
            { key: "videos", label: "Video Documentation", count: videos.length },
          ]}
        />

        {activeTab === "photos" && (
          <PhotosSection photos={photos} setSelectedImage={setSelectedImage} />
        )}

        {activeTab === "videos" && (
          <VideosSection videos={videos} />
        )}
      </div>
      
      <GalleryFooter />
      <FloatingCTA />
    </div>
  );
                      

       
};

export default Gallery;
