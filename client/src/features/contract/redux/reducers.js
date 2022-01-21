/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'contract',
  initialState: {
    animeContract: null,
  },
  reducers: {
    INIT_CONTRACT: (state, { payload }) => {
      const { animeContract } = payload;
      state.animeContract = animeContract;
    },
  },
});

export default slice.reducer;
