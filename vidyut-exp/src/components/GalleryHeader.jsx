import { theme } from "../theme/colors";

const GalleryHeader = () => {
  return (
    <div
      className="bg-white border-l-4 p-8 mb-8 shadow-sm"
      style={{ borderColor: theme.primary[600] }}
    >
      <div className="flex items-center mb-4">
        <div
          className="w-12 h-12 rounded-full mr-4 flex items-center justify-center text-white font-bold"
          style={{ backgroundColor: theme.primary[600] }}
        >
          VE
        </div>
        <div>
          <h1
            className="text-3xl font-bold"
            style={{ color: theme.primary[700] }}
          >
            VIDYUT EXPO - OFFICIAL GALLERY
          </h1>
          <p
            className="text-sm font-medium"
            style={{ color: theme.neutral[600] }}
          >
            Government of India | Ministry of Power & Renewable Energy
          </p>
        </div>
      </div>
      <p
        className="text-base leading-relaxed"
        style={{ color: theme.neutral[700] }}
      >
        Official documentation of India's premier technology and innovation
        exhibition showcasing advancements in power sector, renewable
        energy, and sustainable development initiatives.
      </p>
    </div>
  );
};

export default GalleryHeader;