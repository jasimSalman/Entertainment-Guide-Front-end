import { useEffect, useState } from 'react'
import axios from 'axios'
import FavListCard from '../components/FavListCard'
import { useParams } from 'react-router-dom'

const UserFavList = () => {
  const [userList, setUserList] = useState([])
  const { userId } = useParams()

  const getUserList = async () => {
    try {
      const token = localStorage.getItem('token')
      const res = await axios.get(`http://localhost:3001/list/show/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setUserList(res.data)
    } catch (err) {
      console.log('Error fetching places:', err)
    }
  }

  useEffect(() => {
    getUserList()
  }, [])

  return (
    <div className="placess">
      <div className="places">
        {userList.map((place) => (
          <FavListCard
            key={place._id}
            id={place._id}
            name={place.placeName}
            poster={place.placePoster}
          />
        ))}
      </div>
    </div>
  )
}

export default UserFavList
