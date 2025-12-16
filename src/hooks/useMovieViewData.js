import { useMemo } from 'react';
import Images from '../assets/images';
import { useGetMovieDetailsQuery } from '../services/detailsMoviesApi';
import { useGetMovieReviewsQuery } from '../services/reviewsMoviesApi';
import { useGetTrendingPeopleQuery } from '../services/trendingMoviesApi';
import {
  useGetMovieImagesQuery,
  useGetMovieVideosQuery,
} from '../services/movieExtrasApi';

export function useMovieViewData(movieId) {
  const detailsQuery = useGetMovieDetailsQuery(movieId, { skip: !movieId });
  const peopleQuery = useGetTrendingPeopleQuery('day');
  const reviewsQuery = useGetMovieReviewsQuery(movieId, { skip: !movieId });
  const imagesQuery = useGetMovieImagesQuery(movieId, { skip: !movieId });
  const videosQuery = useGetMovieVideosQuery(movieId, { skip: !movieId });

  const details = detailsQuery.data;

  const tags = useMemo(() => {
    if (!details) return [];
    return [
      details?.release_date?.slice(0, 4),
      details?.runtime ? `${details.runtime}m` : null,
    ].filter(Boolean);
  }, [details]);

  const people = useMemo(() => {
    const list = peopleQuery.data?.results ?? [];
    return list.map(person => ({
      id: person.id,
      name: person.name,
      image: person.profile_path
        ? { uri: `https://image.tmdb.org/t/p/w185${person.profile_path}` }
        : Images.batman,
    }));
  }, [peopleQuery.data]);

  const reviews = useMemo(
    () => reviewsQuery.data?.results ?? [],
    [reviewsQuery.data],
  );

  const photos = useMemo(
    () => imagesQuery.data?.backdrops ?? [],
    [imagesQuery.data],
  );

  const trailers = useMemo(() => {
    const list = videosQuery.data?.results ?? [];
    return list.filter(v => v.site === 'YouTube');
  }, [videosQuery.data]);

  const isLoading =
    detailsQuery.isLoading ||
    peopleQuery.isLoading ||
    reviewsQuery.isLoading ||
    imagesQuery.isLoading ||
    videosQuery.isLoading;

  const error =
    detailsQuery.error ||
    peopleQuery.error ||
    reviewsQuery.error ||
    imagesQuery.error ||
    videosQuery.error;

  return {
    details,
    tags,
    people,
    reviews,
    photos,
    isLoading,
    error,
    trailers,
  };
}
