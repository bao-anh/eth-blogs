import { slice } from './reducers';

const { INITIAL_CONTRACT } = slice.actions;

export const initialContact = (dispatch, state) => {
  dispatch(INITIAL_CONTRACT(state));
};

export const foo = {};
