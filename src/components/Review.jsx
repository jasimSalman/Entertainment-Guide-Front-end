
import { useEffect, useState } from 'react'
import Client from '../services/api'
import { Rating } from '@mui/material'

const Review = ({ reviews, placeId }) => {
  const initialState = { reviewText: "", reviewRating: "", userId: "" }
  const [formValues, setFormValues] = useState(initialState)

  const [userId, setUserId] = useState("")
  const [userType, setUserType] = useState("")

  const [reviewList, setReviewList] = useState([])

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId")
    if (storedUserId) setUserId(storedUserId)
    const storedUserType = localStorage.getItem("userType")
    if (storedUserType) setUserType(storedUserType)
    setReviewList(reviews || [])
  }, [reviews])

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleRatingChange = (event, newValue) => {
    setFormValues({ ...formValues, reviewRating: newValue })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await Client.post(
      `/places/${placeId}/reviews/${userId}`,
      formValues
    )
    setReviewList([...reviewList, response.data])
    setFormValues(initialState)
  }

  const handleDelete = async (reviewId) => {
    try {
      await Client.delete(`/places/${placeId}/reviews/${reviewId}`)
      setReviewList(reviewList.filter((review) => review._id !== reviewId))
    } catch (error) {
      console.error("Failed to delete review:", error)
    }
  }
  const [value, setValue] = useState(2)

  return (
    <div className="reviewForm">
      {userId && userType === "user" && (
        <div className="reviewInput">
          <form onSubmit={handleSubmit} className="rForm">
            <table>
              <tbody>
                <tr>
                  <td>Review</td>
                  <td>
                    <input
                      type="text"
                      name="review"
                      className="review"
                      value={formValues.review}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Rating</td>
                  <td>
                    <Rating
                  name="simple-controlled"
                  value={formValues.reviewRating}
                  onChange={handleRatingChange}
                />
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <button type="submit" className="revButton">
                      Submit
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      )}
      
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

                <Rating
                  name="simple-controlled"
                  value={formValues.reviewRating}
                  onChange={handleRatingChange}
                />
                <button type="submit" className="revButton">
                  Submit
                </button>
              </form>
            </div>
          )
        : null}
      <div>
        {reviews.length > 0 ? (
          <div>
            {reviewList.map((review) => (
              <div key={review._id} className="showReview">
                <table className="reviewTable">
                  <tbody>
                    <tr>
                      <td>Name</td>
                      <td>
                        {userId === review.user && (
                          <div
                            onClick={() => handleDelete(review._id)}
                            className="deleteReview"
                          >
                            Delete Review
                          </div>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Review: </p>
                      </td>
                      <td>{review.review}</td>
                    </tr>
                    <tr>
                      <td>
                        <p>Rating: </p>
                      </td>
                      <td>{review.reviewRating}</td>
                    </tr>
                  </tbody>
                </table>
                <p>Review: {review.review}</p>
                <Rating name="read-only" value={review.reviewRating} readOnly />
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
