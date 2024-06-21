const BookingCard = ({ id, name, start, end }) => {
  const formatDateTime = (isoString) => {
    const date = new Date(isoString)
    const optionsDate = { year: 'numeric', month: 'long', day: 'numeric' }
    const optionsTime = { hour: '2-digit', minute: '2-digit' }

    const formattedDate = date.toLocaleDateString(undefined, optionsDate)
    const formattedTime = date.toLocaleTimeString(undefined, optionsTime)

    return { date: formattedDate, time: formattedTime }
  }

  const startTime = formatDateTime(start)
  const endTime = formatDateTime(end)

  return (
    <li id={id}>
      <div>{name}</div>
      <div>Date: {startTime.date}</div>
      <div>Start Time: {startTime.time}</div>
      <div>End Time: {endTime.time}</div>
    </li>
  )
}

export default BookingCard
