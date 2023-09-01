import paths from '@/constants/paths';
import { useNavigate } from 'react-router-dom';
import './Home.style.scss';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="home__container">
      <span className="home__title">
        This is my solution to the task about Cat API{' '}
      </span>
      <span className="home__description">
        To view the categories, click on the button.
      </span>
      <button
        className="home__button"
        onClick={() => navigate(paths.CATEGORIES)}
      >
        Click Me
      </button>
    </div>
  );
};

export default Home;
