import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Typography } from 'antd';
import { TodoStyled } from './styled';
import * as todoActions from './redux/actions';
import { AddTodo, TodoItem } from '../../components/items/todo/index';
import useContractSelector from '../contract/redux/selectors';
import useUserSelector from '../user/redux/selectors';
import useTodoSelector from './redux/selectors';

const Todo = () => {
  const { Title } = Typography;
  const dispatch = useDispatch();
  const { todoContract } = useContractSelector();
  const { userAccount } = useUserSelector();
  const { todoList } = useTodoSelector();

  const [newTodo, setNewTodo] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const onCreateTodo = () => {
    if (!newTodo) return;
    setIsLoading(true);
    dispatch(todoActions.createTodo(newTodo, setIsLoading, setNewTodo));
  };

  const onChangeStatus = (id) => {
    dispatch(todoActions.toggleCompleteTodo(id));
  };

  const onDeleteTodo = (id) => {
    dispatch(todoActions.deleteTodo(id));
  };

  const renderTodoList = () => {
    if (!todoList.length) return null;
    return todoList.map((todo) => (
      <TodoItem
        key={todo.id}
        id={todo.id}
        content={todo.content}
        completed={todo.completed}
        onChangeStatus={onChangeStatus}
        onDeleteTodo={onDeleteTodo}
      />
    ));
  };

  useEffect(() => {
    if (todoContract && userAccount) {
      dispatch(todoActions.fetchTodo(setIsLoading, setNewTodo));
    }
  }, [todoContract, userAccount]);

  return (
    <TodoStyled className="todo">
      <Title level={4} className="todo__title">
        Manage your todo list
      </Title>
      <AddTodo
        newTodo={newTodo}
        onChangeTodo={setNewTodo}
        onCreateTodo={onCreateTodo}
        isLoading={isLoading}
      />
      {renderTodoList()}
    </TodoStyled>
  );
};

export default Todo;
