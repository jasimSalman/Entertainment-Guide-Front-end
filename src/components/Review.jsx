import { useEffect, useState } from 'react'
import Client from '../services/api'

const Review = ({ reviews, placeId }) => {
  const initialState = { reviewText: '', rate: '', userId: '' }
  const [formValues, setFormValues] = useState(initialState)

  const [userId, setUserId] = useState('')
  const [userType, setUserType] = useState('')

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId')
    if (storedUserId) setUserId(storedUserId)
    const storedUserType = localStorage.getItem('userType')
    if (storedUserType) setUserType(storedUserType)
  }, [])

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await Client.post(`/places/${placeId}/reviews/${userId}`, formValues)
    setFormValues(initialState)
  }

  const handleDelete = async (reviewId) => {
    try {
      await Client.delete(`/places/${placeId}/reviews/${reviewId}`)
    } catch (error) {
      console.error('Failed to delete review:', error)
    }
  }

  return (
    <div>
      <div>
        {reviews ? (
          <ul>
            {reviews.map((review) => (
              <li key={review._id}>
                <p>Review: {review.review}</p>
                <p>Rating: {review.reviewRating}</p>
              </li>
            ))}
          </ul>
        ) : (
          <h3>No Reviews</h3>
        )}
      </div>
      {userId
        ? userType === 'user' && (
            <div>
              <form onSubmit={handleSubmit}>
                <label htmlFor="review">Review</label>
                <input
                  type="text"
                  name="review"
                  className="review"
                  value={formValues.review}
                  onChange={handleChange}
                />

                <label htmlFor="rate">Rating</label>
                <input
                  type="text"
                  name="rate"
                  className="rate"
                  value={formValues.rate}
                  onChange={handleChange}
                />

                <button type="submit">Submit</button>
              </form>
            </div>
          )
        : null}
    </div>
  )
}

export default Review
