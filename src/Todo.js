const Todo = ({ name, i, done, onCheckTodo, onDelete }) => {
  return (
    <div
      className={
        done
          ? 'p-6 flex justify-between items-center m-10 border-2 border-teal-800 rounded-3xl'
          : 'p-6 flex justify-between items-center m-10 border-2 border-teal-300 rounded-3xl'
      }
    >
      <h1
        onClick={() => {
          onCheckTodo(i);
        }}
        className={
          done
            ? 'text-2xl font-bold cursor-pointer opacity-60'
            : 'text-2xl font-bold cursor-pointer'
        }
      >
        {name}
      </h1>
      <button
        disabled={!done}
        className={
          done
            ? 'bg-teal-500 p-4 font-semibold rounded-xl'
            : 'bg-teal-500 p-4 font-semibold rounded-xl opacity-60 cursor-not-allowed'
        }
        onClick={() => {
          onDelete(i);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Todo;
