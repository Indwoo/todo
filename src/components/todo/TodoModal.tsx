import { useState } from 'react';
import TodoHour from './TodoHour';

export default function TodoModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  const today = Date();
  const [isHourOpen, setIsHourOpen] = useState(false);
  const [selectedHour, setSelectedHour] = useState('시간');

  const handleSelectedHour = (hour: string) => {
    setSelectedHour(hour);
    setIsHourOpen(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white p-6 rounded-xl shadow">
        {isHourOpen && <TodoHour hourSelected={handleSelectedHour} />}
        <div>
          <input type="number" defaultValue={today.slice(11, 15)}></input>
          <input type="text" defaultValue={today.slice(4, 7)}></input>
          <input type="number" defaultValue={today.slice(8, 10)}></input>
        </div>
        <div>
          Start
          <button onClick={() => setIsHourOpen(true)}>
            {selectedHour}
          </button>{' '}
          <button>분</button>
        </div>
        <div>
          End<button onClick={() => setIsHourOpen(true)}>시간</button>{' '}
          <button>분</button>
        </div>
        <button className="mt-4">저장</button>
        <button className="mt-4" onClick={onClose}>
          취소
        </button>
      </div>
    </div>
  );
}
