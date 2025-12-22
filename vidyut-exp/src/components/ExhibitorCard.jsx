import { theme } from '../theme/colors';

const ExhibitorCard = ({ exhibitor }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
      {exhibitor.logo.endsWith('.svg') || exhibitor.logo.includes('orient') ? (
        <img 
          src={exhibitor.logo} 
          alt={exhibitor.name}
          className="w-20 h-20 mx-auto mb-4 object-contain"
        />
      ) : (
        <div 
          className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold"
          style={{ backgroundColor: theme.primary[500] }}
        >
          {exhibitor.name.split(' ').map(word => word[0]).join('').slice(0, 2)}
        </div>
      )}
      <h3 className="text-lg font-semibold" style={{ color: theme.neutral[800] }}>
        {exhibitor.name}
      </h3>
    </div>
  );
};

export default ExhibitorCard;