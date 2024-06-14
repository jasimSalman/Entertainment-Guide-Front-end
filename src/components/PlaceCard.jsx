import '../App.css'
import { Link } from 'react-router-dom'

const PlaceCard = (props) => {
  return (
    <Link to={"/placeDetails"}>
      <div className='placeCard' id={props.id}>
        <h3>{props.Name}</h3>
        <img src={props.placePoster} />
      </div>
    </Link>


  )
}

export default PlaceCard