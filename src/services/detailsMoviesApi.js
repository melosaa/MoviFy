import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TMDB_TOKEN, TMDB_API_URL } from '@env';

export const detailsMoviesApi = createApi({
  reducerPath: 'detailsMoviesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: TMDB_API_URL,
    prepareHeaders: headers => {
      headers.set('Authorization', String(TMDB_TOKEN || '').trim());
      headers.set('accept', 'application/json');
      return headers;
    },
  }),
  endpoints: build => ({
    getMovieDetails: build.query({
      query: movieId => `movie/${movieId}?language=en-US`,
    }),
  }),
});

export const { useGetMovieDetailsQuery, useGetMovieReviewsQuery } =
  detailsMoviesApi;
