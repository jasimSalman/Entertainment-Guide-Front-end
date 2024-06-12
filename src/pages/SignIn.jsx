import '../App.css'
import { Link } from 'react-router-dom'

const SignIn = () => {





  return (
    <div className="categories">
      <h1>Log In</h1>
      <div className="form">
        <input type='text' placeholder='user name'/>
        <input type='password' placeholder='password'/>
      </div>
      <p>you dont have account?</p>
      <Link to="/SignUp">Sign Up</Link>
    </div>
  )

}

export default SignIn