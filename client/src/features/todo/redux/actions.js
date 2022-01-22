/* eslint-disable no-await-in-loop */
import { slice } from './reducers';

const { GET_ALL_TODO, TOGGLE_COMPLETE_TODO, DELETE_TODO } = slice.actions;

const getContract = (getState) => {
  const state = getState();
  const { contract, user } = state;
  return { userAccount: user.account, todoContract: contract.todoContract };
};

export const fetchTodo = (setIsLoading, setNewTodo) => async (dispatch, getState) => {
  const { todoContract } = getContract(getState);
  const todoCount = await todoContract.todoCount();
  const todos = [];

  for (let i = 1; i <= todoCount.toNumber(); i += 1) {
    const todo = await todoContract.todos(i);
    const id = todo[0].toNumber();
    const content = todo[1];
    const completed = todo[2];
    if (todo.content && todo.id) {
      todos.push({ id, content, completed });
    }
  }

  dispatch(GET_ALL_TODO(todos));
  setNewTodo('');
  setIsLoading(false);
};

export const createTodo = (content, setIsLoading, setNewTodo) => async (dispatch, getState) => {
  const { userAccount, todoContract } = getContract(getState);
  await todoContract.createTodo(content, { from: userAccount });
  dispatch(fetchTodo(setIsLoading, setNewTodo));
};

export const toggleCompleteTodo = (id) => async (dispatch, getState) => {
  const { userAccount, todoContract } = getContract(getState);
  await todoContract.toggleCompleteTodo(id, { from: userAccount });
  dispatch(TOGGLE_COMPLETE_TODO(id));
};

export const deleteTodo = (id) => async (dispatch, getState) => {
  const { userAccount, todoContract } = getContract(getState);
  await todoContract.deleteTodo(id, { from: userAccount });
  dispatch(DELETE_TODO(id));
};
