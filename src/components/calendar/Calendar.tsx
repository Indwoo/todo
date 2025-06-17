import CalendarCell from './CalendarCell';
import CalendarHeader from './CalendarHeader';

function Calendar() {
  return (
    <div>
      <CalendarHeader></CalendarHeader>
      <div className="grid grid-cols-7">
        {Array.from({ length: 7 }).map((_, dayIndex) => (
          <div key={dayIndex} className="flex flex-col">
            {Array.from({ length: 20 }).map((_, cellIndex) => (
              <CalendarCell key={`${dayIndex}-${cellIndex}`} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;
