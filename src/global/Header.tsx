import Logo from '../components/global/Logo';
import ThemeButton from '../components/global/ThemeButton';
import ToggleMenu from '../components/global/ToggleMenu';

interface HeaderProps {
  isCollapsed: boolean;
  toggle: () => void;
}

const Header = ({ isCollapsed, toggle }: HeaderProps) => {
  return (
    <header className="bg-sidebar fixed top-0 left-0 flex min-h-15 w-full items-center justify-between border-b border-gray-200 px-4 py-2 dark:border-gray-800">
      <Logo />

      <ul className="flex items-center">
        <ThemeButton />
        <ToggleMenu toggle={toggle} isCollapsed={isCollapsed} />
      </ul>
    </header>
  );
};

export default Header;
