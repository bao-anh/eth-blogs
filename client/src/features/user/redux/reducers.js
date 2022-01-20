/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'user',
  initialState: {
    account: null,
  },
  reducers: {
    SET_ACCOUNT: (state, { payload }) => {
      state.account = payload;
    },
  },
});

export default slice.reducer;
