import { FaMoon, FaSun } from 'react-icons/fa';
import useTheme from '../../hooks/useTheme';

const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <li
      aria-label={`Toggle Theme To ${theme === 'dark' ? 'light' : 'dark'}`}
      onClick={toggleTheme}
      className="trans-colors text-accentPrimary gray-hover cursor-pointer rounded-full p-2.5 focus:outline-none"
    >
      {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
    </li>
  );
};

export default ThemeButton;
