import { useState, useEffect } from 'react'
import Client from '../services/api'
import OwnerPlace from '../components/OwnerPlace'
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

  return (
    <div className="myPlaces">
      <h1>My Places</h1>
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
