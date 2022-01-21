import { slice } from './reducers';

const { INIT_CONTRACT } = slice.actions;

export const initContract = (dispatch, state) => {
  dispatch(INIT_CONTRACT(state));
};

export const foo = {};
