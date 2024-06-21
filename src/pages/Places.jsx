import PlaceCard from '../components/PlaceCard'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Search from '../components/Search'
import { BASE_URL } from '../services/api'

const Places = () => {
  const [places, setPlaces] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const getPlaces = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/categories/${id}/places`)

        setPlaces(res.data.place)
      } catch (err) {
        console.log("Error fetching places:", err)
      }
    }
    getPlaces()
  }, [id])

  return (
    <div className="mainCard">
      <Search />
      {places.length > 0 ? (
        places.map((place) => (
          <PlaceCard
            key={place._id}
            id={place._id}
            name={place.placeName}
            poster={place.placePoster}
          />
        ))
      ) : (
        <h4>No places in this category.</h4>
      )}

    </div>
  )
}

export default Places
