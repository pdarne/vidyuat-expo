import { theme } from '../theme/colors';

const ExhibitorCard = ({ exhibitor }) => {
  return (
    <div 
      className="text-center p-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-102 transition-all duration-300"
      style={{ backgroundColor: '#FFFFFF', border: '1px solid #AAC4F5' }}
    >
      <img 
        src={exhibitor.logo} 
        alt={exhibitor.name}
        className="w-16 h-16 mx-auto mb-4 object-contain"
      />
      <h3 className="text-lg font-semibold" style={{ color: '#0F172A' }}>
        {exhibitor.name}
      </h3>
    </div>
  );
};

export default ExhibitorCard;