import { useEffect, useState } from 'react';
import './App.css';
import reactLogo from './assets/react.svg';
import { Application } from './components';
import { Todo, Todos } from "./interfaces";
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0);

  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetch('https://dummyjson.com/todos')
      .then(res => res.json())
      .then((data: Todos) => {
        setTodos(data.todos);
      });
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      {
        Boolean(todos.length) &&
        <div>Todo List: {todos.length}</div>
      }

      <Application />
    </>
  );
}

export default App;
