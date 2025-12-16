import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TMDB_TOKEN, TMDB_API_URL } from '@env';

export const reviewsMoviesApi = createApi({
  reducerPath: 'reviewsMoviesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: TMDB_API_URL,
    prepareHeaders: headers => {
      headers.set('Authorization', String(TMDB_TOKEN || '').trim());
      headers.set('accept', 'application/json');
      return headers;
    },
  }),
  endpoints: build => ({
    getMovieReviews: build.query({
      query: movieId => `movie/${movieId}/reviews?language=en-US&page=1`,
    }),
  }),
});

export const { useGetMovieReviewsQuery } = reviewsMoviesApi;
