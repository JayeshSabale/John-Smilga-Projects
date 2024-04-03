import { people } from './data'
import Person from './Person'

function T1_leverage_javascript() {
  return (
    <div className="container">
      <h1>Leverage Javascript</h1>
      {people.map((person) => {
        return <Person key={person.id} {...person} />
      })}
    </div>
  )
}

export default T1_leverage_javascript
