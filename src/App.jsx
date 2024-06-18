import "./App.css"
import { Route, Routes } from "react-router-dom"
import Nav from "./components/Nav"
import Categories from "./pages/Categories"
import SignIn from "./pages/SignIn"
import Register from "./pages/Register"
import Home from "./pages/Home"
import Places from "./pages/Places"
import PlaceDetail from "./pages/PlaceDetail"
import AddPlace from "./pages/AddPlace"
import MyPlaces from "./pages/MyPlaces"
import Bookings from "./pages/Bookings"
import UserFavList from "./pages/UserFavList"
import EditPlace from "./pages/EditPlace"
import UpdatePassword from "./pages/UpdatePassword"
import { useEffect, useState } from "react"
import { CheckSession } from "./services/Auth"
import OwnerBookings from "./pages/OwnerBookings"

function App() {
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    setUser(null)
    localStorage.clear()
  }

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div>
      <header>
        <Nav user={user} handleLogOut={handleLogOut} />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/categories" element={<Categories />} />

          <Route path="/Signin" element={<SignIn setUser={setUser} />} />

          <Route path="/Register" element={<Register />} />

          <Route path="/categories/places/:id" element={<Places />} />

          <Route
            path="/places/:placeId"
            element={<PlaceDetail user={user} />}
          />

          <Route path="/myPlaces" element={<MyPlaces />} />

          <Route path="/addPlace" element={<AddPlace />} />

          <Route path="/booking/:userId" element={<Bookings />} />

          <Route path="/booking/all/:userId" element={<OwnerBookings />} />

          <Route
            path="/list/show/:userId"
            element={<UserFavList user={user} />}
          />
          <Route path="/myPlaces/edit/:placeId" element={<EditPlace />} />
          <Route path="/updatePassword" element={<UpdatePassword />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
