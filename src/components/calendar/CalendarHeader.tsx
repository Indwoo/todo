import { addDays, format, getDate, startOfWeek } from 'date-fns';

const CalendarHeader = () => {
  const datefns = new Date();
  const startDate = startOfWeek(datefns, { weekStartsOn: 0 });
  const thisWeek = Array.from({ length: 7 }).map((_, i) =>
    getDate(addDays(startDate, i)),
  );
  console.log(thisWeek);

  return (
    <div className="grid grid-cols-7">
      {thisWeek.map((i) => (
        <div key={i} className="text-center font-bold py-2 border bg-gray-100">
          {i}요일
        </div>
      ))}
    </div>
  );
};

export default CalendarHeader;
