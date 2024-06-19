import { useEffect, useState } from 'react'
import Client from '../services/api'

const FavList = ({ placeId }) => {
  const [userId, setUserId] = useState('')

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId')
    if (storedUserId) setUserId(storedUserId)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    await Client.post(`/list/${placeId}/${userId}`)
  }

  return (
    <div className="Favbutton">
      {userId ? (
      <div onClick={handleSubmit} >
        <i class="material-symbols-outlined">
        favorite</i>
      </div>
      ) : (
        <p>Please log in to add to favorites.</p>
      )}
    </div>
  )
}

export default FavList
