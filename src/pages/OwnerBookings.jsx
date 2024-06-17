import '../App.css'
import { useState, useEffect } from 'react'
import Client from '../services/api'
import BookingCard from '../components/BookingCard'

const OwnerBookings = ({ userId }) => {
  const [bookings, setBookings] = useState([])

  useEffect(() => {
    const getBookings = async () => {
      try {
        const res = await Client.get(`/book/${userId}`)
        console.log(res.data)
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
        {bookings.map((book) => (
          <BookingCard
            name={book.place.placeName}
            start={book.start}
            end={book.end}
            key={book.id}
          />
        ))}
      </ul>
    </div>
  )
}

export default OwnerBookings
