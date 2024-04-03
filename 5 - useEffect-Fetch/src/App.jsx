import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios'

const url = 'https://api.github.com/users'

function App() {
  const [users, setUsers] = useState([])

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(url)
      setUsers(response.data)
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const usersOfGithub = users.map((user) => (
    <li key={user.id} className="user-item">
      <img src={user.avatar_url} alt={user.login} className="avatar" />
      <div className="user-info">
        <h5>{user.login}</h5>
        <p>
          <a href={user.html_url} className="profile-link">
            Profile
          </a>
        </p>
      </div>
    </li>
  ))

  return (
    <section className="container">
      <h1>Fetch Data Example</h1>
      <hr />
      <h3>Github users</h3>
      <ul className="users">{usersOfGithub}</ul>
    </section>
  )
}

export default App
