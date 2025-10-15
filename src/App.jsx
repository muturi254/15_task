import './App.css';
import { TODOS } from './data/todo';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import Navbar from './components/Navbar';
import { useState } from 'react';


function App() {

  const [todos, setTodos] = useState(TODOS);

  const onDelete = (id) => {
    const updatedTod0s = todos.filter( todo => todo.id != id);
    setTodos(updatedTod0s)
  }

  const onAdd = (Todo) => {
    const newTodo = {
      id: todos.length + 2,
      title: Todo
    }

    setTodos([...todos, newTodo])
  }

  return (
    <>
      <Navbar />
      <AddTodo onAdd={onAdd} />
      <Todos todos={todos} onDelete={onDelete} />
    </>
  )
}

export default App
