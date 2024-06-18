// import '../App.css'
import { Link } from "react-router-dom"

const OwnerPlace = ({ id, name, poster, key }) => {
  return (
    <div className="Card" id={id}>
      <Link to={`/places/${id}`}>
        <div className="card-Cover" />
        <img src={poster} width="100px" height="100px" />
        <h3 className="card-title">{name}</h3>
      </Link>
      <Link to={`/myPlaces/edit/${id}`}>
        <button>Edit Place Deatil</button>
      </Link>
    </div>
  )
}

export default OwnerPlace
