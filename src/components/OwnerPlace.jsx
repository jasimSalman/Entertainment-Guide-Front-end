// import '../App.css'
import { Link } from 'react-router-dom'

const OwnerPlace = ({
  id,
  name,
  poster,
  price,
  description,
  location,
  key
}) => {
  return (
    <div className="List-Card" id={id} key={key}>
      <Link to={`/places/${id}`} className='List-Card2'>
      <div className="card-Cover" />
        <div className='list-card-left'>
          <img src={poster} width="100px" height="100px" />
          <h3 className="list-card-title">{name}</h3>
        </div>
      <Link
        to={{
          pathname: `/myPlaces/edit/${id}`,
          state: { id, name, poster, price, description, location }
        }}
      >
        <button className='card-list-btn'>Edit</button>
      </Link>
      </Link>
    </div>
  )
}

export default OwnerPlace
