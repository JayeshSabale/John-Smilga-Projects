import React, { useEffect, useState } from 'react'
import axios from 'axios'

const url = 'https://api.github.com/users/QuincyLarson'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url)
        setUser(response.data)
      } catch (error) {
        setIsError(true)
        console.error('Error fetching data:', error)
      }
      setIsLoading(false)
    }

    fetchData()
  }, [])

  if (isLoading) {
    return <h1 className="container">Loading...</h1>
  }

  if (isError) {
    return <h1 className="container">There was an error...</h1>
  }

  const { avatar_url, name, company, bio } = user

  return (
    <div className="container">
      <h1>Multiple Returns Fetch Data</h1>
      <img
        style={{ width: '150px', borderRadius: '25px' }}
        src={avatar_url}
        alt={name}
      />
      <h2>{name}</h2>
      <h4>Works at {company}</h4>
      <p>{bio}</p>
    </div>
  )
}

export default App
