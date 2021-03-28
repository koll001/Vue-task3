const switchStatus = (status, todos) => {
  if (status === 'all') {
    return todos;
  } else if (status === 'working') {
    const workingTodo = todos.filter((todo) => {
      return todo.status === '作業中';
    });
    return workingTodo;
  } else if (status === 'done') {
    const completeTodo = todos.filter((todo) => {
      return todo.status === '完了';
    });
    return completeTodo;
  }
};

const updateStatus = (todo) => {
  if (todo.status === '作業中') {
    todo.status = '完了';
  } else if (todo.status === '完了') {
    todo.status = '作業中';
  }
};

const deleteTodo = (id, todos) => {
  const targetIndex = todos.findIndex((index) => {
    return index.id === id;
  });
  todos.splice(targetIndex, 1);
  todos.map((todo, index) => {
    todo.id = index;
  });
};

const createTodo = (inputContents, todos) => {
  if (!inputContents.length) {
    return;
  }
  const task = inputContents.trim();
  const todo = {
    id: todos.length,
    task: task,
    status: '作業中',
  };
  todos.push(todo);
};

export { createTodo, updateStatus, deleteTodo, switchStatus };
