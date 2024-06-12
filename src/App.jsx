import './App.css'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Categories from './pages/Categories'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Home from './pages/Home'


function App() {
  return(
  <div>
    <header>
      <Nav/>
    </header>
    <main>
      <Routes>
        <Route path="/nav" element={<Nav />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/" element={<Home />} />
        <Route path="/SignUp" element={<SignUp />} />
    </Routes>

    
    
    </main>
  </div>
  )
}

export default App
