// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.4.22 <0.9.0;

contract Todos {
  uint public todoCount = 0;

  struct Todo {
    string content;
    bool completed;
  }

  mapping(uint => Todo) public todos;

  function createTodo(string memory _content) public {
    todoCount++;
    todos[todoCount] = Todo(_content, false);
  }
}
