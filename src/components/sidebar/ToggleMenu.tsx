import { MdMenu } from 'react-icons/md';

interface ToggleMenuProps {
  isCollapsed: boolean;
  toggle: () => void;
}

const ToggleMenu = ({ isCollapsed, toggle }: ToggleMenuProps) => {
  return (
    <li
      onClick={toggle}
      className="mb-5 flex cursor-pointer justify-center"
      title={isCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
    >
      <span
        className={`trans-colors bg-bgSecondary text-iconPrimary shadow-shadowNeon rounded-full p-3 transition-all duration-300 ease-in-out ${isCollapsed ? 'rotate-0' : 'rotate-90'} `}
      >
        <MdMenu fontSize={28} />
      </span>
    </li>
  );
};

export default ToggleMenu;
