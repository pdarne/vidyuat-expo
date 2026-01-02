import { theme } from "../theme/colors";

const QRCode = ({ url = "https://events.vidyutexponagpur.com/events/vidyut-expo-2026", size = 200, className = "" }) => {
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(url)}`;

  return (
    <div className={`text-center ${className}`}>
      <div className="bg-white p-4 rounded-lg shadow-lg inline-block">
        <img 
          src={qrCodeUrl} 
          alt="QR Code for Registration" 
          className="w-full h-full"
          style={{ width: `${size}px`, height: `${size}px` }}
        />
        <p className="mt-2 text-sm font-medium" style={{ color: theme.neutral[600] }}>
          Scan to Register
        </p>
      </div>
    </div>
  );
};

export default QRCode;