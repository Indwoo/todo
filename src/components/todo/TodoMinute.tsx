function TodoMinute({
  minuteSelected,
}: {
  minuteSelected: (minute: string) => void;
}) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white p-6 rounded-xl shadow">
        <div>
          {Array.from({ length: 5 }, (_, i) => (
            <button key={i}>{(i * 10 + 10).toString()}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TodoMinute;
