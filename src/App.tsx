import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Stop from './pages/Stop';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/stop" element = {<Stop/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
