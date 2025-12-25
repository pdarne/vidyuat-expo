import { Link } from 'react-router-dom';

const ActionButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <Link
        to="/register"
        className="btn-primary px-8 py-4 text-white font-semibold rounded-xl shadow-lg hover-lift transition-all duration-300"
      >
        Register Free
      </Link>
      
    </div>
  );
};

export default ActionButtons;