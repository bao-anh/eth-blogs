// import { slice } from './reducers';

// const { FETCH_TODO, CREATE_TODO } = slice.actions;

export const fetchTodo = () => async (dispatch, getState) => {
  const state = getState();
  const { todoContract } = state.contract;
  const todoCount = await todoContract.todoCount();
  console.log(todoCount.toNumber());
};

export const foo = {};
