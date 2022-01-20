/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'anime',
  initialState: {
    animeContract: null,
  },
  reducers: {
    INITIAL_CONTRACT: (state, payload) => {
      state.animeContract = payload;
    },
  },
});

export default slice.reducer;
