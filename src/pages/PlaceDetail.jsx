import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

const GameDetails = () => {
  const [PlaceDetails, setPlaceDetails] = useState({})

  let { placeId } = useParams()

  useEffect(() => {
    const GetPlaceDetails = async () => {
      const response = await axios.get(
        `http://localhost:3001/places/${placeId}`
      )
      setPlaceDetails(response.data)
    }

    GetPlaceDetails()
  }, [placeId])

  return PlaceDetails ? (
    <div>
      <div>
        <img src={PlaceDetails.placePoster} width="100px" height="100px" />
      </div>
      <div>
        <h2> place name :{PlaceDetails.placeName}</h2>
      </div>
      <div>
        <h2> place price :{PlaceDetails.placePrice}</h2>
      </div>
      <div>
        <p> place Description :{PlaceDetails.placeDescription}</p>
      </div>
      <div>
        <h2>place Location :{PlaceDetails.placeLocation}</h2>
      </div>
    </div>
  ) : null
}

export default GameDetails
