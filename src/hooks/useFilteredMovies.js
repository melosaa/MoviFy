import { useMemo, useState } from 'react';
import { useGetTrendingQuery } from '../services/trendingMoviesApi';

export const ALL_GENRE = 'all';

export function useFilteredTrendingMovies() {
  const [selectedGenre, setSelectedGenre] = useState(ALL_GENRE);

  const {
    data: trendingData,
    isLoading,
    error,
    refetch,
  } = useGetTrendingQuery();

  const trendingList = useMemo(() => {
    return trendingData?.results ?? [];
  }, [trendingData]);

  const filteredList = useMemo(() => {
    if (selectedGenre === ALL_GENRE) return trendingList;

    const genreId = Number(selectedGenre);
    return trendingList.filter(movie =>
      (movie.genre_ids ?? []).includes(genreId),
    );
  }, [selectedGenre, trendingList]);

  return {
    selectedGenre,
    setSelectedGenre,
    filteredList,
    isLoading,
    error,
    refetch,
  };
}
