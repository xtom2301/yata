const Todo = ({ name, i, done }) => {
  return (
    <div
      className={
        done
          ? 'p-6 flex justify-between items-center border-t-8 border-indigo-100 bg-green-500'
          : 'p-6 flex justify-between items-center border-t-8 border-indigo-100 bg-red-500'
      }
    >
      <h1 className='text-2xl font-bold text-white'>{name}</h1>
      <button className='bg-zinc-900 p-4 text-white font-semibold'>
        Delete
      </button>
    </div>
  );
};

export default Todo;
