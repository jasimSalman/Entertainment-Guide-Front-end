import '../App.css'
import { useState, useEffect } from 'react'
import Client from '../services/api'
import { useParams, useNavigate } from 'react-router-dom'

const EditPlace = () => {
  let navigate = useNavigate()
  const initialState = {
    placeName: '',
    placePoster: '',
    placePrice: '',
    placeDescription: '',
    placeLocation: '',
    offDays: [],
    timeStart: '',
    timeEnd: ''
  }
  const [formValues, setFormValues] = useState(initialState)
  console.log(formValues)
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
          offDays: place.offDays,
          timeStart: place.workingHours.start,
          timeEnd: place.workingHours.end
        })
      } catch (error) {
        console.error('Error fetching place details:', error)
      }
    }
    fetchPlaceDetails()
  }, [placeId])

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target
    setFormValues((prevFormValues) => {
      const updatedOffDays = checked
        ? [...prevFormValues.offDays, value]
        : prevFormValues.offDays.filter((day) => day !== value)
      return { ...prevFormValues, offDays: updatedOffDays }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const updatedPlace = {
        ...formValues,
        workingHours: {
          start: formValues.timeStart,
          end: formValues.timeEnd
        }
      }

      await Client.put(`/places/${placeId}`, updatedPlace)
      setFormValues(initialState)
      // setFormValues(initialState)
      navigate('/myplaces')
    } catch (error) {
      console.error('Error updating place:', error)
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

        <div className="input-wrapper">
          <label className="label">Off Days</label>
          <div className="checkbox-group">
            {[
              'Sunday',
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday'
            ].map((day, index) => (
              <label key={index} className="checkbox-label">
                <input
                  type="checkbox"
                  name="offDays"
                  value={day}
                  checked={formValues.offDays.includes(day)}
                  onChange={handleCheckboxChange}
                  className="inputFeild"
                />
                {day}
              </label>
            ))}
          </div>
        </div>
        <div className="input-wrapper">
          <label className="label">Working Hours</label>
          <div className="time-group">
            <div className="time-input">
              <label>From:</label>
              <input
                type="time"
                name="timeStart"
                value={formValues.timeStart}
                onChange={handleChange}
                required
                className="inputFeild"
              />
            </div>
            <div className="time-input">
              <label>To:</label>
              <input
                type="time"
                name="timeEnd"
                value={formValues.timeEnd}
                onChange={handleChange}
                required
                className="inputFeild"
              />
            </div>
          </div>
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
