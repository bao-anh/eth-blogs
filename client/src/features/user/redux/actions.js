import { slice } from './reducers';

const { SET_ACCOUNT } = slice.actions;

export const setAccount = (dispatch, state) => {
  dispatch(SET_ACCOUNT(state));
};

export const foo = {};
