import '../App.css'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.svg'

const Nav = ({ user, handleLogOut }) => {
  return (
    <div className="navbar">
      <div className="logo">
        <div className="logo-container">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              style={{ height: '55px', width: '55px' }}
            />
          </Link>
        </div>
      </div>

      <div className="nav-links-container">
        {user ? (
          <div>
            {user.type !== 'owner' && (
              <Link to="/categories" className="navButton">
                Categories
              </Link>
            )}

            {user.type === 'owner' ? (
              <Link to={`/booking/all/${user.id}`} className="navButton">
                All Booking
              </Link>
            ) : (
              <Link to={`/booking/${user.id}`} className="navButton">
                Bookings
              </Link>
            )}
            {user.type !== 'owner' && (
              <Link to={`/list/show/${user.id}`} className="navButton">
                Favourites
              </Link>
            )}

            {user.type === 'owner' && (
              <Link to="/MyPlaces" className="navButton">
                My Places
              </Link>
            )}

            <Link onClick={handleLogOut} to="/" className="navButton">
              Sign Out
            </Link>
          </div>
        ) : (
          <div className="guest-user-links">
            <Link to="/categories" className="navButton">
              Categories
            </Link>
            <Link to="/signin" className="navButton">
              Sign In
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Nav
