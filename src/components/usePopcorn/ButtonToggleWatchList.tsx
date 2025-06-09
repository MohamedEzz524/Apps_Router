import { FaBookmark } from 'react-icons/fa';
import { GoBookmarkSlashFill } from 'react-icons/go';

interface ButtonToggleWatchListProps {
  isAdded: boolean;
  toggle: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ButtonToggleWatchList = ({
  isAdded,
  toggle,
}: ButtonToggleWatchListProps) => {
  return (
    <button
      type="button"
      aria-label={isAdded ? 'Remove from watchlist' : 'Add to watchlist'}
      onClick={toggle}
      className="ml-auto flex items-center gap-1 self-center rounded-md bg-blue-100 p-2 text-blue-800 transition-colors hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-200 dark:hover:bg-blue-900/50"
    >
      {isAdded ? (
        <GoBookmarkSlashFill className="text-red-500" />
      ) : (
        <FaBookmark />
      )}
      <span className="sr-only sm:not-sr-only">
        {isAdded ? 'Remove' : 'Add'}
      </span>
    </button>
  );
};

export default ButtonToggleWatchList;
