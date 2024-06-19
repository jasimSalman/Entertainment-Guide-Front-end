import "../App.css"
import { Link } from "react-router-dom"
import PlaceCard from "./PlaceCard"

const FavListCard = ({ key, id, name, poster, handleSubmit }) => {
  return (
    <div>
      <PlaceCard name={name} id={id} key={key} poster={poster} />
      <button onClick={handleSubmit}>Delete</button>
    </div>
  )
}

export default FavListCard
