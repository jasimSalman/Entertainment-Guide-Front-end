import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import PlaceDetailsCard from "../components/PlaceDetailsCard"
import FavList from "../components/FavList"
import Review from "../components/Review"
import Client from "../services/api"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

const PlaceDetails = () => {
  let navigate = useNavigate()

  const [PlaceDetails, setPlaceDetails] = useState({})
  const [reviews, setReviews] = useState([])
  const [bookings, setBookings] = useState([])
  const [date, setDate] = useState(new Date())

  const userId = localStorage.getItem("userId")
  let { placeId } = useParams()

  //This function is use for deleting a place
  // const deletePlace = async () => {
  //   try {
  //     const response = await Client.delete(`/places/${placeId}/${userId}`)
  //     if (response.status === 200 || response.status === 204) {
  //       navigate("/myPlaces")
  //     } else {
  //       console.error("Failed to delete place:", response.status)
  //     }
  //   } catch (error) {
  //     console.error("Failed to delete place:", error)
  //   }
  // }

  //This function will return all the bookings of all the users.
  const allBookings = async () => {
    try {
      const res = await Client.get("/book/all-bookings")
      setBookings(res.data)
    } catch (e) {
      console.error("Failed to fetch bookings:", e)
    }
  }

  //This function is use for creating a booking
  const createBooking = async () => {
    try {
      const bookingDate = date.toISOString()
      const res = await Client.post(`/book/${placeId}/create/${userId}`, {
        date: bookingDate,
      })
      navigate(`/booking/${userId}`)
    } catch (e) {
      console.error("Failed to create booking:", e)
    }
  }

  //This function will retrive all the places info.
  const GetPlaceDetails = async () => {
    const response = await axios.get(`http://localhost:3001/places/${placeId}`)
    setPlaceDetails(response.data)
  }

  //This function will retrive all the reviews of a particualr place.
  const GetReviews = async () => {
    const res = await axios.get(
      `http://localhost:3001/places/${placeId}/reviews`
    )
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
    <div className="place-details">
      <PlaceDetailsCard
        placePoster={PlaceDetails.placePoster}
        placeName={PlaceDetails.placeName}
        placePrice={PlaceDetails.placePrice}
        placeDescription={PlaceDetails.placeDescription}
        placeLocation={PlaceDetails.placeLocation}
      />
      {/* {userId == PlaceDetails.owner && (
        <button onClick={deletePlace}>Delete</button>
      )} */}

      <Review reviews={reviews} placeId={placeId} />
      {userId && (
        <div>
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
              filterDate={passedDayes}
              filterTime={filterTime}
            />
            <button onClick={handleBooking}>Book</button>
          </div>
        </div>
      )}
    </div>
  ) : null
}

export default PlaceDetails
