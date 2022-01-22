import { useSelector } from 'react-redux';

const useTodoSelector = () => {
  const todoList = useSelector((state) => state.todo.list);

  return { todoList };
};

export default useTodoSelector;
