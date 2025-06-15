import { ReactNode, memo } from 'react';
import { NavLink } from 'react-router-dom';

interface NavItemProps {
  icon: ReactNode;
  path: string | undefined;
  title: string;
  active: boolean;
  isCollapsed: boolean;
}

const NavItem = memo(
  ({ icon, path, title, active, isCollapsed }: NavItemProps) => {
    return (
      <li title={title}>
        <NavLink
          to={path ?? '/'}
          className={`group relative mx-3 my-1 flex items-center gap-3 rounded-md px-4 py-3 text-sm font-medium tracking-wide transition-all duration-300 ${isCollapsed ? 'justify-center' : ''} ${
            active
              ? 'bg-[var(--bg-secondary)] text-[var(--accent-primary)] shadow-inner'
              : 'text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)] hover:text-[var(--accent-secondary)]'
          } `}
        >
          {/* Icon with hover effect */}
          <span
            className={`text-lg transition-transform duration-300 ${active ? 'scale-110 text-[var(--accent-primary)]' : 'group-hover:scale-105'} `}
          >
            {icon}
          </span>

          {/* Title shown only when sidebar is expanded */}
          {!isCollapsed && (
            <span
              className={`trans-colors ${active ? 'text-[var(--accent-primary)]' : ''} `}
            >
              {title}
            </span>
          )}

          {/* Optional subtle left line for active state */}
          {active && (
            <span className="absolute top-2 bottom-2 left-0 w-1 rounded bg-[var(--accent-primary)] opacity-60"></span>
          )}
        </NavLink>
      </li>
    );
  },
);

export default NavItem;
