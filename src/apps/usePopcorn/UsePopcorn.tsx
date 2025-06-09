import { useState } from 'react';
import MovieList from '../../components/usePopcorn/MovieList';
import MovieFavorite from '../../components/usePopcorn/MovieFavorite';
import MoviesHeader from '../../components/usePopcorn/MoviesHeader';
import MovieLength from '../../components/usePopcorn/MovieLength';
import SearchForm from '../../components/usePopcorn/SearchForm';
import useFetchMovie from '../../hooks/useFetchMovie';
import Loading from '../../components/global/Loading';
import Error from '../../components/global/Error';
import NoDataFound from '../../components/global/NoDataFound';
import { MovieType } from '../../types/MovieTypes';

const API_KEY = import.meta.env.VITE_MOVIES_API_KEY;
const BASE_URL = 'http://www.omdbapi.com';

const UsePopcorn = () => {
  const [query, setQuery] = useState('');
  const [isSelected, setIsSelected] = useState<string | null>(null);
  const [watchList, setWatchList] = useState<MovieType[] | []>([]);

  // Always fetch data - initial fetch uses 'inception' as fallback
  const searchTerm = query.length ? query : 'inception';
  const { data, loading, error } = useFetchMovie(
    `${BASE_URL}/?s=${searchTerm}&apikey=${API_KEY}`,
  );

  if (error) {
    return (
      <Error
        title="Data loading failed"
        message={error}
        onRetry={() => setQuery('inception')} // Reset to default search
        fullScreen
      />
    );
  }

  if (loading) {
    return <Loading size="lg" message="Fetching data..." fullScreen />;
  }

  if (!data || data?.length === 0) {
    return (
      <NoDataFound
        title="No movies found"
        message={`Try searching for "${query}" differently`}
        action={
          <button
            onClick={() => setQuery('inception')}
            className="mt-4 rounded-md bg-blue-100 px-4 py-2 text-blue-700 hover:bg-blue-200"
          >
            Reset to Popular Movies
          </button>
        }
        fullScreen
      />
    );
  }

  return (
    <section className="main-section">
      <MoviesHeader>
        <SearchForm setQuery={setQuery} />
        <MovieLength movies={data} />
      </MoviesHeader>

      <main className="flex w-full flex-col gap-2 lg:flex-row">
        <MovieList
          setIsSelected={setIsSelected}
          movies={data}
          isSelected={isSelected}
          watchList={watchList}
          setWatchList={setWatchList}
        />

        <MovieFavorite
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          watchList={watchList}
          setWatchList={setWatchList}
        />
      </main>
    </section>
  );
};

export default UsePopcorn;
