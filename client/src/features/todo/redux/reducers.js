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
  },
});

export default slice.reducer;
