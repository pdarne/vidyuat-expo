import { theme } from "../theme/colors";

const VideosSection = ({ videos }) => {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 shadow-sm">
        <h2
          className="text-xl font-semibold mb-4"
          style={{ color: theme.primary[700] }}
        >
          Official Video Documentation
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="border border-gray-200 bg-white hover:shadow-md transition-shadow"
            >
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
                    <svg
                      className="w-6 h-6 ml-1"
                      style={{ color: theme.primary[600] }}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M8 5v10l8-5-8-5z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 text-xs rounded">
                  {video.duration}
                </div>
              </div>
              <div className="p-4">
                <h3
                  className="font-semibold text-sm mb-2"
                  style={{ color: theme.neutral[800] }}
                >
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
  );
};

export default VideosSection;