import styled from 'styled-components';
import { blue } from '@ant-design/colors';

export const TodoItemStyled = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  background-color: ${blue[0]};
  padding: 5px 10px;
  align-items: center;
  margin-bottom: 10px;
`;

export const AddTodoStyled = styled.div`
  display: flex;
  
  .add-todo__input {
    width: calc(100% - 40px);
    margin-bottom: 20px;
  }
`;
