import { MovieType } from '../../types/MovieTypes';
import { memo, useCallback } from 'react';

import MovieCardHeader from './MovieCardHeader';
import ButtonToggleWatchList from './ButtonToggleWatchList';
import MovieCardImage from './MovieCardImage';

interface MovieCardProps {
  movie: MovieType;
  isSelected: string | null;
  setIsSelected: (id: string | null) => void;
  watchList: MovieType[];
  setWatchList: React.Dispatch<React.SetStateAction<MovieType[]>>;
}

const MovieCard = memo(function MovieCard({
  movie,
  isSelected,
  setIsSelected,
  watchList,
  setWatchList,
}: MovieCardProps) {
  // Memoized click handler to avoid unnecessary re-renders
  const handleClick = useCallback(() => {
    if (setIsSelected)
      setIsSelected(isSelected === movie.imdbID ? null : movie.imdbID);
  }, [isSelected, movie.imdbID, setIsSelected]);

  // Memoized watchList check
  const addedToWatch = watchList.some((item) => item.imdbID === movie.imdbID);

  const handleWatchlistToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setWatchList((prev) =>
      addedToWatch
        ? prev.filter((item) => item.imdbID !== movie.imdbID)
        : [...prev, movie],
    );
  };

  return (
    <article
      aria-labelledby={`movie-title-${movie.imdbID}`}
      onClick={handleClick}
      title={movie.Title}
      className={`flex cursor-pointer flex-wrap gap-2.5 border-gray-300 px-2 py-4 transition-colors not-last:mb-1 not-last:border-b dark:border-gray-800 ${
        isSelected === movie.imdbID
          ? 'bg-blue-50 dark:bg-blue-900/20'
          : 'hover:bg-gray-100 dark:hover:bg-gray-800'
      }`}
    >
      {/* Poster Image */}
      <MovieCardImage image={movie.Poster} />

      {/* Movie Details */}
      <MovieCardHeader
        Title={movie.Title}
        Year={movie.Year}
        Type={movie.Type}
      />

      {/* Watchlist Button */}
      <ButtonToggleWatchList
        toggle={handleWatchlistToggle}
        isAdded={addedToWatch}
      />
    </article>
  );
});

export default MovieCard;
