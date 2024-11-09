import { useState } from "react"

const initialState = {
  username: '',
  password: ''
}

const SignUser = ({ onSignUp, onSignIn }) => {
  const [user, setUser] = useState(initialState)

  const { username, password } = user

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    })
  }

  return (
    <div className="form-container">
      <form className="form">
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input
            type="email"
            name="username"
            id="username"
            value={username}
            onChange={(event) => handleChange(event)}
          />
        </div>

        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(event) => handleChange(event)}
          />
        </div>

        <div className="form-actions">
          <button
            type="button"
            className="action sign-up-action"
            onClick={() => onSignUp(user)}
          >
            Sign up
          </button>
          
          <button
            type="button"
            className="action sign-in-action"
            onClick={() => onSignIn(user)}
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  )
}

export default SignUser