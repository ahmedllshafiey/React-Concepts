import { Complex } from "./components/Complex"
import { Conditional } from "./components/Conditional"
import { Control } from "./components/Control"
import { Counter } from "./components/Counter"
import { Diff } from "./components/Diff"
import { Event } from "./components/Event"
import { Fragment } from "./components/Fragment"
import { Function } from "./components/Function"
import { Legacy } from "./components/Legacy"
import { List } from "./components/List"
import { Nested } from "./components/Nested"
import { Props } from "./components/Props"
import { Recon } from "./components/Recon"
import { Render } from "./components/Render"
import { Style } from "./components/Style"
import { Dynamic } from "./Dynamic"

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

      <div>
        <h2>Example 09</h2>
        <Style/>
        <hr />
      </div>

      <div>
        <h2>Example 10</h2>
        <Control/>
        <hr />
      </div>

      <div>
        <h2>Example 11</h2>
        <Counter/>
        <hr />
      </div>

      <div>
        <h2>Example 12</h2>
        <Render/>
        <hr />
      </div>

      <div>
        <h2>Example 13</h2>
        <Diff/>
        <hr />
      </div>

      <div>
        <h2>Example 14</h2>
        <Complex/>
        <hr />
      </div>

      <div>
        <h2>Example 15</h2>
        <Recon/>
        <hr />
      </div>

      <div>
        <h2>Example 16</h2>
        <Dynamic/>
        <hr />
      </div>
    </>
  )
}

export default App
