// import '../App.css'
import { Link } from 'react-router-dom'

const OwnerPlace = ({
  id,
  name,
  poster,
  price,
  description,
  location,
  key
}) => {
  return (
    <div className="Card" id={id} key={key}>
      <Link to={`/places/${id}`}>
        <div className="card-Cover" />
        <img src={poster} width="100px" height="100px" />
        <h3 className="card-title">{name}</h3>
      </Link>
      <Link
        to={{
          pathname: `/myPlaces/edit/${id}`,
          state: { id, name, poster, price, description, location }
        }}
      >
        <button>Edit Place Deatil</button>
      </Link>
    </div>
  )
}

export default OwnerPlace
