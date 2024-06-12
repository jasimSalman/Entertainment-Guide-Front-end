import './App.css'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Categories from './pages/Categories'
import SignIn from './pages/SignIn'
import Home from './pages/Home'
import About from './components/About'


function App() {
  return(
  <div>
    <header>
      <Nav/>
    </header>
      <Routes>
        <Route path="/nav" element={<Nav />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/" element={<Home />} />
    </Routes>

    <main>
    
    </main>
  </div>
  )
}

export default App
