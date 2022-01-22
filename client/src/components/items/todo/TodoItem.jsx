import React from 'react';
import { Checkbox, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { TodoItemStyled } from './styled';

const TodoItem = ({
  id, content, completed, onChangeStatus, onDeleteTodo,
}) => (
  <TodoItemStyled className="todo-item">
    <Checkbox
      onChange={() => onChangeStatus(id)}
      checked={completed}
      className="todo-item__checkbox"
    >
      {content}
    </Checkbox>
    <Button
      icon={<DeleteOutlined />}
      onClick={() => onDeleteTodo(id)}
    />
  </TodoItemStyled>
);

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onChangeStatus: PropTypes.func.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
};

export default TodoItem;
