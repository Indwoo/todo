import { useState } from 'react';
import { useTodoStore } from '../../store/todoStore';
import TodoModal from './TodoModal';
import TodoItem from './TodoItem';

const categoryColor: Record<string, string> = {
  study: 'bg-blue-100',
  workout: 'bg-green-100',
  book: 'bg-yellow-100',
  etc: 'bg-gray-100',
};

function Todo() {
  const [open, setOpen] = useState(false);
  const todos = useTodoStore((state) => state.todo);

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">오늘의 할 일</h2>
        <button
          onClick={() => setOpen(true)}
          className="text-white bg-blue-500 px-2 py-1 rounded"
        >
          +
        </button>
      </div>

      <ul className="space-y-2">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            color={categoryColor[todo.groupid] || 'bg-white'}
          />
        ))}
      </ul>

      {open && <TodoModal onClose={() => setOpen(false)} />}
    </div>
  );
}

export default Todo;
