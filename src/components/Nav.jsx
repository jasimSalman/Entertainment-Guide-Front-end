import '../App.css'
import { Link } from 'react-router-dom'

const Nav = ({ user, handleLogOut }) => {
  let userOptions
  if (user) {
    userOptions = (
      <nav>
        <h3>Welcome {user.email}!</h3>
        <Link onClick={handleLogOut} to="/">
          Sign Out
        </Link>
      </nav>
    )
  }

  return (
    <div className="navbar">
      <Link to="/">
        <img src="" alt="logo" />
      </Link>
      <Link to="/categories">categories</Link>
      {user ? (
        <div>
          <Link>My list</Link>
          <Link onClick={handleLogOut} to="/">
            ign out
          </Link>
        </div>
      ) : (
        <Link to="/signin">sign in</Link>
      )}
      {/* <Link to="/AddPlace">add place</Link>
      <Link to="/MyPlaces">My Places</Link>
      <Link to="/Bookings">Bookings</Link> */}
    </div>
  )
}

export default Nav
