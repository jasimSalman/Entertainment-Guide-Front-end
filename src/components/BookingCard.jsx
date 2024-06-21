const BookingCard = ({ id, name, start, end }) => {
  return (
    <div id={id}>
      <h5>{name}</h5>
      <div className="timeDetail">
        <h6>Start Time: {start}</h6>
        <h6>End Time: {end}</h6>
      </div>
    </div>
  )
}

export default BookingCard
