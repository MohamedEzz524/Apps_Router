import { MovieType } from '../../types/MovieTypes';

interface MovieLengthProps {
  movies: MovieType[] | null;
}
const MovieLength = ({ movies }: MovieLengthProps) => {
  return (
    <h2 className="font-medium">
      Found <span className="text-xl font-bold">{movies?.length}</span> Movies
    </h2>
  );
};

export default MovieLength;
