import { items } from './items';
import { useEffect, useState } from 'react';
import Todo from './Todo';

const App = () => {
  const [todos, setTodos] = useState(items);

  useEffect(() => {}, []);

  return (
    <div className='max-w-2xl m-auto mt-40 bg-zinc-400'>
      <h1 className='text-white p-8 text-center font-bold text-4xl bg-zinc-900'>
        Yet Another Todo App
      </h1>
      <div>
        {todos.map((todo, i) => {
          return <Todo key={i} name={todo.name} i={i} done={todo.done} />;
        })}
      </div>
    </div>
  );
};

export default App;
