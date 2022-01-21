/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'todo',
  initialState: {
    list: [],
  },
  reducers: {
    FETCH_TODO: (state, { payload }) => {
      state.list = payload;
    },
    CREATE_TODO: (state, { payload }) => {
      state.list.push(payload);
    },
  },
});

export default slice.reducer;
