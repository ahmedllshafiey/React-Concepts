import { Legacy } from "./components/Legacy"
import { Nested } from "./components/Nested"

function App() {
  return (
    <>
      <h1>React Concepts</h1>
      <hr />
      <div>
        <h2>Example 01</h2>
        <Legacy/>
        <hr />
      </div>

      <div>
        <h2>Example 02</h2>
        <Nested/>
        <hr />
      </div>
    </>
  )
}

export default App
