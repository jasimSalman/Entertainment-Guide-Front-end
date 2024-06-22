import { Link } from 'react-router-dom'

const FavListCard = ({ id, name, poster, handleSubmit }) => {
  return (
    <div className="FavCard" id={id}>
      <Link to={`/places/${id}`}>
        <div>
          <img src={poster} width="200px" height="200px" />
        </div>
      </Link>
      <div className="favInfo">
        <div className="favPlaceName">{name}</div>
        <button onClick={handleSubmit} className="FavDebutton">
          Remove
        </button>
      </div>
    </div>
  )
}

export default FavListCard
