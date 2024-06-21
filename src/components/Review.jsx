import { useEffect, useState } from 'react'
import Client from '../services/api'

const Review = ({ reviews, placeId }) => {
  const initialState = { reviewText: '', reviewRating: '', userId: '' }
  const [formValues, setFormValues] = useState(initialState)

  const [userId, setUserId] = useState('')
  const [userType, setUserType] = useState('')

  const [reviewList, setReviewList] = useState([])

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId')
    if (storedUserId) setUserId(storedUserId)
    const storedUserType = localStorage.getItem('userType')
    if (storedUserType) setUserType(storedUserType)
    setReviewList(reviews || [])
  }, [reviews])

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await Client.post(
      `/places/${placeId}/reviews/${userId}`,
      formValues
    )
    console.log(formValues)
    setReviewList([...reviewList, response.data])
    setFormValues(initialState)
  }

  const handleDelete = async (reviewId) => {
    try {
      await Client.delete(`/places/${placeId}/reviews/${reviewId}`)
      setReviewList(reviewList.filter((review) => review._id !== reviewId))
    } catch (error) {
      console.error('Failed to delete review:', error)
    }
  }

  return (
    <div className="reviewForm">
      {userId
        ? userType === 'user' && (
            <div className="reviewInput">
              <form onSubmit={handleSubmit} className="rForm">
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
                  type="number"
                  name="reviewRating"
                  className="reviewRating"
                  value={formValues.rate}
                  onChange={handleChange}
                />
                <button type="submit" className="revButton">
                  Submit
                </button>
              </form>
            </div>
          )
        : null}
      <div>
        {reviews ? (
          <div>
            {reviewList.map((review) => (
              <div key={review._id} className="showReview">
                <p>Review: {review.review}</p>
                <p>Rating: {review.reviewRating}</p>
                {userId === review.user && (
                  <button onClick={() => handleDelete(review._id)}>
                    Delete
                  </button>
                )}
              </div>
            ))}
          </div>
        ) : (
          <h3>No Reviews</h3>
        )}
      </div>
    </div>
  )
}

export default Review
