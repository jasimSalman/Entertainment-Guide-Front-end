// import '../App.css'
import { Link } from 'react-router-dom'

const CategoryCard = ({ name, poster, id }) => {
  return (
    <Link to={`places/${id}`}>
      <div className="categCard" id={id} key={id}>
        <div className="categCard2" />
        <img src={poster} alt={name} />
        <h3 className='card-title'>{name}</h3>
      </div>
    </Link>
  )
}

export default CategoryCard
