import React from 'react';
import { Typography } from 'antd';
import { TodoStyled } from './styled';
import { AddTodo, TodoItem } from '../../components/items/todo/index';

const Todo = () => {
  const { Title } = Typography;

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
