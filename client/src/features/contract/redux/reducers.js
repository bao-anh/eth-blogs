/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'contract',
  initialState: {
    animeContract: null,
    todoContract: null,
  },
  reducers: {
    INIT_CONTRACT: (state, { payload }) => {
      const { animeContract, todoContract } = payload;
      state.animeContract = animeContract;
      state.todoContract = todoContract;
    },
  },
});

export default slice.reducer;
