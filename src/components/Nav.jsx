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
        user.type !== 'owner' && <Link to="/categories">categories</Link>
      ) : (
        <Link to="/categories">categories</Link>
      )}

      {user ? (
        <div>
          {user.type !== "owner" && (
            <Link to={`/list/show/${user.id}`} className="navButton">
              My list
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
        <Link to="/signin" className="navButton">
          SignIn
        </Link>
      )}
    </div>
  )
}

export default Nav
