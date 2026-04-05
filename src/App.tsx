import { Conditional } from "./components/Conditional"
import { Event } from "./components/Event"
import { Fragment } from "./components/Fragment"
import { Function } from "./components/Function"
import { Legacy } from "./components/Legacy"
import { List } from "./components/List"
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

      <div>
        <h2>Example 05</h2>
        <Conditional/>
        <hr />
      </div>

      <div>
        <h2>Example 06</h2>
        <List/>
        <hr />
      </div>

      <div>
        <h2>Example 07</h2>
        <Event/>
        <hr />
      </div>

      <div>
        <h2>Example 08</h2>
        <Fragment/>
        <hr />
      </div>
    </>
  )
}

export default App
