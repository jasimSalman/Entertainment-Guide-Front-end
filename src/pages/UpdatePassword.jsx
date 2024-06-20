import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { updatePassword } from "../services/Auth"

const UpdatePassword = () => {
  let navigate = useNavigate()

  const initialState = { username: "", newPassword: "", confirmPassword: "" }
  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const payload = {
      username: formValues.username,
      newPassword: formValues.newPassword,
    }
    await updatePassword(payload)
    setFormValues(initialState)
    navigate("/Signin")
  }

  return (
    <div className="update-password col">
      <div className="card-overlay centered">
        <form className="col" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              onChange={handleChange}
              name="username"
              type="text"
              placeholder="Username"
              value={formValues.username}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="newPassword">New Password</label>
            <input
              onChange={handleChange}
              name="newPassword"
              type="password"
              placeholder="New Password"
              value={formValues.newPassword}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formValues.confirmPassword}
              required
            />
          </div>
          <button
            disabled={
              !formValues.username ||
              !formValues.newPassword ||
              !formValues.confirmPassword ||
              formValues.newPassword !== formValues.confirmPassword
            }
          >
            Update Password
          </button>
        </form>
      </div>
    </div>
  )
}

export default UpdatePassword
