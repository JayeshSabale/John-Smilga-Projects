import React, { useReducer } from 'react'
import { data } from './data'
import { CLEAR_ALL_ITEMS, RESET_LIST, REMOVE_ITEM } from './action'
import reducer from './reducer'

const defaultState = {
  people: data,
  isLoading: false,
}

function App() {
  const [state, dispatch] = useReducer(reducer, defaultState)

  function removePerson(id) {
    dispatch({ type: REMOVE_ITEM, payload: { id } })
  }

  function clearAllItems() {
    dispatch({ type: CLEAR_ALL_ITEMS })
  }

  function reset() {
    dispatch({ type: RESET_LIST })
  }

  const singlePerson = state.people.map((item, index) => {
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

  console.log(state)
  return (
    <div className="container">
      <h2>useReducer Hook</h2>
      <hr />
      {singlePerson}

      {state.people.length === 0 ? (
        <button onClick={reset} className="useState_btn2">
          Reset
        </button>
      ) : (
        <button onClick={clearAllItems} className="useState_btn2">
          Clear Items
        </button>
      )}
    </div>
  )
}

export default App
