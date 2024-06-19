import '../App.css'
import { Link } from 'react-router-dom'
import PlaceCard from './PlaceCard'

const FavListCard = ({ key, id, name, poster }) => {
  return (

    <PlaceCard name={name} id={id} key={key} poster={poster} />
  )
}

export default FavListCard
