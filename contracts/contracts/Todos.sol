// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.4.22 <0.9.0;

contract Todos {
  uint public todoCount = 0;

  struct Todo {
    uint id;
    string content;
    bool completed;
  }

  mapping(uint => Todo) public todos;

  function createTodo(string memory _content) public {
    todoCount++;
    todos[todoCount] = Todo(todoCount, _content, false);
  }

  function toggleCompleteTodo(uint id) public {
    todos[id].completed = !todos[id].completed;
  }

  function deleteTodo(uint id) public {
    delete todos[id];
  }
}
