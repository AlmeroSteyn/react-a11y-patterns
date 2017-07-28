let todos = [
  {
    id: 1,
    name: 'Show how React state works',
  },
  {
    id: 2,
    name: 'Show how to display lists of data',
  },
  {
    id: 3,
    name: 'Show how to conditionally display data',
  },
  {
    id: 4,
    name: 'Show how to pass props and events',
  },
];

export const getTodos = () => todos;

export const addTodo = newTodo => {
  const newId = todos.reduce((maxId, todo) => {
    return todo.id > maxId ? todo.id : maxId;
  }, 0);
  todos.push({
    id: newId + 1,
    name: newTodo,
  });
};
