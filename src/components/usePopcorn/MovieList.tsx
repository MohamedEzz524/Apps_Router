import { useState } from 'react';
import MovieCard from './MovieCard';
import ListExpand from './ListExpand';
import { MovieType } from '../../types/MovieTypes';
import NoDataFound from '../global/NoDataFound';

interface MovieListProps {
  isSelected: string | null;
  setIsSelected: (param: string | null) => void;
  movies: MovieType[] | null;
  watchList: MovieType[] | [];
  setWatchList: React.Dispatch<React.SetStateAction<MovieType[] | []>>;
}

const MovieList = ({
  setIsSelected,
  movies,
  isSelected,
  watchList,
  setWatchList,
}: MovieListProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="text-textSecondary bg-sidebar flex max-h-[80vh] w-full basis-1/2 flex-col overflow-y-auto p-4 shadow-md">
      <ListExpand setIsCollapsed={setIsCollapsed} isCollapsed={isCollapsed} />

      {!isCollapsed &&
        (movies?.length ? (
          movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              setIsSelected={setIsSelected}
              isSelected={isSelected}
              watchList={watchList}
              setWatchList={setWatchList}
            />
          ))
        ) : (
          <NoDataFound />
        ))}
    </div>
  );
};

export default MovieList;
