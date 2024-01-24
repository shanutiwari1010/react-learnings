import { useState } from 'react'

import './App.css'

function App() {

  const[counter, setcounter] = useState(10)
  // let counter = 15

  const addValue = () =>{
    setcounter((prevCounter)=> prevCounter + 1)
    setcounter((prevCounter)=> prevCounter + 1)
    setcounter((prevCounter)=> prevCounter + 1)
    setcounter((prevCounter)=> prevCounter + 1)

  }

  const removeValue = () =>{
    setcounter((prevCounter)=> prevCounter - 1)
    setcounter((prevCounter)=> prevCounter - 1)
    setcounter((prevCounter)=> prevCounter - 1)
    setcounter((prevCounter)=> prevCounter - 1)

  }

  return (
    <>
     <h1>React Course {counter}</h1>
     <h2> Counter value : {counter} </h2>
     <button onClick={addValue}>Add value</button>{" "}
     <button onClick={removeValue}>Remove value</button>
     <p>footer: {counter} </p>

    </>
  )
}

export default App
