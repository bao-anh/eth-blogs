/* eslint-disable import/no-unresolved */
import { configureStore } from '@reduxjs/toolkit';
import animeReducer from 'features/anime/redux/reducers';
import userReducer from 'features/user/redux/reducers';

const store = configureStore({
  reducer: {
    anime: animeReducer,
    user: userReducer,
  },
});

export default store;
