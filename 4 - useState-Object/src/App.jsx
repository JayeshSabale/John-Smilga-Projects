import React, { useState } from 'react'

function T4_useState_object() {
  const [person, setPerson] = useState({
    city: 'thane',
    favoriteSport: 'football',
    name: 'Tipu',
    age: 2,
    hobby: 'Eating',
  })

  function showJayeshData() {
    setPerson({ ...person, name: 'Jayesh', age: 24, hobby: 'Cycling' })
  }

  function showTipuData() {
    setPerson({
      city: 'thane',
      favoriteSport: 'football',
      name: 'Tipu',
      age: 2,
      hobby: 'Eating',
    })
  }

  return (
    <div className="container">
      <h2>UseState Object Example</h2>
      <br />
      <p>City : {person.city}</p>
      <p>Favorite Sport : {person.favoriteSport}</p>
      <p>Name : {person.name}</p>
      <p>Age : {person.age}</p>
      <p>Enjoys : {person.hobby}</p>
      <button className="useState_btn1" onClick={showJayeshData}>
        Show Jayesh
      </button>
      <button className="useState_btn1" onClick={showTipuData}>
        Show Tipu
      </button>
    </div>
  )
}

export default T4_useState_object
