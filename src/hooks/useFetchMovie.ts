import { useCallback, useEffect, useState } from 'react';
import { MovieType } from '../types/MovieTypes';

const isMovieType = (data: unknown): data is MovieType => {
  return (
    typeof data === 'object' &&
    data !== null &&
    'imdbID' in data &&
    'Title' in data
  );
};

const useFetchMovie = (url: string) => {
  const [data, setData] = useState<MovieType[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchedData = useCallback(
    async (fetchURL: string, signal?: AbortSignal) => {
      if (!fetchURL) return;

      try {
        setLoading(true);
        setError(null);

        const response = await fetch(fetchURL, { signal });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        const dataJson = await response.json();
        const results = dataJson.Search || (dataJson.Title ? [dataJson] : []);

        if (!Array.isArray(results)) throw new Error('Invalid API response');

        const validMovies = results.filter(isMovieType);
        setData(validMovies);
      } catch (err) {
        if (signal?.aborted) return;
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  useEffect(() => {
    const controller = new AbortController();
    fetchedData(url, controller.signal);
    return () => controller.abort();
  }, [url, fetchedData]);

  return { data, loading, error };
};

export default useFetchMovie;
