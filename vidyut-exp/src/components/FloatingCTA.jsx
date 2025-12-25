import { theme } from "../theme/colors";

const FloatingCTA = () => {
  const handleRegisterClick = () => {
    window.open("https://forms.gle/TTdwwBfPf9JodSRK8", "_blank");
  };

  return (
    <button
      onClick={handleRegisterClick}
      className="btn-primary px-5 py-4 text-white font-semibold rounded-xl shadow-lg hover-lift transition-all duration-300 fixed bottom-6 right-9 z-50"
    >
      Register Now
    </button>
  );
};

export default FloatingCTA;