let tasks = [
  {
    id: 1,
    name: 'Eggs',
    description: 'Buy at Tesco',
  },
  {
    id: 2,
    name: 'Dog',
    description: 'Remember to walk Miffles',
  },
  {
    id: 3,
    name: 'Movie',
    description: 'Rewatch the Back to the Future trilogy',
  },
];

export const getTasks = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(tasks);
    }, 800);
  });
};

export const addTask = newTask => {
  const newId = tasks.reduce((maxId, task) => {
    return task.id > maxId ? task.id : maxId;
  }, 0);

  return new Promise(resolve => {
    setTimeout(() => {
      tasks.push({
        id: newId + 1,
        name: newTask.taskName,
        description: newTask.taskDescription,
      });
      resolve({});
    }, 4000);
  });
};
