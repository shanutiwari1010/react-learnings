import {useState} from 'react'
import { useTodo } from '../context/TodoContext'

function TodoItem() {
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoMsg , setTodoMsg] = usesate (todo.todo)
    const {updateTodo, deleteTodo , toggleComplete} = useTodo()

    const editTodo = () => {
        updateTodo(todo.id, {...todo, todo: todoMsg})
        setIsTodoEditable(false)
    }

    const toggleCompleted = () => {
        toggleComplete(todo.id)
    }
  return (
    <div 
    className='flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-white/50 duration-300 text-black ${todo.completed ? "" : ""}'>
      TodoItem
    </div>
  )
}

export default TodoItem
