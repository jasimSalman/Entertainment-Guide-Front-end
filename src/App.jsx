import './App.css'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
//import Categories from './components/Categories'
//import About from './components/About'


function App() {
  return(
  <div>
    <header>
      <Nav/>
    </header>
    
    <Routes>
      <Route path="/nav" element={<Nav />} />
    </Routes>
  </div>
  )
}

export default App
