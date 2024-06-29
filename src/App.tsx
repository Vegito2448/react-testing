import { useEffect, useState } from 'react';
import './App.css';
import { Application, Counter, MuiMode, Skills } from './components';
import { Todo, Todos } from './interfaces';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetch('https://dummyjson.com/todos')
      .then((res) => res.json())
      .then((data: Todos) => {
        setTodos(data.todos);
      });
  }, []);

  return (
    <>
      <MuiMode />
      <h1>Vite + React</h1>
      <Counter />
      <hr />
      {Boolean(todos.length) && <div>Todo List: {todos.length}</div>}
      <hr />
      <Application />
      <hr />
      <Skills title="Skills" skills={['JS', 'ML', 'Py', 'PHP']} />
    </>
  );
}

export default App;
