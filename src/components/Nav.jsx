import '../App.css'
import { Link } from 'react-router-dom'


const Nav = () => {




  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/categories">categories</Link>
      <Link to="/AddPlace">add place</Link>
      <Link to="/MyPlaces">My Places</Link>
      <Link to="/Bookings">Bookings</Link>
      <Link to="/signIn">sign in</Link>
      
      
    </div>
  )

}

export default Nav