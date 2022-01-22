export const sortTodoList = (todoList) => {
  if (!todoList.length) return todoList;
  return todoList.sort((a, b) => {
    if (a.completed) return 1;
    if (a.completed && b.completed) return 0;
    return -1;
  });
};

export const foo = {};
