/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'todo',
  initialState: {
    list: [],
  },
  reducers: {
    GET_ALL_TODO: (state, { payload }) => {
      state.list = payload;
    },
    TOGGLE_COMPLETE_TODO: (state, { payload }) => {
      const todo = state.list.find((item) => item.id === payload);
      todo.completed = !todo.completed;
    },
    DELETE_TODO: (state, { payload }) => {
      state.list = state.list.filter((todo) => todo.id !== payload);
    },
  },
});

export default slice.reducer;
