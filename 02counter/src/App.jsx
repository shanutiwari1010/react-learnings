import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
      console.log("clicked", counter);
    }
  };
  return (
    <div>
      <h1>Lean React</h1>
      <h2>counter value: {counter}</h2>

      <div className="button">
        <button onClick={addValue}>add value {counter}</button>
        <button
          onClick={() => {
            if (counter > 0) {
              setCounter(counter - 1);
              console.log("clicked", counter);
            }
          }}
        >
          remove value {counter}
        </button>
      </div>

      <p>footer: {counter} </p>
    </div>
  );
}

export default App;

// import { useState } from 'react'

// import './App.css'

// function App() {

//   const[counter, setcounter] = useState(10)
//   // let counter = 15

//   const addValue = () =>{
//     setcounter((prevCounter)=> prevCounter + 1)
//     setcounter((prevCounter)=> prevCounter + 1)
//     setcounter((prevCounter)=> prevCounter + 1)
//     setcounter((prevCounter)=> prevCounter + 1)

//   }

//   const removeValue = () =>{
//     setcounter((prevCounter)=> prevCounter - 1)
//     setcounter((prevCounter)=> prevCounter - 1)
//     setcounter((prevCounter)=> prevCounter - 1)
//     setcounter((prevCounter)=> prevCounter - 1)

//   }

//   return (
//     <>
//      <h1>React Course {counter}</h1>
//      <h2> Counter value : {counter} </h2>
//      <button onClick={addValue}>Add value</button>{" "}
//      <button onClick={removeValue}>Remove value</button>
//      <p>footer: {counter} </p>

//     </>
//   )
// }

// export default App
