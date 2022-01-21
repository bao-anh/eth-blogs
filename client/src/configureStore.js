/* eslint-disable import/no-unresolved */
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import animeReducer from 'features/anime/redux/reducers';
import userReducer from 'features/user/redux/reducers';
import contractReducer from 'features/contract/redux/reducers';
import todoReducer from 'features/todo/redux/reducers';

const store = configureStore({
  reducer: {
    anime: animeReducer,
    user: userReducer,
    contract: contractReducer,
    todo: todoReducer,
  },
  middleware: [thunk],
});

export default store;
