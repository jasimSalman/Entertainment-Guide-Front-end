const BookingCard = ({ name, start, end, key }) => {
  return (
    <li key={key}>
      <div>{name}</div>
      <div>Start Time: {start}</div>
      <div>End Time: {end}</div>
    </li>
  )
}

export default BookingCard
