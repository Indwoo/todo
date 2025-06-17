import './App.css';
import Calendar from './components/calendar/Calendar';
import Study from './components/studytime/Study';
import Nav from './components/topnav/Nav';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
      <header className="p-4 border-b bg-white shadow-sm">
        <Nav />
      </header>

      <section className="p-4 border-b bg-white">
        <Study />
      </section>

      <main className="flex-1 p-4">
        <Calendar />
      </main>
    </div>
  );
}

export default App;
