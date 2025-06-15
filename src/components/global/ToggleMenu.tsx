import { MdMenu } from 'react-icons/md';

interface ToggleMenuProps {
  isCollapsed: boolean;
  toggle: () => void;
}

const ToggleMenu = ({ isCollapsed, toggle }: ToggleMenuProps) => {
  return (
    <li
      onClick={toggle}
      className="flex cursor-pointer justify-center"
      title={isCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
    >
      <span className="trans-colors text-accentPrimary gray-hover rounded-full p-1.5">
        <MdMenu fontSize={28} />
      </span>
    </li>
  );
};

export default ToggleMenu;
