import { useState } from 'react'
import { SignInUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const SignIn = ({ setUser }) => {
  let navigate = useNavigate()

  const initialState = { username: '', password: '' }
  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formValues)
    setFormValues(initialState)
    setUser(payload)
    navigate('/categories')
  }

  return (
    <div className="signin col">
      <div className="card-overlay centered">
        <form className="col" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">username</label>
            <input
              onChange={handleChange}
              name="username"
              type="text"
              placeholder="username"
              value={formValues.username}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              value={formValues.password}
              required
            />
          </div>
          <button disabled={!formValues.username || !formValues.password}>
            Sign In
          </button>
        </form>

        <div>
          <h4>Don't have an accout?</h4>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignIn
