const BookingCard = ({ id, name, start, end }) => {
  return (
    <li id={id}>
      <div>{name}</div>
      <div>Start Time: {start}</div>
      <div>End Time: {end}</div>
    </li>
  )
}

export default BookingCard
