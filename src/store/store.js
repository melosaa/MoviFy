import { configureStore } from '@reduxjs/toolkit';
import { trendingMovieApi } from '../services/trendingMoviesApi';
import { detailsMoviesApi } from '../services/detailsMoviesApi';
import { reviewsMoviesApi } from '../services/reviewsMoviesApi';
import { genresApi } from '../services/genresApi';
import authReducer from './authSlice';
import { searchApi } from '../services/searchApi';
import { movieExtrasApi } from '../services/movieExtrasApi';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [trendingMovieApi.reducerPath]: trendingMovieApi.reducer,
    [detailsMoviesApi.reducerPath]: detailsMoviesApi.reducer,
    [reviewsMoviesApi.reducerPath]: reviewsMoviesApi.reducer,
    [genresApi.reducerPath]: genresApi.reducer,
    [searchApi.reducerPath]: searchApi.reducer,
    [movieExtrasApi.reducerPath]: movieExtrasApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      trendingMovieApi.middleware,
      detailsMoviesApi.middleware,
      reviewsMoviesApi.middleware,
      genresApi.middleware,
      searchApi.middleware,
      movieExtrasApi.middleware,
    ),
});
