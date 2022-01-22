import { useEffect, useState } from 'react';
import Todo from './Todo';

const App = () => {
  const [todos, setTodos] = useState(() => {
    const items = JSON.parse(localStorage.getItem('todos'));
    return items;
  });
  const [count, setCount] = useState(0);
  const [formInput, setFormInput] = useState('');

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

  const addTodo = (e) => {
    e.preventDefault();
    if (formInput) {
      const list = [...todos];
      list.push({ name: formInput, done: false });
      setTodos(list);
      setFormInput('');
    } else {
      alert('Text missing');
    }
  };

  useEffect(() => {
    countOpenTodos();
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className='max-w-2xl m-auto mt-40 bg-zinc-900 text-white'>
      <h1 className='text-white p-8 text-center font-bold text-4xl '>
        Yet Another Todo App
      </h1>
      <h2 className='text-center mb-4 font-semibold text-xl'>
        Open Todos: {count}
      </h2>
      <form className='grid grid-cols-3 py-2'>
        <input
          autoFocus
          type='text'
          className='col-span-2 py-2 mx-2 text-center text-black font-bold'
          placeholder='...'
          value={formInput}
          onChange={(e) => setFormInput(e.target.value)}
        />
        <input
          type='submit'
          value='Add Todo...'
          className='col-span-1 cursor-pointer bg-zinc-600'
          onClick={addTodo}
        />
      </form>
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
