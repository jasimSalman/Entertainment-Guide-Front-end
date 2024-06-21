import { Link } from "react-router-dom"

const OwnerPlace = ({ id, name, poster, deletePlace }) => {
  return (
    <div id={id} className="PlaceCard">
      <Link to={`/places/${id}`}>
        <div className="OwnerTitle">
          <div>
            <img src={poster} width="100px" height="100px" />
          </div>
          <div>
            <div className="OwnerPlaceName">{name}</div>
          </div>
        </div>
      </Link>
      <div className="ownerButton">
        <Link to={`/myPlaces/edit/${id}`}>
          <button className="ownerButton2">Edit place</button>
        </Link>
        <button onClick={() => deletePlace(id)} className="ownerButton2">
          Remove place
        </button>
      </div>
    </div>
  )
}

export default OwnerPlace
