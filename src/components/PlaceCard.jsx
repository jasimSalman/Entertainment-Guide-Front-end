import "../App.css"
import { Link } from "react-router-dom"

const PlaceCard = (props) => {
  return (
    // <Link to={`/place/${props.id}`}>
    <div className="placeCard" id={props.id}>
      <h3>{props.name}</h3>
      <img src={props.poster} width="100px" height="100px" />
    </div>
    // </Link>
  )
}

export default PlaceCard
