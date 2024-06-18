import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { updatePassword } from "../services/Auth"

const UpdatePassword = () => {
  let navigate = useNavigate()

  const initialState = { email: "", password: "" }
  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await updatePassword(formValues)
    setFormValues(initialState)
    setUser(payload)
    navigate("/Signin")
  }

  return (
    <div className="signin col">
      <div className="card-overlay centered">
        <form className="col" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="Email"
              value={formValues.email}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              required
            />
          </div>
          <button disabled={!formValues.email || !formValues.password}>
            Update Password
          </button>
        </form>
      </div>
    </div>
  )
}

export default UpdatePassword
