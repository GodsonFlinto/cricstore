import React, { useState } from 'react'
import './CSS/LoginSignup.css'
import { Link } from 'react-router-dom'

export const LoginSignup = () => {
  const initialStateErrors = {
    name:{required:false},
    email:{required:false},
    password:{required:false}
  };

  const [errors,setErrors] = useState(initialStateErrors);

  const handleSubmit = (event)=>{
    event.preventDefault();

    let errors = initialStateErrors;

    if(inputs.name === ""){
      errors.name.required=true;
    }
    if(inputs.email === ""){
      errors.email.required=true;
    }
    if(inputs.password === ""){
      errors.password.required=true;
    }
    setErrors(errors);
  }
  const [inputs, setInputs] = useState({
    name:"",
    email:"",
    password:""
  })

  const handleInput = (event)=>{
    setInputs({...inputs,[event.target.name]:event.target.value})
  }
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit} action="">
        <div className="loginsignup-fields">
          <input type="text" name='name' onChange={handleInput} placeholder='Your Name'/>
          { errors.name.required===true?
            <span>
              Name is required.
            </span> : null
          }
          <input type="email" name='email' onChange={handleInput} placeholder='Email Address'/>
          { errors.email.required===true?
            <span>
              Email is required.
            </span> : null
          }
          <input type="password" name='password' onChange={handleInput} placeholder='Password'/>
          { errors.password.required===true?
            <span>
              Password is required.
            </span> : null
          }
        </div>
        <p className="loginsignup-login">Already have an account? <Link to='/login' style={{color:'red', textDecoration : 'none'}}>Login here</Link></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id=''/>
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        <button type='submit'>Continue</button>
        </form>
      </div>
    </div>
  )
}  