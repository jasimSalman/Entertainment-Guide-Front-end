import "../App.css"
import PlaceCard from "./PlaceCard"

const FavListCard = ({ id, name, poster, handleSubmit }) => {
  return (
    <div>
      <PlaceCard name={name} id={id} poster={poster} />
      <button onClick={handleSubmit}>Delete</button>
    </div>
  )
}

export default FavListCard
