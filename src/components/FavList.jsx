import { useEffect, useState } from "react"
import Client from "../services/api"
import { useNavigate } from "react-router-dom"

const FavList = ({ placeId }) => {
  const navigate = useNavigate()
  const [userId, setUserId] = useState("")

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId")
    if (storedUserId) {
      setUserId(storedUserId)
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await Client.post(`/list/add/${placeId}/${userId}`)
      navigate(`/list/show/${userId}`)
    } catch (error) {
      console.error("Error adding to favorites:", error)
    }
  }

  return (
    <div className="Favbutton">
      {userId ? (
        <div onClick={handleSubmit}>
          <i className="material-symbols-outlined">favorite</i>
        </div>
      ) : (
        <p>Please log in to add to favorites.</p>
      )}
    </div>
  )
}

export default FavList
