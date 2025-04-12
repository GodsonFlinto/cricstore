import React from 'react'
import './CSS/Login.css'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <div className='login'>
      <div className="login-container">
        <h1>Login</h1>
        <div className="login-fields">
          <input type="text" placeholder='Email Address'/>
          <input type="text" placeholder='Password'/>
        </div>
        <p className="login-login">New User? <Link to='/signup' style={{color : 'red', textDecoration : 'none'}}>SignUp</Link></p>
        <button>Login</button>
      </div>
    </div>
  )
}
