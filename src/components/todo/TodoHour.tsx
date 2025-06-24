function TodoHour({ hourSelected }: { hourSelected: (hour: string) => void }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white p-6 rounded-xl shadow">
        <div>
          <div>
            {Array.from({ length: 10 }, (_, i) => (
              <button
                key={i}
                onClick={() =>
                  hourSelected((i + 7).toString().padStart(2, '0'))
                }
              >
                {(i + 7).toString().padStart(2, '0')}
              </button>
            ))}
          </div>
          <div>
            {Array.from({ length: 10 }, (_, i) => {
              const hour = i + 17 > 24 ? i + 17 - 24 : i + 17;
              return (
                <button key={i}>{hour.toString().padStart(2, '0')}</button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoHour;
