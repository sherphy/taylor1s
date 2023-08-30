import './App.css'
import Home from './Home'
import Pokemon from './Pokemon'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {

  return (
    <>
    <Router>
      <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/pokemon" element={<Pokemon/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
