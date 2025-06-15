import { ReactNode, useState } from 'react';
import ListExpand from './ListExpand';

interface MovieListProps {
  children: ReactNode;
}

const MovieList = ({ children }: MovieListProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="text-textSecondary bg-sidebar flex max-h-[76vh] w-full basis-1/2 flex-col overflow-y-auto p-4 shadow-md">
      <ListExpand setIsCollapsed={setIsCollapsed} isCollapsed={isCollapsed} />
      {!isCollapsed && children}
    </div>
  );
};

export default MovieList;
