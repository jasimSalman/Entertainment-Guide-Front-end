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
    {
      payload.type === 'user' ? navigate('/categories') : navigate('/myplaces')
    }
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
          <div>
            <Link to="/updatePassword">
              <h4>Forget your password?</h4>
            </Link>
          </div>
          <div>
            <h4>Don't have an accout?</h4>
            <Link to="/register/user">
              <button>Register as A user </button>
            </Link>

            <span>Or</span>

            <Link to="/register/owner">
              <button>Register as an Owner </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
