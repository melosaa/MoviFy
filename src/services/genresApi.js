import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TMDB_TOKEN, TMDB_API_URL } from '@env';

export const genresApi = createApi({
  reducerPath: 'genresApi',
  baseQuery: fetchBaseQuery({
    baseUrl: TMDB_API_URL,
    prepareHeaders: headers => {
      headers.set('Authorization', String(TMDB_TOKEN || '').trim());
      headers.set('accept', 'application/json');
      return headers;
    },
  }),
  endpoints: builder => ({
    getMovieGenres: builder.query({
      query: () => ({
        url: 'genre/movie/list',
        params: { language: 'en-US' },
      }),
    }),
  }),
});

export const { useGetMovieGenresQuery } = genresApi;
