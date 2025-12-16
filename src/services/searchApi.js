import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TMDB_API_URL, TMDB_TOKEN } from '@env';

export const searchApi = createApi({
  reducerPath: 'searchApi',
  baseQuery: fetchBaseQuery({
    baseUrl: TMDB_API_URL,
    prepareHeaders: headers => {
      headers.set('Authorization', String(TMDB_TOKEN || '').trim());
      headers.set('accept', 'application/json');
      return headers;
    },
  }),
  endpoints: builder => ({
    searchMovie: builder.query({
      query: queryText => ({
        url: 'search/movie',
        params: {
          query: queryText,
          language: 'en-US',
          include_adult: false,
          page: 1,
        },
      }),
    }),
  }),
});

export const { useLazySearchMovieQuery } = searchApi;
