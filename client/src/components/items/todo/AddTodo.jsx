import React from 'react';
import PropsTypes from 'prop-types';
import { Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { AddTodoStyled } from './styled';

const AddTodo = ({
  newTodo, onChangeTodo, onCreateTodo, isLoading,
}) => (
  <AddTodoStyled className="add-todo">
    <Input.Group size="large" compact>
      <Input
        value={newTodo}
        onChange={onChangeTodo}
        onPressEnter={onCreateTodo}
        disabled={isLoading}
        className="add-todo__input"
      />
      <Button
        type="primary"
        icon={<SearchOutlined />}
        loading={isLoading}
        size="large"
      />
    </Input.Group>
  </AddTodoStyled>
);

AddTodo.propTypes = {
  newTodo: PropsTypes.string.isRequired,
  onChangeTodo: PropsTypes.func.isRequired,
  onCreateTodo: PropsTypes.func.isRequired,
  isLoading: PropsTypes.bool.isRequired,
};

export default AddTodo;
