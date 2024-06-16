import '../App.css'
import { Link } from 'react-router-dom'

const PlaceCard = ({ id, name, poster }) => {
  return (
    <Link to={`/places/${id}`}>
      <div className="placeCard" id={id}>
        <h3>{name}</h3>
        <img src={poster} width="100px" height="100px" />
      </div>
    </Link>
  )
}

export default PlaceCard
