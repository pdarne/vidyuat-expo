import { theme } from "../theme/colors";

const FloatingCTA = () => {
  const handleRegisterClick = () => {
    window.open("https://forms.gle/TTdwwBfPf9JodSRK8", "_blank");
  };

  return (
    <button
      onClick={handleRegisterClick}
      className="fixed bottom-6 right-6 px-6 py-3 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 z-50"
      style={{ backgroundColor: theme.accent[500] }}
    >
      Register Now
    </button>
  );
};

export default FloatingCTA;