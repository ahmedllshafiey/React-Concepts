import { Function } from "./components/Function"
import { Legacy } from "./components/Legacy"
import { Nested } from "./components/Nested"
import { Props } from "./components/Props"

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

      <div>
        <h2>Example 03</h2>
        <Props/>
        <hr />
      </div>
      
      <div>
        <h2>Example 04</h2>
        <Function/>
        <hr />
      </div>
    </>
  )
}

export default App
