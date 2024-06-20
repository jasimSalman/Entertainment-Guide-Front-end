import '../App.css'
import { Link } from 'react-router-dom'

const Nav = ({ user, handleLogOut }) => {
  return (
    <div className="navbar">
      <Link to="/">
        <img src="" alt="logo" />
      </Link>
      {user
        ? user.type !== 'owner' && <Link to="/categories">categories</Link>
        : null}
      {user ? (
        <div>
          {user.type !== 'owner' && (
            <Link to={`/list/show/${user.id}`}>My list</Link>
          )}
          {user.type === 'owner' ? (
            <>
              <Link to={`/booking/all/${user.id}`}>All Booking</Link>
            </>
          ) : (
            <Link to={`/booking/${user.id}`}>Bookings</Link>
          )}

          {user.type === 'owner' && <Link to="/MyPlaces">My Places</Link>}
          <Link onClick={handleLogOut} to="/">
            Sign out
          </Link>
        </div>
      ) : (
        <Link to="/signin">sign in</Link>
      )}
    </div>
  )
}

export default Nav
