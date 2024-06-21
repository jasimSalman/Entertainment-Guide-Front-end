import { Link } from 'react-router-dom'

const PlaceCard = ({ id, name, poster }) => {
  return (
    <Link to={`/places/${id}`}>
      <div className="Card" id={id}>
        <div className="card-Cover" />
        <img src={poster} />
        <h3 className="card-title">{name}</h3>
      </div>
    </Link>
  )
}

export default PlaceCard
