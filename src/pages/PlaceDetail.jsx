import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import PlaceDetailsCard from '../components/PlaceDetailsCard'
import FavList from '../components/FavList'
import Review from '../components/Review'
import { Client, BASE_URL } from '../services/api'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const PlaceDetails = () => {
  let navigate = useNavigate()

  const [PlaceDetails, setPlaceDetails] = useState({})
  const [reviews, setReviews] = useState([])
  const [bookings, setBookings] = useState([])
  const [date, setDate] = useState(new Date())

  const userId = localStorage.getItem('userId')
  const userType = localStorage.getItem('userType')
  let { placeId } = useParams()

  const allBookings = async () => {
    try {
      const res = await Client.get('/book/all-bookings')
      setBookings(res.data)
    } catch (e) {
      console.error('Failed to fetch bookings:', e)
    }
  }

  const createBooking = async () => {
    try {
      const bookingDate = date.toISOString()
      const res = await Client.post(`/book/${placeId}/create/${userId}`, {
        date: bookingDate
      })
      navigate(`/booking/${userId}`)
    } catch (e) {
      console.error('Failed to create booking:', e)
    }
  }

  const GetPlaceDetails = async () => {
    const response = await axios.get(`${BASE_URL}/places/${placeId}`)
    setPlaceDetails(response.data)
  }

  const GetReviews = async () => {
    const res = await axios.get(`${BASE_URL}/places/${placeId}/reviews`)
    setReviews(res.data)
  }

  useEffect(() => {
    GetPlaceDetails()
    GetReviews()
    allBookings()
  }, [placeId])

  const handleBooking = () => {
    createBooking()
  }

  const passedDayes = (date) => new Date() < date

  const disabledTimes = bookings
    .filter(
      (booking) =>
        new Date(booking.start).toDateString() === date.toDateString()
    )
    .map((booking) => new Date(booking.start).getHours())

  const filterTime = (time) => {
    const selectedDate = new Date(time)
    return !disabledTimes.includes(selectedDate.getHours())
  }

  return PlaceDetails ? (
        <div>
    <div className="placeDetail">
          {userId ؟ userType === 'user' && (
          <div>
            <FavList placeId={placeId} />
          </div>
        ) : null}
      <PlaceDetailsCard
        placePoster={PlaceDetails.placePoster}
        placeName={PlaceDetails.placeName}
        placePrice={PlaceDetails.placePrice}
        placeDescription={PlaceDetails.placeDescription}
        placeLocation={PlaceDetails.placeLocation}
      />

      <Review reviews={reviews} placeId={placeId} />
            </div>
      {userId
        ? userType === 'user' && (
            <div>
              <FavList placeId={placeId} />
              <div className="booking">
                <DatePicker
                  showTimeSelect
                  minTime={new Date(0, 0, 0, 9, 0)}
                  maxTime={new Date(0, 0, 0, 23, 0)}
                  selected={date}
                  onChange={(date) => setDate(date)}
                  dateFormat="MMMM d, yyyy h:mmaa"
                  timeIntervals={60}
                  filterDate={passedDayes}
                  filterTime={filterTime}
                />
                <button onClick={handleBooking}>Book</button>
              </div>
    </div>
  ) : null
}

export default PlaceDetails
