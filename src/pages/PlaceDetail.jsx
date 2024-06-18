import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import PlaceDetailsCard from '../components/PlaceDetailsCard'
import FavList from '../components/FavList'
import Review from '../components/Review'
import Client from '../services/api'

const placeDetails = () => {
  let navigate = useNavigate()
  const [PlaceDetails, setPlaceDetails] = useState({})
  const [reviews, setReviews] = useState([])

  const userId = localStorage.getItem('userId')

  let { placeId } = useParams()
  console.log(`Place Id ${placeId}`)
  console.log(`User Id ${userId}`)

  const deletePlace = async () => {
    try {
      const response = await Client.delete(`/places/${placeId}/${userId}`)
      if (response.status === 200 || response.status === 204) {
        console.log('Place deleted successfully')
        navigate('/myPlaces')
      } else {
        console.error('Failed to delete place:', response.status)
      }
    } catch (error) {
      console.error('Failed to delete place:', error)
    }
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
    <div>
      <PlaceDetailsCard
        placePoster={PlaceDetails.placePoster}
        placeName={PlaceDetails.placeName}
        placePrice={PlaceDetails.placePrice}
        placeDescription={PlaceDetails.placeDescription}
        placeLocation={PlaceDetails.placeLocation}
      />
      {userId && <button onClick={deletePlace}>Delete Place</button>}

      <Review reviews={reviews} placeId={placeId} />
      <FavList placeId={placeId} />
    </div>
  ) : null
}

export default placeDetails
