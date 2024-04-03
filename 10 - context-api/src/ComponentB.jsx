import ComponentC from './ComponentC'

const ComponentB = () => {
  return (
    <div className="componentB">
      <div>
        {' '}
        <h4>Component B </h4>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
      </div>

      <ComponentC />
    </div>
  )
}
export default ComponentB
