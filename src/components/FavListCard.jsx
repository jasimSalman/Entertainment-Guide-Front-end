import "../App.css"
import { Link } from "react-router-dom"

const FavListCard = (props) => {
  return (
    // <Link to={`/places/${id}`}>
    <div className="placeCard" id={props.id}>
      <h6>{props.name}</h6>
      <img src={props.poster} width="100px" height="100px" />
      <button onClick={props.handleSubmit}>Delete</button>
    </div>

    // </Link>
  )
}

export default FavListCard
