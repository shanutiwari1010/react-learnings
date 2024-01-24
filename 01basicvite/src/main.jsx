/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const reactElement = {
    type : 'a',
    props : {
        href : "https://google.com",
        target : '_blank'
    },
    children : 'Click me to visit google'
}

function MyApp(){
    return(
        <div>
            <h1>Custom react app</h1>
        </div>
    )
}

const AnotherElement = (
    <a href="https://google.com">Visit Google </a>
)

const areactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: "_blank"},
    'click to visit google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <App/>
 
)
