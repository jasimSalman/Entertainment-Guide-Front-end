// import '../App.css'
import { Link } from 'react-router-dom'

const CategoryCard = ({ name, poster, id }) => {
  return (
    <Link to={`places/${id}`}>
      <div className="categCard" id={id} key={id}>
        <div className="categCard2" />
        <h3>{name}</h3>
        <img src={poster} alt={name} />
      </div>
    </Link>
  )
}

export default CategoryCard
