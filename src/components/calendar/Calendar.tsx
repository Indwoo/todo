import CalendarCell from './CalendarCell';
import CalendarHeader from './CalendarHeader';

function Calendar() {
  const timeLabels = Array.from({ length: 20 }).map((_, index) => {
    const hour = 7 + index;
    const displayHour = hour % 24;
    const formattedHour =
      displayHour < 10 ? `0${displayHour}` : `${displayHour}`;
    return `${formattedHour}:00`;
  });

  return (
    <div className="grid grid-cols-[auto_repeat(7,1fr)] grid-rows-[auto_repeat(20,minmax(0,1fr))] ">
      <div className="col-start-1 row-start-1  border-r border-gray-300 "></div>
      <div className="col-start-2 col-span-7 row-start-1">
        <CalendarHeader />
      </div>
      {timeLabels.map((time, index) => (
        <div
          key={index}
          style={{ gridRowStart: index + 2 }}
          className="col-start-1 h-10 flex items-start justify-center mx-2 border-gray-300 text-sm bg-gray-50"
        >
          {time}
        </div>
      ))}
      {Array.from({ length: 7 }).map((_, dayIndex) =>
        Array.from({ length: 20 }).map((_, cellIndex) => (
          <CalendarCell key={`${dayIndex}-${cellIndex}`} />
        )),
      )}
    </div>
  );
}

export default Calendar;
