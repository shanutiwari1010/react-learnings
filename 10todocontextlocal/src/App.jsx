import { useState , useEffect} from 'react'
import './App.css'
import { TodoProvider } from './context'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) =>{
      setTodos((prev) => [{id: Date.now(), ...todo} , ...prev])
  }

  const updateTodo = (id, todo) =>{
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === todo.id ? todo : prevTodo)))

  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !==id))
  }

  const toggleComplete = (id) => {
    setTodos ((prev) =>
    prev.map((prevTodo) => 
    prevTodo.id === id ? {...prevTodo, completed : !prevTodo.completed} : prevTodo
    
    )
    )
  }

  useEffect (()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length >0) {
      setTodos(todos)

    }
  },[])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  } , [todos])
  return (
    <TodoProvider >
      
    </ TodoProvider>
  )
}

export default App
