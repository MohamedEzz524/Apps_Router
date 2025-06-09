import { FaMoon, FaSun } from 'react-icons/fa';
import logo from '../assets/GradLogo.png';
import useTheme from '../hooks/useTheme';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-sidebar border-accentSecondary/20 flex min-h-15 w-[calc(100%-10px)] items-center justify-between rounded-b-md border-b px-4 py-2 shadow-md backdrop-blur-md">
      <img
        src={logo}
        alt="LogoIcon"
        className="shadow-shadowGlow size-10 rounded-full border-2"
      />
      <button
        type="button"
        onClick={toggleTheme}
        className="trans-colors rounded-full p-2 hover:bg-[var(--accent-primary)]/10 focus:outline-none"
      >
        {theme === 'dark' ? (
          <FaSun className="text-iconSecondary" size={20} />
        ) : (
          <FaMoon className="text-iconPrimary" size={20} />
        )}
      </button>
    </header>
  );
};

export default Header;
