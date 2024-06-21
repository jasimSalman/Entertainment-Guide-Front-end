import "../App.css"
import { Link } from "react-router-dom"

const Nav = ({ user, handleLogOut }) => {
  return (
    <div className="navbar">
      <div className="navButton">
        <Link to="/">
          <img src="" />
        </Link>
      </div>

      {user ? (
        <div>
          {user.type !== "owner" && (
            <Link to="/categories" className="navButton">
              Categories
            </Link>
          )}

          {user.type === "owner" ? (
            <Link to={`/booking/all/${user.id}`} className="navButton">
              All Booking
            </Link>
          ) : (
            <Link to={`/booking/${user.id}`} className="navButton">
              Bookings
            </Link>
          )}
          {user.type !== "owner" && (
            <Link to={`/list/show/${user.id}`} className="navButton">
              Favourites
            </Link>
          )}

          {user.type === "owner" && (
            <Link to="/MyPlaces" className="navButton">
              My Places
            </Link>
          )}

          <Link onClick={handleLogOut} to="/" className="navButton">
            SignOut
          </Link>
        </div>
      ) : (
        <div>
          <Link to="/categories" className="navButton">
            Categories
          </Link>
          <Link to="/signin" className="navButton">
            SignIn
          </Link>
        </div>
      )}
    </div>
  )
}

export default Nav
