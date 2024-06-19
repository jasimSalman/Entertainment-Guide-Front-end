import '../App.css'
import { Link } from 'react-router-dom'
import PlaceCard from './PlaceCard'

const FavListCard = ({ key, id, name, poster }) => {
  return (
    // // <Link to={`/places/${id}`}>
    // <div className="placeCard" id={props.id}>
    //   <h6>{props.name}</h6>
    //   <img src={props.poster} width="100px" height="100px" />
    // </div>
    // // </Link>
    <PlaceCard name={name} id={id} key={key} poster={poster} />
  )
}

export default FavListCard
