import { useState } from "react"
import { RegisterUser } from "../services/Auth"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"

const Register = () => {
  let navigate = useNavigate()

  const { type } = useParams()

  const initValues = {
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  }

  const [formValues, setFormValues] = useState(initValues)
  const [password, setPassword] = useState("")
  const [matchPassword, setMatchPassword] = useState("")
  const [validPass, setValidPass] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
    if (name === "password") {
      setPassword(value)
    } else if (name === "confirmPassword") {
      setMatchPassword(value)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password !== matchPassword) {
      setValidPass(false)
      return
    }
    setValidPass(true)
    await RegisterUser({
      username: formValues.username,
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      email: formValues.email,
      password: formValues.password,
      type: type,
    })
    setFormValues(initValues)
    navigate("/signin")
  }

  return (
    <div className="signin">
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="username" className="label">
            Username
          </label>
          <input
            onChange={handleChange}
            name="username"
            type="text"
            placeholder="John Smith"
            value={formValues.username}
            required
            className="inputFeild"
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="firstName" className="label">
            First Name
          </label>
          <input
            onChange={handleChange}
            name="firstName"
            type="text"
            placeholder="First Name"
            value={formValues.firstName}
            required
            className="inputFeild"
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="lastName" className="label">
            Last Name
          </label>
          <input
            onChange={handleChange}
            name="lastName"
            type="text"
            placeholder="Last Name"
            value={formValues.lastName}
            required
            className="inputFeild"
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="example@example.com"
            value={formValues.email}
            required
            className="inputFeild"
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="password"
            value={formValues.password}
            required
            className="inputFeild"
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="confirmPassword" className="label">
            Confirm Password
          </label>
          <input
            onChange={handleChange}
            type="password"
            name="confirmPassword"
            placeholder="confirmPassword"
            value={formValues.confirmPassword}
            required
            className="inputFeild"
          />
        </div>

        <button
          type="submit"
          disabled={
            !formValues.username ||
            !formValues.firstName ||
            !formValues.lastName ||
            !formValues.email ||
            !formValues.password ||
            !formValues.confirmPassword ||
            formValues.password !== formValues.confirmPassword
          }
          className="authButton"
        >
          Signup
        </button>
      </form>
    </div>
  )
}

export default Register
