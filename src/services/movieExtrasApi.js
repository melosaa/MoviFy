import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TMDB_API_URL, TMDB_TOKEN } from '@env';

export const movieExtrasApi = createApi({
  reducerPath: 'movieExtrasApi',
  baseQuery: fetchBaseQuery({
    baseUrl: TMDB_API_URL,
    prepareHeaders: headers => {
      headers.set('Authorization', TMDB_TOKEN);
      headers.set('accept', 'application/json');
      return headers;
    },
  }),
  endpoints: build => ({
    getMovieImages: build.query({
      query: movieId => `movie/${movieId}/images`,
    }),
    getMovieVideos: build.query({
      query: movieId => `movie/${movieId}/videos`,
    }),
  }),
});

export const { useGetMovieImagesQuery, useGetMovieVideosQuery } =
  movieExtrasApi;
