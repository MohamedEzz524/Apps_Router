const API_KEY = import.meta.env.VITE_MOVIES_API_KEY;
const BASE_URL = 'https://www.omdbapi.com';
import { memo, ReactNode, useState } from 'react';
import ListExpand from './ListExpand';
import useFetchMovie from '../../hooks/useFetchMovie';
import Error from '../global/Error';
import Loading from '../global/Loading';
import NoDataFound from '../global/NoDataFound';
import DrawSelected from './DrawSelected';

interface MovieFavoriteProps {
  isSelected: string | null;
  setIsSelected: (param: string | null) => void;
  children: ReactNode;
}

const MovieFavorite = memo(
  ({ isSelected, setIsSelected, children }: MovieFavoriteProps) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    // Only fetch when isSelected exists
    const { data, loading, error } = useFetchMovie(
      isSelected ? `${BASE_URL}/?i=${isSelected}&apikey=${API_KEY}` : '',
    );

    // WatchList UI when nothing is selected
    if (!isSelected) {
      return (
        <div className="text-textSecondary bg-sidebar flex w-full basis-1/2 flex-col p-4 shadow-md">
          <ListExpand
            setIsCollapsed={setIsCollapsed}
            isCollapsed={isCollapsed}
          />
          {!isCollapsed && children}
        </div>
      );
    }

    // Selected movie states
    if (error) {
      return <Error title="Data loading failed" size="lg" message={error} />;
    }

    if (loading) {
      return (
        <div className="flex w-full basis-1/2 items-center justify-center p-4">
          <Loading size="lg" message="Fetching data..." />
        </div>
      );
    }

    if (!data?.length) {
      return <NoDataFound fullScreen />;
    }

    return (
      <div className="text-textSecondary bg-sidebar flex w-full basis-1/2 flex-col p-4">
        <ListExpand setIsCollapsed={setIsCollapsed} isCollapsed={isCollapsed} />
        {!isCollapsed && (
          <DrawSelected selected={data[0]} reset={setIsSelected} />
        )}
      </div>
    );
  },
);

export default MovieFavorite;
