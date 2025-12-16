import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import userReducer from './userSlice';
import { trendingMovieApi } from '../services/trendingMoviesApi';

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    [trendingMovieApi.reducerPath]: trendingMovieApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(trendingMovieApi.middleware),
});

export default store;
