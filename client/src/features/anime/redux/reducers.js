/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'anime',
  initialState: {
    contract: null,
  },
  reducers: {
    INITIAL_CONTRACT: (state, { payload }) => {
      state.contract = payload;
    },
  },
});

export default slice.reducer;
