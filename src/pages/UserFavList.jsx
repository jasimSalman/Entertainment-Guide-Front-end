import { useEffect, useState } from 'react'
import FavListCard from '../components/FavListCard'
import Client from '../services/api'
import { useNavigate } from 'react-router-dom'

const UserFavList = () => {
  const [userList, setUserList] = useState([])
  const userId = localStorage.getItem('userId')
  let navigate = useNavigate()

  const getUserList = async () => {
    try {
      const res = await Client.get(`/list/show/${userId}`)
      setUserList(res.data)
    } catch (err) {
      console.log('Error fetching places:', err)
    }
  }

  useEffect(() => {
    getUserList()
  }, [])

  const handleSubmit = async (placeId) => {
    const response = await Client.delete(`list/delete/${placeId}/${userId}`)
    if (response.status === 200 || response.status === 204) {
      setUserList(userList.filter((iteme) => iteme._id !== placeId))
      navigate(`/list/show/${userId}`)
    } else {
      console.error('Failed to delete place:', response.status)
    }
  }

  return (
    <div className="placess">
      <div className="places">
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
    </div>
  )
}

export default UserFavList
