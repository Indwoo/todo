import Calendar from './components/calendar/Calendar';
import Study from './components/studytime/Study';
import TodoModalContainer from './components/todo/TodoModalContainer';
import Nav from './components/topnav/Nav';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex">
      <div className="flex flex-col grow-[8] basis-0 bg-white">
        <div className="p-4 border-b shadow-sm">
          <Nav />
        </div>
        <section className="p-4 border-b">
          <Study />
        </section>
        <main className="flex-1 p-4">
          <Calendar />
        </main>
      </div>
      <div className="flex flex-col grow-[2] basis-0 border-l border-gray-300 bg-white">
        <TodoModalContainer />
      </div>
    </div>
  );
}

export default App;
