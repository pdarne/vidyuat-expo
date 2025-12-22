import { theme } from "../theme/colors";

const ActionButtons = ({ className = "" }) => {
  const handleRegisterClick = () => {
    window.open("https://forms.gle/TTdwwBfPf9JodSRK8", "_blank");
  };

  return (
    <div className={`flex flex-wrap justify-center gap-3 sm:gap-4 ${className}`}>
      <button
        onClick={handleRegisterClick}
        className="px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-3 rounded-lg font-semibold text-center transition-transform hover:scale-105 text-sm sm:text-base"
        style={{ backgroundColor: theme.accent[500], color: "white" }}
      >
        Register Now
      </button>
     
    </div>
  );
};

export default ActionButtons;