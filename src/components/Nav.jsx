import "../App.css"
import { Link } from "react-router-dom"

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
      <Link to="/">Home</Link>
      <Link to="/categories">categories</Link>
      <Link to="/signIn">sign in</Link>
      <Link to="/Register">sign Uup</Link>
    </div>
  )
}

export default Nav
