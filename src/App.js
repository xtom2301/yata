import { items } from './items';
import { useEffect, useState } from 'react';
import Todo from './Todo';

const App = () => {
  const [todos, setTodos] = useState(items);
  const [count, setCount] = useState(0);

  const countOpenTodos = () => {
    let doneTodos = todos.filter((todo) => {
      return !todo.done;
    });
    setCount(doneTodos.length);
  };

  const checkTodo = (i) => {
    const list = [...todos];
    if (list[i].done) {
      list[i].done = false;
    } else {
      list[i].done = true;
    }
    setTodos(list);
  };

  const deleteTodo = (i) => {
    const list = [...todos];
    list.splice(i, 1);
    setTodos(list);
  };

  useEffect(() => {
    countOpenTodos();
  }, [todos]);

  return (
    <div className='max-w-2xl m-auto mt-40 bg-zinc-900 text-white'>
      <h1 className='text-white p-8 text-center font-bold text-4xl '>
        Yet Another Todo App
      </h1>
      <h2 className='text-center mb-4 font-semibold text-xl'>
        Open Todos: {count}
      </h2>
      <div>
        {todos.map((todo, i) => {
          return (
            <Todo
              key={i}
              name={todo.name}
              i={i}
              done={todo.done}
              onCheckTodo={checkTodo}
              onDelete={deleteTodo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
