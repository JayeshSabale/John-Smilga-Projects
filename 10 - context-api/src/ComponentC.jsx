import { useAppContext } from './App'

const ComponentC = () => {
  const { user, logout, login } = useAppContext()

  return (
    <div className="componentC">
      <h4>Component C</h4>

      {user ? (
        <>
          <p>Hello there, {user.name}</p>
          <button type="button" onClick={logout} className="logout-button">
            Logout
          </button>
        </>
      ) : (
        <>
          <p>Please log in</p>
          <button onClick={login} className="login-button">
            Login
          </button>
        </>
      )}
    </div>
  )
}

export default ComponentC
