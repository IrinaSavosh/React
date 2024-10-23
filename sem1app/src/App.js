import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting';
import NewComponent from './components/NewComponent';
import CurrentTime from './components/CurrentTime';
import EvenCard from './components/EvenCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h4>Random Title</h4>
        <p>Random text</p>
        <h1>Изучаем React</h1>
        <Greeting />
        <NewComponent />
        <CurrentTime />
        <EvenCard />
      </header>
      {/* <p>Hidden random text</p> */}
    </div>
  );
}

export default App;
