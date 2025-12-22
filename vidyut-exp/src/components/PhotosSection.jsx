import { theme } from "../theme/colors";

const PhotosSection = ({ photos, setSelectedImage }) => {
  return (
    <div className="space-y-6">
      <div className="bg-white shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h2
            className="text-xl font-semibold"
            style={{ color: theme.primary[700] }}
          >
            Event Photography Archive
          </h2>
          <p
            className="text-sm mt-1"
            style={{ color: theme.neutral[600] }}
          >
            Official photographs from Vidyut Expo 2023
          </p>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="group relative bg-gray-200 border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-200 cursor-pointer aspect-[3/2]"
                onClick={() => setSelectedImage(photo)}
              >
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <h3 className="text-white text-xs font-medium leading-tight">
                    {photo.title}
                  </h3>
                  <p className="text-white text-xs opacity-80 mt-1">
                    {photo.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 px-6 py-4 border-t">
          <div className="flex justify-between items-center text-sm">
            <span style={{ color: theme.neutral[600] }}>
              Total Images: {photos.length}
            </span>
            <span style={{ color: theme.neutral[600] }}>
              Event Duration: 15-18 March 2023
            </span>
            <span style={{ color: theme.neutral[600] }}>
              Official Documentation
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotosSection;