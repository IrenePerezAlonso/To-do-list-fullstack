import React from 'react';
import { Provider } from 'react-redux';
import TodoList from './components/todoList';
import configureStore from './redux/store/index';
import './App.css';

function App() {
  return (
    <>
      <Provider store={configureStore()}>
        <h1 className="todolist-tittle">📝 TO DO LIST</h1>
        <TodoList />
      </Provider>
    </>
  );
}

export default App;
