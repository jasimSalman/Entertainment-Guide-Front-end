import { Link } from 'react-router-dom'

const OwnerPlace = ({ id, name, poster, deletePlace }) => {
  return (
    <div id={id}>
      <Link to={`/places/${id}`} className="List-Card2">
        <div className="card-Cover" />
        <div className="list-card-left">
          <img src={poster} width="100px" height="100px" />
          <h3 className="list-card-title">{name}</h3>
        </div>
         </Link>

      <Link to={`/myPlaces/edit/${id}`}>
        <button className="card-list-btn">Edit place</button>
      </Link>

      <button className="card-list-btn" onClick={() => deletePlace(id)}>
        Remove place
      </button>
    </div>
  )
}

export default OwnerPlace
