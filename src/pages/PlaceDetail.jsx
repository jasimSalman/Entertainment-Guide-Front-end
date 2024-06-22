import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import PlaceDetailsCard from '../components/PlaceDetailsCard'
import FavList from '../components/FavList'
import Review from '../components/Review'
import { BASE_URL } from '../services/api'
import Client from '../services/api'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const PlaceDetails = () => {
  let navigate = useNavigate()

  const [placeDetails, setPlaceDetails] = useState({})
  const [reviews, setReviews] = useState([])
  const [bookings, setBookings] = useState([])
  const [date, setDate] = useState(new Date())

  const userId = localStorage.getItem('userId')
  const userType = localStorage.getItem('userType')
  let { placeId } = useParams()

  //This function will return all the bookings of all the users.
  const allBookings = async () => {
    try {
      const res = await Client.get('/book/all-bookings')
      setBookings(res.data)
    } catch (e) {
      console.error('Failed to fetch bookings:', e)
    }
  }

  //This function is use for creating a booking
  const createBooking = async () => {
    try {
      const bookingDate = date.toISOString()

      await Client.post(`/book/${placeId}/create/${userId}`, {
        date: bookingDate
      })
      navigate(`/booking/${userId}`)
    } catch (e) {
      console.error('Failed to create booking:', e)
    }
  }

  //This function will retrive all the places info.
  const getPlaceDetails = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/places/${placeId}`)
      setPlaceDetails(response.data)
    } catch (e) {
      console.error('Failed to fetch place details:', e)
    }
  }

  //This function will retrive all the reviews of a particualr place.
  const getReviews = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/places/${placeId}/reviews`)
      setReviews(res.data)
    } catch (e) {
      console.error('Failed to fetch reviews:', e)
    }
  }

  useEffect(() => {
    getPlaceDetails()
    getReviews()
    {
      userId && allBookings()
    }
  }, [placeId])

  const handleBooking = () => {
    createBooking()
  }

  const passedDays = (date) => new Date() < date

  const getExcludedDates = () => {
    if (!placeDetails.offDays) return []
    const offDayIndices = placeDetails.offDays.map((day) => {
      const daysOfWeek = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ]
      return daysOfWeek.indexOf(day)
    })

    let excludedDates = []
    const today = new Date()
    for (let i = 0; i < 365; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      if (offDayIndices.includes(date.getDay())) {
        excludedDates.push(date)
      }
    }

    return excludedDates
  }

  const filterTime = (time) => {
    const selectedDate = new Date(time)
    const hours = selectedDate.getHours()
    const minutes = selectedDate.getMinutes()

    const startTime = placeDetails.workingHours?.start.split(':')
    const endTime = placeDetails.workingHours?.end.split(':')

    const startHour = parseInt(startTime[0])
    const startMinutes = parseInt(startTime[1])
    const endHour = parseInt(endTime[0])
    const endMinutes = parseInt(endTime[1])

    const isWithinWorkingHours =
      (hours > startHour || (hours === startHour && minutes >= startMinutes)) &&
      (hours < endHour || (hours === endHour && minutes <= endMinutes))

    const isNotBooked = !disabledTimes.includes(hours)

    return isWithinWorkingHours && isNotBooked
  }

  const disabledTimes = bookings
    .filter(
      (booking) =>
        new Date(booking.start).toDateString() === date.toDateString()
    )
    .map((booking) => new Date(booking.start).getHours())

  return placeDetails ? (
    <div>
      <div className="placeDetail">
        {userId
          ? userType === 'user' && (
              <div>
                <FavList placeId={placeId} />
              </div>
            )
          : null}
        <PlaceDetailsCard
          placePoster={placeDetails.placePoster}
          placeName={placeDetails.placeName}
          placePrice={placeDetails.placePrice}
          placeDescription={placeDetails.placeDescription}
          placeLocation={placeDetails.placeLocation}
        />
        <Review reviews={reviews} placeId={placeId} />
      </div>

      {userId
        ? userType === 'user' && (
            <div className="booking-container">
              <div className="booking">
                <DatePicker
                  showTimeSelect
                  minTime={new Date(0, 0, 0, 0, 0)}
                  maxTime={new Date(0, 0, 0, 23, 59)}
                  selected={date}
                  onChange={(date) => setDate(date)}
                  dateFormat="MMMM d, yyyy h:mm aa"
                  timeIntervals={60}
                  excludeDates={getExcludedDates()}
                  filterDate={passedDays}
                  filterTime={filterTime}
                  className="book"
                />
                <button onClick={handleBooking} className="bookButton">
                  Book
                </button>
              </div>
            </div>
          )
        : null}
    </div>
  ) : null
}

export default PlaceDetails
