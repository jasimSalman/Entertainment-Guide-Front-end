import '../App.css'
import PlaceCard from '../components/PlaceCard'
import { useEffect, useState } from "react"
import axios from "axios"

const places = () => {
  const [places, setPlaces] = useState([])
  const getPlaces = async () => {
    try {
      let res = await axios.get("http://localhost:3001/places")
      setPlaces(res.data)
      console.log(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getPlaces()
  }, [])





  return (
    <div className="places">
      <h1>places page</h1>
        {places.map((place) => (
          <PlaceCard
            key={place._id}
            id={place._id}
            name={place.placeName}
            poster={place.placePoster}
          />
        ))}
    </div>
  )

}

export default places