import { useEffect, useState } from "react"
import FavListCard from "../components/FavListCard"
import Client from "../services/api"
import { useNavigate } from "react-router-dom"

const UserFavList = () => {
  const [userList, setUserList] = useState([])
  const userId = localStorage.getItem("userId")
  let navigate = useNavigate()

  const getUserList = async () => {
    try {
      const res = await Client.get(`/list/show/${userId}`)
      setUserList(res.data)
    } catch (err) {
      console.log("Error fetching places", err)
    }
  }

  useEffect(() => {
    getUserList()
  }, [])

  const handleSubmit = async (placeId) => {
    await Client.delete(`list/delete/${placeId}/${userId}`)
    setUserList(userList.filter((iteme) => iteme._id !== placeId))
    navigate(`/list/show/${userId}`)
  }

  return (
    <div className="favList">
      {userList.length > 0 ? (
        userList.map((place) => (
          <FavListCard
            key={place._id}
            id={place._id}
            name={place.placeName}
            poster={place.placePoster}
            handleSubmit={() => handleSubmit(place._id)}
          />
        ))
      ) : (
        <h4>No Places in Your Favorite List</h4>
      )}
    </div>
  )
}

export default UserFavList
