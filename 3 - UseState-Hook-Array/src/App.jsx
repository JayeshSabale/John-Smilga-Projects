import React, { useState } from 'react'
import { data } from './data'

function App() {
  const [people, setPeople] = useState(data)

  function removePerson(id) {
    // console.log(id);
    const newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
    // setPeople((prevPeople) => {
    //   return prevPeople.filter((person) => person.id !== id)
    // })
    console.log(newPeople)
  }

  function clearAllItems() {
    setPeople([])
  }

  const singlePerson = people.map((item, index) => {
    return (
      <div key={index}>
        <h3>
          {item.id} {item.name}
        </h3>
        <button className="useState_btn1" onClick={() => removePerson(item.id)}>
          Remove
        </button>
        <hr />
      </div>
    )
  })

  return (
    <div className="container">
      <h2>UseState Array Example</h2>
      <hr />
      {singlePerson}
      <button onClick={clearAllItems} className="useState_btn2">
        Clear Items
      </button>
    </div>
  )
}

export default App
