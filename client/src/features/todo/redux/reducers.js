/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { sortTodoList } from '../../../helpers/math';

export const slice = createSlice({
  name: 'todo',
  initialState: {
    list: [],
  },
  reducers: {
    GET_ALL_TODO: (state, { payload }) => {
      state.list = sortTodoList(payload);
    },
    TOGGLE_COMPLETE_TODO: (state, { payload }) => {
      const todo = state.list.find((item) => item.id === payload);
      todo.completed = !todo.completed;
      state.list = sortTodoList(state.list);
    },
    DELETE_TODO: (state, { payload }) => {
      state.list = state.list.filter((todo) => todo.id !== payload);
    },
  },
});

export default slice.reducer;
