import React from 'react';
import './App.css';
import ToDoBar from './Components/ToDoBar/ToDoBar';
import DescriptionBox from './Components/DescriptionBox/DescriptionBox';

class App extends React.Component {

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title is-1 has-text-danger b11-title">todolist_</h1>
        <ToDoBar />
        
      </header>
      <DescriptionBox />
    </div>
  );
}
}

export default App;
