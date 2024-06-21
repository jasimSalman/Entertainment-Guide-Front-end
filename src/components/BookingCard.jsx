const BookingCard = ({ id, name, start, end, price, poster }) => {
  const formatDateTime = (isoString) => {
    const date = new Date(isoString)
    const optionsDate = { year: "numeric", month: "long", day: "numeric" }
    const optionsTime = { hour: "2-digit", minute: "2-digit" }

    const formattedDate = date.toLocaleDateString(undefined, optionsDate)
    const formattedTime = date.toLocaleTimeString(undefined, optionsTime)

    return { date: formattedDate, time: formattedTime }
  }

  const startTime = formatDateTime(start)
  const endTime = formatDateTime(end)

  return (
    <div id={id} className="bookingCard">
      <div className="bookingImg">
        <img src={poster} width="100px" height="100px" />
      </div>
      <div className="bookingTitle">
        <h5 className="bookName">{name}</h5>
        <h5 className="bookName">{price} BHD</h5>
        <h5 className="bookName">{startTime.date}</h5>
      </div>
      <br />
      <div className="bookingTime">
        <div className="start">Start: {startTime.time}</div>
        <div className="end">End: {endTime.time}</div>
      </div>
    </div>
  )
}

export default BookingCard
