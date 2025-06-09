import { useLocation } from 'react-router-dom';
import routes from '../apps/Exportation';
import ImgTitle from '../components/sidebar/ImgTitle';
import ToggleMenu from '../components/sidebar/ToggleMenu';
import ImgTitleResponsive from '../components/sidebar/ImgTitleResponsive';
import { useState } from 'react';
import NavItem from '../components/sidebar/NavItem';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation(); // Get current route location

  const handleClose = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <aside
      className={`bg-sidebar border-accentSecondary/20 z-10 h-screen border-r shadow-lg ${isCollapsed ? 'w-20 min-w-20' : 'w-62.5 min-w-62.5'} overflow-y-auto py-4 transition-[width,min-width] duration-300`}
    >
      <nav>
        <ul>
          <ToggleMenu toggle={handleClose} isCollapsed={isCollapsed} />

          {!isCollapsed ? <ImgTitle /> : <ImgTitleResponsive />}

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
