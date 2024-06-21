import { useEffect, useState } from "react"
import Client from "../services/api"
import { useNavigate } from "react-router-dom"

const FavList = ({ placeId }) => {
  const navigate = useNavigate()
  const [userId, setUserId] = useState("")
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId")
    if (storedUserId) {
      setUserId(storedUserId)
      fetchFavorites(storedUserId)
    }
  }, [])

  const fetchFavorites = async (userId) => {
    try {
      const res = await Client.get(`/list/show/${userId}`)
      const favoritePlaces = res.data
      setIsFavorite(favoritePlaces.some((place) => place._id === placeId))
    } catch (error) {
      console.error("Error fetching favorite list:", error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await Client.post(`/list/add/${placeId}/${userId}`)
      navigate(`/list/show/${userId}`)
    } catch (error) {
      console.error("Error adding to favorites:", error)
    }
  }

  return (
    <div className="Favbutton">
      {userId ? (
        !isFavorite ? (
          <div onClick={handleSubmit}>
            <i className="material-symbols-outlined">favorite</i>
          </div>
        ) : (
          <p> </p>
        )
      ) : (
        <p> </p>
      )}
    </div>
  )
}

export default FavList
