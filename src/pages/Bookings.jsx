import { useState, useEffect } from 'react'
import Client from '../services/api'
import BookingCard from '../components/BookingCard'

const Bookings = () => {
  const [bookings, setBookings] = useState([])

  const userId = localStorage.getItem('userId')

  useEffect(() => {
    const getBookings = async () => {
      try {
        const res = await Client.get(`/book/${userId}`)
        setBookings(res.data)
      } catch (err) {
        console.log('Error fetching bookingd:', err)
      }
    }
    getBookings()
  }, [userId])

  return (
    <div className="Bookings">
      <ul>
        {bookings.length > 0 ? (
          bookings.map((book) => (
            <BookingCard
              name={book.place.placeName}
              start={book.start}
              end={book.end}
              key={book._id}
              id={book._id}
            />
          ))
        ) : (
          <h4>You have No Booking</h4>
        )}
      </ul>
    </div>
  )
}

export default Bookings
