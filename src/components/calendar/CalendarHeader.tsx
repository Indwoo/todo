import { addDays, format, startOfWeek } from 'date-fns';
import { ko } from 'date-fns/locale/ko';

const CalendarHeader = () => {
  const datefns = new Date();
  const startDate = startOfWeek(datefns, { weekStartsOn: 0 });

  const thisWeek = Array.from({ length: 7 }).map((_, i) =>
    addDays(startDate, i),
  );

  return (
    <div className="grid grid-cols-7">
      {thisWeek.map((date) => (
        <div className="text-center font-bold py-2 border bg-gray-100">
          {format(date, 'd')}
          {format(date, 'EEE', { locale: ko })}
        </div>
      ))}
    </div>
  );
};

export default CalendarHeader;
