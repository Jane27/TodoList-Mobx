import React from 'react';
import logo from './logo.svg';
import TodoList from './components/TodoList';
import './App.scss';

const App: React.FC = () => {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          Todo List
        </header>
        <TodoList />
      </div>
  );
}

export default App;
