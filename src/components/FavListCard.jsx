import "../App.css"
import PlaceCard from "./PlaceCard"

const FavListCard = ({ id, name, poster, handleSubmit }) => {
  return (
    <div className="FavCard" id={id}>
      <div>
        <img src={poster} width="200px" height="200px" />
      </div>
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
