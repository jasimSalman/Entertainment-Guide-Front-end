import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import PlaceDetailsCard from '../components/PlaceDetailsCard'
import FavList from '../components/FavList'
import Review from '../components/Review'
import Client from '../services/api'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const placeDetails = () => {
  let navigate = useNavigate()
  const [PlaceDetails, setPlaceDetails] = useState({})
  const [reviews, setReviews] = useState([])

  const userId = localStorage.getItem('userId')

  let { placeId } = useParams()

  const [date, setDate] = useState(new Date())

  const deletePlace = async () => {
    try {
      const response = await Client.delete(`/places/${placeId}/${userId}`)
      if (response.status === 200 || response.status === 204) {
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

  const handleBooking = () => {
    console.log(date)
  }

  return PlaceDetails ? (
    <div className="place-details">
      <PlaceDetailsCard
        placePoster={PlaceDetails.placePoster}
        placeName={PlaceDetails.placeName}
        placePrice={PlaceDetails.placePrice}
        placeDescription={PlaceDetails.placeDescription}
        placeLocation={PlaceDetails.placeLocation}
      />
      {userId == PlaceDetails.owner && (
        <button onClick={deletePlace}>Delete</button>
      )}

      <Review reviews={reviews} placeId={placeId} />
      <FavList placeId={placeId} />
      <div>
        <DatePicker
          showTimeSelect
          minTime={new Date(0, 0, 0, 9, 0)}
          maxTime={new Date(0, 0, 0, 23, 0)}
          selected={date}
          onChange={(date) => setDate(date)}
          dateFormat="MMMM d, yyyy h:mmaa"
          timeIntervals={60}
          selectsRange
        />
        <button onClick={handleBooking}>Book</button>
      </div>
    </div>
  ) : null
}

export default placeDetails
