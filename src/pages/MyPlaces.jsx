import '../App.css'
import { useState, useEffect } from 'react'
import Client from '../services/api'
import PlaceCard from '../components/PlaceCard'

const MyPlaces = ({ userId }) => {
  const [places, setPlaces] = useState([])

  useEffect(() => {
    const getPlaces = async () => {
      try {
        const res = await Client.get(
          `http://localhost:3001/places/all/${userId}`
        )
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
        {places.map((place) => (
          <PlaceCard
            key={place._id}
            poster={place.placePoster}
            name={place.placeName}
            id={place._id}
          />
        ))}
      </ul>
    </div>
  )
}

export default MyPlaces
