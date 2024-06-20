import { Link } from "react-router-dom"

const OwnerPlace = ({
  id,
  name,
  poster,
  price,
  description,
  location,
  key,
  deletePlace,
}) => {
  return (
    <div className="List-Card" id={id} key={key}>
      <Link to={`/places/${id}`} className="List-Card2">
        <div className="card-Cover" />
        <div className="list-card-left">
          <img src={poster} width="100px" height="100px" />
          <h3 className="list-card-title">{name}</h3>
        </div>
        <Link to={`/myPlaces/edit/${id}`}>
          <button className="card-list-btn">Edit place</button>
        </Link>
        <button className="card-list-btn" onClick={() => deletePlace(id)}>
          Remove place
        </button>
      </Link>
    </div>
  )
}

export default OwnerPlace
