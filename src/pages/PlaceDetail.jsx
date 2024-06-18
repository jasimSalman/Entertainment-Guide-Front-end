import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import PlaceDetailsCard from '../components/PlaceDetailsCard'
import FavList from '../components/FavList'
import Review from '../components/Review'

const placeDetails = ({ user }) => {
  const [PlaceDetails, setPlaceDetails] = useState({})
  const [reviews, setReviews] = useState([])

  let { placeId } = useParams()

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
      <Review reviews={reviews} placeId={placeId} />
      <FavList placeId={placeId} />
    </div>
  ) : null
}

export default placeDetails
