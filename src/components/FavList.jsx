import "../App.css"
import { useEffect, useState } from "react"
import Client from "../services/api"

const FavList = ({ placeId }) => {
  const [userId, setUserId] = useState("")

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId")
    if (storedUserId) setUserId(storedUserId)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    await Client.post(`/list/${placeId}/${userId}`)
  }

  return (
    <div className="Favbutton">
      {userId ? (
        <button onClick={handleSubmit}>Add to my fav list</button>
      ) : (
        <p>Please log in to add to favorites.</p>
      )}
    </div>
  )
}

export default FavList
