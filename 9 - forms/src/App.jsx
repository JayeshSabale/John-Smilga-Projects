import React, { useState } from 'react'
import { data } from './data'

function App() {
  const [name, setName] = useState('')
  const [users, setUsers] = useState(data)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name) return
    const newUser = {
      id: users.length === 0 ? 1 : users[users.length - 1].id + 1,
      name,
    }
    setUsers([...users, newUser])
    setName('')
  }

  const removeUser = (id) => {
    const newUsers = users.filter((user) => user.id !== id)
    setUsers(newUsers)
  }

  return (
    <div className="container">
      <h1>user challenge</h1>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add Users</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name:
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </form>
      <h3>All Users</h3>
      <h4>{users.length === 0 && 'No Users'}</h4>
      {users.map((user) => (
        <div key={user.id}>
          <p>
            {user.id} {user.name}
          </p>
          <button
            className="btn2 btn-block"
            onClick={() => removeUser(user.id)}
          >
            Remove
          </button>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default App
