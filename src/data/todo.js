let todos = [
  {
    id: 1,
    name: 'Eggs',
    description: 'Buy at Albert Hein',
  },
  {
    id: 2,
    name: 'Dog',
    description: 'Remeber to walk Miffles',
  },
];

export const getTodos = () => todos;

export const addTodo = newTodo => {
  const newId = todos.reduce((maxId, todo) => {
    return todo.id > maxId ? todo.id : maxId;
  }, 0);
  todos.push({
    id: newId + 1,
    name: newTodo.todoName,
    description: newTodo.todoDescription,
  });
};
