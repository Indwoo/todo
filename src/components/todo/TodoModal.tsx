import { useState } from 'react';
import TodoHour from './TodoHour';
import TodoMinute from './TodoMinute';

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
  const [isMinuteOpen, setIsMinuteOpen] = useState(false);
  const [selectedStartHour, setSelectedStartHour] = useState('시간');
  const [selectedEndHour, setSelectedEndHour] = useState('시간');
  const [selectedHour, setSelectedHour] = useState<'start' | 'end' | null>(
    null,
  );

  const handleSelectedHour = (hour: string) => {
    if (selectedHour == 'start') {
      setSelectedStartHour(hour);
    } else if (selectedHour == 'end') {
      setSelectedEndHour(hour);
    }
    setSelectedHour(null);
    setIsHourOpen(false);
    setIsMinuteOpen(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white p-6 rounded-xl shadow">
        {isHourOpen && <TodoHour hourSelected={handleSelectedHour} />}
        {isMinuteOpen && <TodoMinute minuteSelected={handleSelectedHour} />}
        <div>
          <input type="number" defaultValue={today.slice(11, 15)}></input>
          <input type="text" defaultValue={today.slice(4, 7)}></input>
          <input type="number" defaultValue={today.slice(8, 10)}></input>
        </div>
        <div>
          Start :
          <button
            onClick={() => {
              setIsHourOpen(true);
              setSelectedHour('start');
            }}
          >
            {selectedStartHour}
          </button>{' '}
          <button onClick={() => setIsMinuteOpen(true)}>분</button>
        </div>
        <div>
          End :
          <button
            onClick={() => {
              setIsHourOpen(true);
              setSelectedHour('end');
            }}
          >
            {selectedEndHour}
          </button>{' '}
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
