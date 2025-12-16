import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TMDB_TOKEN, TMDB_API_URL } from '@env';

export const trendingMovieApi = createApi({
  reducerPath: 'trendingMovieApi',

  baseQuery: fetchBaseQuery({
    baseUrl: TMDB_API_URL,
    prepareHeaders: headers => {
      headers.set('Authorization', TMDB_TOKEN);
      headers.set('accept', 'application/json');
      return headers;
    },
  }),

  endpoints: build => ({
    getTrending: build.query({
      query: (timeWindow = 'day') =>
        `trending/movie/${timeWindow}?language=en-US`,
    }),
    getTrendingPeople: build.query({
      query: (timeWindow = 'day') =>
        `trending/person/${timeWindow}?language=en-US`,
    }),
  }),
});

export const { useGetTrendingQuery, useGetTrendingPeopleQuery } =
  trendingMovieApi;
