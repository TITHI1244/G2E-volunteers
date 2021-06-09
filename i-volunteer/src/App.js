import './App.css';
import Contact from './Components/Contact';
import EventSection from './Components/EventSection';
import Registration from './Components/Registration';

function App() {
  return (
    <div className="App">
      <EventSection />
      <Registration />
      <Contact />
    </div>
  );
}

export default App;
