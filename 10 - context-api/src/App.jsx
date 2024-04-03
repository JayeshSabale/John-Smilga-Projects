import { useState, createContext } from 'react'

import { useContext } from 'react'
import ComponentB from './ComponentB'

export const NavbarContext = createContext()
// console.log(NavbarContext.Provider)

//custom hook
export const useAppContext = () => useContext(NavbarContext)

const App = () => {
  const [user, setUser] = useState({ name: 'Bob' })

  function logout() {
    setUser(null)
  }

  function login() {
    setUser({ name: 'Bob' })
  }

  return (
    <NavbarContext.Provider value={{ user, logout, login }}>
      <div className="componentA">
        <h3>CONTEXT API</h3>
        <h4>Component A</h4>
        <h4 className="comA-condition">
          {user ? `Welcome ${user.name}` : 'Welcome Guest'}
        </h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <ComponentB />
      </div>
    </NavbarContext.Provider>
  )
}
export default App
