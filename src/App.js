import './App.css';
import ToDoBar from './Components/ToDoBar/ToDoBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title is-1 has-text-danger b11-title">todolist_</h1>
        <ToDoBar />
      </header>
    </div>
  );
}

export default App;
