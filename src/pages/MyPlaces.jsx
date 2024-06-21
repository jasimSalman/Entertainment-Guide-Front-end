import { useState, useEffect } from 'react'
import Client from '../services/api'
import OwnerPlace from '../components/OwnerPlace'
import { Link } from 'react-router-dom'

const MyPlaces = () => {
  const [places, setPlaces] = useState([])

  const userId = localStorage.getItem('userId')

  useEffect(() => {
    const getPlaces = async () => {
      try {
        const res = await Client.get(`/places/all/${userId}`)
        setPlaces(res.data)
      } catch (err) {
        console.log('Error fetching places:', err)
      }
    }
    getPlaces()
  }, [userId])

  //This function is use for deleting a place
  const deletePlace = async (placeId) => {
    try {
      const response = await Client.delete(`/places/${placeId}/${userId}`)
      if (response.status === 200 || response.status === 204) {
        setPlaces(places.filter((place) => place._id !== placeId))
      } else {
        console.error('Failed to delete place:', response.status)
      }
    } catch (error) {
      console.error('Failed to delete place:', error)
    }
  }

  return (
    <div className="myPlaces">
      <h1>My Places</h1>
      <Link to={`/addPlace`} className="show-add">
        Add Place
      </Link>
      <ul>
        {places.length > 0 ? (
          places.map((place) => (
            <OwnerPlace
              key={place._id}
              poster={place.placePoster}
              name={place.placeName}
              price={place.placePrice}
              description={place.placeDescription}
              location={place.placeLocation}
              id={place._id}
              deletePlace={deletePlace}
            />
          ))
        ) : (
          <h4>You have No Places</h4>
        )}
      </ul>
    </div>
  )
}

export default MyPlaces
