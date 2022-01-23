import { useEffect, useState } from 'react';
import Todo from './Todo';

const App = () => {
  const [todos, setTodos] = useState(() => {
    const items = JSON.parse(localStorage.getItem('todos'));
    return items;
  });
  const [count, setCount] = useState(0);
  const [formInput, setFormInput] = useState('');

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
    if (formInput.length <= 25) {
      if (todos.length < 5) {
        const list = [...todos];
        list.push({ name: formInput, done: false });
        setTodos(list);
        setFormInput('');
      } else {
        alert('U can have a max of 5 Todos, Login to create more');
      }
    } else {
      alert('more than 25 characters are not allowed');
    }
  };

  useEffect(() => {
    const countOpenTodos = () => {
      let doneTodos = todos.filter((todo) => {
        return !todo.done;
      });
      setCount(doneTodos.length);
    };

    countOpenTodos();
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className='max-w-2xl m-auto bg-zinc-900 text-white'>
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
          className='col-span-2 py-2 mx-2 text-center text-black font-bold rounded-xl'
          placeholder='...'
          value={formInput}
          onChange={(e) => setFormInput(e.target.value)}
        />
        <input
          type='submit'
          value='Add Todo...'
          className={
            formInput
              ? 'col-span-1 cursor-pointer bg-teal-500 rounded-xl'
              : 'col-span-1 opacity-60 cursor-not-allowed bg-teal-500 rounded-xl'
          }
          onClick={addTodo}
          disabled={!formInput}
        />
      </form>
      <div>
        {todos.length > 0 ? (
          todos.map((todo, i) => {
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
          })
        ) : (
          <div className='flex justify-center flex-col items-center text-center text-5xl mt-48'>
            <h1 className='font-bold mb-10'>No Todo's yet</h1>
            <h2>Click the Name of a Todo to mark it as done</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
