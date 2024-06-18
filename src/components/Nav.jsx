import "../App.css"
import { Link } from "react-router-dom"

const Nav = ({ user, handleLogOut }) => {
  // let userOptions
  // if (user) {
  //   userOptions = (
  //     <nav>
  //       <h3>Welcome {user.email}!</h3>
  //       <Link onClick={handleLogOut} to="/">
  //         Sign Out
  //       </Link>
  //     </nav>
  //   )
  // }

  return (
    <div className="navbar">
      <Link to="/">
        <img src="" alt="logo" />
      </Link>
      <Link to="/categories">categories</Link>
      {user ? (
        <div>
          <Link to={`/list/show/${user.id}`}>My list</Link>
          {user.type === "owner" ? (
            <>
              <Link to={`/booking/all/${user.id}`}>All Booking</Link>
              <Link to={`/addPlace`}>Add Place</Link>
            </>
          ) : (
            <Link to={`/booking/${user.id}`}>Bookings</Link>
          )}

          {user.type === "owner" && <Link to="/MyPlaces">My Places</Link>}
          <Link onClick={handleLogOut} to="/">
            Sign out
          </Link>
        </div>
      ) : (
        <Link to="/signin">sign in</Link>
      )}
      {/* <Link to="/AddPlace">add place</Link> */}
    </div>
  )
}

export default Nav
