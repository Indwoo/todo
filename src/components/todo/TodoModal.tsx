import { useState } from 'react';
import { useTodoStore } from '../../store/todoStore';
import { nanoid } from 'nanoid';

type Props = { onClose: () => void };

export default function TodoModal({ onClose }: Props) {
  const addTodo = useTodoStore((s) => s.addTodo);
  const [title, setTitle] = useState('');
  const [groupid, setGroup] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  const submitTodo = () => {
    if (!title || !start || !end) return;
    addTodo({
      id: nanoid(),
      groupid,
      title,
      start,
      end,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-80">
        <h3 className="text-lg font-bold mb-4">할 일 추가</h3>
        <input
          type="text"
          placeholder="할 일 제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-2 mb-2"
        />
        <input
          type="text"
          placeholder="카테고리"
          value={groupid}
          onChange={(e) => setGroup(e.target.value)}
          className="w-full border p-2 mb-2"
        />
        <input
          type="datetime-local"
          value={start}
          onChange={(e) => setStart(e.target.value)}
          className="w-full border p-2 mb-2"
        />
        <input
          type="datetime-local"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
          className="w-full border p-2 mb-4"
        />
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-3 py-1 bg-gray-300 rounded">
            취소
          </button>
          <button
            onClick={submitTodo}
            className="px-3 py-1 bg-blue-500 text-white rounded"
          >
            저장
          </button>
        </div>
      </div>
    </div>
  );
}
