// import logo from './logo.svg';
import './App.css';
import TemperatureConverter from './components/TemperatureConverter';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TemperatureConverter />
        <TodoList />
      </header>
    </div>
  );
}

export default App;
