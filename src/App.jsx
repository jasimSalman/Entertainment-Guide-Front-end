import "./App.css"
import { Route, Routes } from "react-router-dom"
import Nav from "./components/Nav"
import Categories from "./pages/Categories"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Home from "./pages/Home"
import Places from "./pages/Places"
import PlaceDetail from "./pages/PlaceDetail"
import AddPlace from "./pages/AddPlace"

function App() {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nav" element={<Nav />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="categories/places/:id" element={<Places />} />
          <Route path="places/:placeId" element={<PlaceDetail />} />
          <Route path="/addPlace" element={<AddPlace />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
