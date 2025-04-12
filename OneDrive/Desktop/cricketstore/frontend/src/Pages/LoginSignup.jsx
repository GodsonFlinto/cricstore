import React from 'react'
import './CSS/LoginSignup.css'
import { Link } from 'react-router-dom'

export const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name'/>
          <input type="text" placeholder='Email Address'/>
          <input type="text" placeholder='Password'/>
        </div>
        <p className="loginsignup-login">Already have an account? <Link to='/login' style={{color:'red', textDecoration : 'none'}}>Login here</Link></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id=''/>
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        <button>Continue</button>
      </div>
    </div>
  )
}
