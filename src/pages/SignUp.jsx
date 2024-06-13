import '../App.css'
import { Link } from 'react-router-dom'

const SignUp = () => {





  return (
    <div className="categories">
      <h1>Sign Up</h1>
      <div className="form">
        <input type='text' placeholder='User Name'/>
        <input type='text' placeholder='First Name'/>
        <input type='text' placeholder='Last Name'/>
        <input type='Email' placeholder='Email'/>
        <input type='password' placeholder='Password'/>
        <button type='submit'>Log in</button>
      </div>
      <p>I have an account?</p>
      <Link to="/SignIn">Sign In</Link>

    </div>
  )

}

export default SignUp