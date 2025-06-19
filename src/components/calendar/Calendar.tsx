import { addDays, format, isSameDay, startOfWeek } from 'date-fns';
import { ko } from 'date-fns/locale';
import { useTodoStore } from '../../store/todoStore';
import CalendarCell from './CalendarCell';
import CalendarHeader from './CalendarHeader';

const categoryColor: Record<string, string> = {
  study: 'bg-blue-500', // 마커가 잘 보이도록 좀 더 진한 색 사용
  workout: 'bg-green-500',
  book: 'bg-yellow-500',
  etc: 'bg-gray-500',
};

function Calendar() {
  const todos = useTodoStore((state) => state.todo);

  const datefns = new Date();
  const startDate = startOfWeek(datefns, { weekStartsOn: 0 }); // 주의 시작을 일요일(0)로 설정
  const dayHeaders = Array.from({ length: 7 }).map((_, i) =>
    addDays(startDate, i),
  );

  // 시간 레이블을 생성합니다 (오전 7시부터 시작하여 20칸).
  const timeLabels = Array.from({ length: 20 }).map((_, index) => {
    const hour = 7 + index;
    const displayHour = hour % 24;
    const formattedHour =
      displayHour < 10 ? `0${displayHour}` : `${displayHour}`;
    return `${formattedHour}:00`;
  });

  const todosInWeek = todos.filter((todo) => {
    const todoStartDate = new Date(todo.start);
    return dayHeaders.some((day) => isSameDay(todoStartDate, day));
  });

  return (
    <div className="grid grid-cols-[auto_repeat(7,1fr)] grid-rows-[auto_repeat(20,minmax(0,1fr))] relative">
      {/* 좌측 상단 빈 공간 */}
      <div className="col-start-1 row-start-1 border-b border-r border-gray-300 bg-gray-100"></div>

      <div className="col-start-2 col-span-7 row-start-1">
        <CalendarHeader />
      </div>

      {timeLabels.map((time, index) => (
        <div
          key={index}
          style={{ gridRowStart: index + 2 }}
          className="col-start-1 h-16 flex items-start justify-center mx-2 border-r border-gray-300 text-sm bg-gray-50"
        >
          {time}
        </div>
      ))}
      {Array.from({ length: 7 }).map((_, dayIndex) =>
        Array.from({ length: 20 }).map((_, cellIndex) => (
          <CalendarCell
            key={`${dayIndex}-${cellIndex}`}
            style={{
              gridColumnStart: dayIndex + 2,
              gridRowStart: cellIndex + 2,
            }}
          />
        )),
      )}

      <div
        className="absolute inset-0 grid grid-cols-7 grid-rows-[repeat(20,minmax(0,1fr))]"
        style={{ gridColumn: '2 / span 7', gridRow: '2 / span 20' }}
      >
        {todosInWeek.map((todo) => {
          const startTime = new Date(todo.start);

          const dayIndex = dayHeaders.findIndex((day) =>
            isSameDay(startTime, day),
          );

          if (dayIndex === -1) {
            return null;
          }

          const startHour = startTime.getHours();
          const startMinute = startTime.getMinutes();

          let hourOffset;
          if (startHour >= 7) {
            hourOffset = startHour - 7;
          } else {
            hourOffset = startHour + 24 - 7;
          }

          if (hourOffset < 0 || hourOffset >= 20) {
            return null;
          }
          const gridRowStart = 1 + hourOffset + startMinute / 60;
          return (
            <div
              key={todo.id}
              style={{
                gridColumn: dayIndex + 1,
                gridRow: `${gridRowStart} / span 1`,

                zIndex: 10,
              }}
              className={`p-0.5 text-xs overflow-hidden ${categoryColor[todo.groupid] || 'bg-gray-400'} text-white font-bold`} // 배경색, 텍스트 색상, 폰트 스타일
            >
              {format(startTime, 'HH:mm')}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Calendar;
