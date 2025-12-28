import { theme } from "../theme/colors";

const ExhibitorCard = ({ exhibitor }) => {
  return (
    <div
      className="text-center p-4 sm:p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
      style={{
        backgroundColor: "#FFFFFF",
        border: "1px solid #AAC4F5",
        width: 230,
        minWidth: 150,
      }}
    >
      <img
        src={exhibitor.logo}
        alt={exhibitor.name}
        className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 object-cover rounded-lg"
      />
      <h3 className="text-lg font-semibold" style={{ color: "#0F172A" }}>
        {exhibitor.name}
      </h3>
    </div>
  );
};

export default ExhibitorCard;
