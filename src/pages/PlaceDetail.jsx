import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import PlaceDetailsCard from '../components/PlaceDetailsCard'
import FavList from '../components/FavList'
import Review from '../components/Review'
import Client from '../services/api'

const placeDetails = () => {
  const [PlaceDetails, setPlaceDetails] = useState({})
  const [reviews, setReviews] = useState([])

  const userId = localStorage.getItem('userId')

  let { placeId } = useParams()

  const deletPlace = async () => {
    await Client.delete(`/places/${placeId}/${userId}`)
  }

  useEffect(() => {
    const GetPlaceDetails = async () => {
      const response = await axios.get(
        `http://localhost:3001/places/${placeId}`
      )
      setPlaceDetails(response.data)
    }

    const GetReviews = async () => {
      const res = await axios.get(
        `http://localhost:3001/places/${placeId}/reviews`
      )
      setReviews(res.data)
    }

    GetPlaceDetails()
    GetReviews()
  }, [placeId])

  return PlaceDetails ? (
    <div className='place-details'>
      <PlaceDetailsCard
        placePoster={PlaceDetails.placePoster}
        placeName={PlaceDetails.placeName}
        placePrice={PlaceDetails.placePrice}
        placeDescription={PlaceDetails.placeDescription}
        placeLocation={PlaceDetails.placeLocation}
      />
      <button onClick={deletPlace}>Delete Place</button>
      <Review reviews={reviews} placeId={placeId} />
      <FavList placeId={placeId} />
    </div>
  ) : null
}

export default placeDetails
