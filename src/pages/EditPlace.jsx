import "../App.css"
import { useState, useEffect } from "react"
import Client from "../services/api"
import { useParams, useNavigate } from "react-router-dom"

const EditPlace = () => {
  let navigate = useNavigate()
  const initialState = {
    placeName: "",
    placePoster: "",
    placePrice: "",
    placeDescription: "",
    placeLocation: "",
  }
  const [formValues, setFormValues] = useState(initialState)
  const { placeId } = useParams()

  useEffect(() => {
    const fetchPlaceDetails = async () => {
      try {
        const response = await Client.get(`/places/${placeId}`)
        const place = response.data
        setFormValues({
          placeName: place.placeName,
          placePoster: place.placePoster,
          placePrice: place.placePrice,
          placeDescription: place.placeDescription,
          placeLocation: place.placeLocation,
        })
      } catch (error) {
        console.error("Error fetching place details:", error)
      }
    }
    fetchPlaceDetails()
  }, [placeId])

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await Client.put(`/places/${placeId}`, formValues)
      setFormValues(initialState)
      setFormValues(initialState)
      navigate("/myplaces")
    } catch (error) {
      console.error("Error updating place:", error)
    }
  }

  return (
    <div className="signin">
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="placeName" className="label">
            Place Name
          </label>
          <input
            onChange={handleChange}
            name="placeName"
            type="text"
            placeholder="Place Name"
            value={formValues.placeName}
            required
            className="inputFeild"
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="placePoster" className="label">
            Place Poster URL
          </label>
          <input
            onChange={handleChange}
            name="placePoster"
            type="text"
            placeholder="Place Poster URL"
            value={formValues.placePoster}
            required
            className="inputFeild"
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="placePrice" className="label">
            Place Price
          </label>
          <input
            onChange={handleChange}
            name="placePrice"
            type="number"
            placeholder="Place Price"
            value={formValues.placePrice}
            required
            className="inputFeild"
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="placeDescription" className="label">
            Place Description
          </label>
          <textarea
            onChange={handleChange}
            name="placeDescription"
            placeholder="Place Description"
            value={formValues.placeDescription}
            required
            className="inputFeild"
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="placeLocation" className="label">
            Place Location
          </label>
          <input
            onChange={handleChange}
            name="placeLocation"
            type="text"
            placeholder="Place Location"
            value={formValues.placeLocation}
            required
            className="inputFeild"
          />
        </div>
        <button
          disabled={
            !formValues.placeName ||
            !formValues.placePoster ||
            !formValues.placePrice ||
            !formValues.placeDescription ||
            !formValues.placeLocation
          }
          className="authButton"
        >
          Save Place
        </button>
      </form>
    </div>
  )
}

export default EditPlace
