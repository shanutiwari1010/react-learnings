import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
function App() {
  return (
    <>
      <h1 className="font-bold text-xl">ADD YOUR TASK</h1>
      <AddTodo />
      <Todos />

    </>
  );
}

export default App;
