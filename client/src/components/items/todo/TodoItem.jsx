import React from 'react';
import { Checkbox, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { TodoItemStyled } from './styled';

const TodoItem = ({ content, completed, onChangeStatus }) => (
  <TodoItemStyled className="todo-item">
    <Checkbox
      onChange={onChangeStatus}
      checked={completed}
      className="todo-item__checkbox"
    >
      {content}
    </Checkbox>
    <Button icon={<DeleteOutlined />} />
  </TodoItemStyled>
);

TodoItem.propTypes = {
  content: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onChangeStatus: PropTypes.func.isRequired,
};

export default TodoItem;
