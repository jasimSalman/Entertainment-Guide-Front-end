import { useEffect, useState } from "react"
import Client from "../services/api"

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
                    <input
                      type="number"
                      name="reviewRating"
                      className="reviewRating"
                      value={formValues.reviewRating}
                      onChange={handleChange}
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
