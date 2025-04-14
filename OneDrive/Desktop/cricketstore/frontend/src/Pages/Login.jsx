import React from 'react'
import './CSS/Login.css'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <div className='login'>
      <div className="login-container">
        <h1>Login</h1>
        <form className="login-fields">
          <label htmlFor="email">Email Address</label>
          <input id="email" type="text" name="email" placeholder="Email Address" />

          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" placeholder="Password" />

          <button type="submit">Login</button>
        </form>
        <p className="login-login">
          New User? <Link to='/signup' style={{color: 'red', textDecoration: 'none'}}>SignUp</Link>
        </p>
      </div>
    </div>
  )
}
