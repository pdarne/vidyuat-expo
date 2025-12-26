import { theme } from "../theme/colors";

const FloatingCTA = () => {
  const handleRegisterClick = () => {
    window.open("https://forms.gle/TTdwwBfPf9JodSRK8", "_blank");
  };

  return (
    <button
      onClick={handleRegisterClick}
      className="btn-primary px-3 py-2 sm:px-5 sm:py-4 text-white font-semibold rounded-xl shadow-lg hover-lift transition-all duration-300 fixed bottom-4 right-4 sm:bottom-6 sm:right-9 z-50 text-sm sm:text-base"
    >
      Register Now
    </button>
  );
};

export default FloatingCTA;