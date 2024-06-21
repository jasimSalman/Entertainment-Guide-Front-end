const BookingCard = ({ name, start, end, key }) => {
  return (
    <li className="booking-card" key={key}>
      <div>{name}</div>
      <div>Start Time: {start}</div>
      <div>End Time: {end}</div>
    </li>
  )
}

export default BookingCard
