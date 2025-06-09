const API_KEY = import.meta.env.VITE_MOVIES_API_KEY;
const BASE_URL = 'http://www.omdbapi.com';
import { memo, useState } from 'react';
import ListExpand from './ListExpand';
import useFetchMovie from '../../hooks/useFetchMovie';
import Error from '../global/Error';
import Loading from '../global/Loading';
import NoDataFound from '../global/NoDataFound';
import DrawSelected from './DrawSelected';
import { MovieType } from '../../types/MovieTypes';
import MovieCard from './MovieCard';

interface MovieFavoriteProps {
  isSelected: string | null;
  watchList: MovieType[] | [];
  setWatchList: React.Dispatch<React.SetStateAction<MovieType[] | []>>;
  setIsSelected: (param: string | null) => void;
}

const MovieFavorite = memo(
  ({
    isSelected,
    watchList,
    setWatchList,
    setIsSelected,
  }: MovieFavoriteProps) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    // Only fetch when isSelected exists
    const { data, loading, error } = useFetchMovie(
      isSelected ? `${BASE_URL}/?i=${isSelected}&apikey=${API_KEY}` : '',
    );

    // Watchlist UI when nothing is selected
    if (!isSelected) {
      return (
        <div className="text-textSecondary bg-sidebar flex w-full basis-1/2 flex-col p-4 shadow-md">
          <ListExpand
            setIsCollapsed={setIsCollapsed}
            isCollapsed={isCollapsed}
          />
          {!isCollapsed && (
            <div>
              <h3 className="text-textPrimary text-xl font-bold">Watch List</h3>
              {watchList.map((movie) => (
                <MovieCard
                  movie={movie}
                  watchList={watchList}
                  setWatchList={setWatchList}
                  isSelected={isSelected}
                  setIsSelected={setIsSelected}
                />
              ))}
            </div>
          )}
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
