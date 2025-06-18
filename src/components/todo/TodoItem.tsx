import type { TodoItem } from '../../store/todoStore';

type Props = {
  todo: TodoItem;
};
export default function TodoItem({ todo }: Props) {
  return (
    <div className="border p-2 rounded shadow-sm bg-blue-50">
      <p className="font-semibold">{todo.title}</p>
      <p className="font-mono text-m text-gray-600">
        날짜 : {todo.start.slice(0, 10)}
      </p>
      <p className="font-mono text-m text-gray-600">
        목표 시간 : {todo.start.slice(11, 16)} ~ {todo.end.slice(11, 16)}
      </p>
    </div>
  );
}
