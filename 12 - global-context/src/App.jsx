import React from 'react'

import './style.css'
import { useGlobalContext } from './Context'

function App() {
  const { name, setName } = useGlobalContext()

  function handleClick() {
    setName('John')
  }
  return (
    <div className="componentA">
      <h3>This is an App Component</h3>
      <h4>This is the value which was provided globally : {name}</h4>

      <button onClick={handleClick}>Change to John</button>
    </div>
  )
}

export default App
