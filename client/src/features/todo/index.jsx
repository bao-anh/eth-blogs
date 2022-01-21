import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Typography } from 'antd';
import { TodoStyled } from './styled';
import * as todoActions from './redux/actions';
import { AddTodo, TodoItem } from '../../components/items/todo/index';
import useContractSelector from '../contract/redux/selectors';
import useUserSelector from '../user/redux/selectors';

const Todo = () => {
  const { Title } = Typography;
  const dispatch = useDispatch();
  const { todoContract } = useContractSelector();
  const { userAccount } = useUserSelector();

  useEffect(() => {
    if (todoContract && userAccount) {
      dispatch(todoActions.fetchTodo());
    }
  }, [todoContract, userAccount]);

  return (
    <TodoStyled className="todo">
      <Title level={4} className="todo__title">
        Manage your todo list
      </Title>
      <AddTodo />
      <TodoItem />
    </TodoStyled>
  );
};

export default Todo;
