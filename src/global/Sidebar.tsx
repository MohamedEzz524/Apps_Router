import { useLocation } from 'react-router-dom';
import routes from '../apps/Exportation';
import ImgTitle from '../components/sidebar/ImgTitle';
import ImgTitleResponsive from '../components/sidebar/ImgTitleResponsive';
import NavItem from '../components/sidebar/NavItem';

interface SidebarProps {
  isCollapsed: boolean;
}

const Sidebar = ({ isCollapsed }: SidebarProps) => {
  const location = useLocation(); // Get current route location

  return (
    <aside
      className={`bg-sidebar fixed top-15 right-0 z-10 h-full border-l border-gray-200 shadow-lg dark:border-gray-800 ${isCollapsed ? 'w-20 min-w-20' : 'w-62.5 min-w-62.5'} overflow-y-auto py-4 transition-[width,min-width] duration-300`}
    >
      <nav>
        {!isCollapsed ? <ImgTitle /> : <ImgTitleResponsive />}
        <ul>
          {routes.map(({ path, title, icon }) => {
            const isActive = location.pathname === path;
            return (
              <NavItem
                key={path}
                path={path}
                icon={icon}
                title={title}
                active={isActive}
                isCollapsed={isCollapsed}
              />
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
