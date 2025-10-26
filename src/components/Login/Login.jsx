import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div>
      <form>
        <div className='form'>
           <h2>Login Form</h2>
           <input type="name" placeholder='Enter your Name' />
           <input type="email" placeholder='Enter your Email ID' />
           <input type="password" placeholder='Enter Password' />
           <a href='#'>Forgot Password?</a>
           <button>Submit</button>
        </div>
    </form>
    </div>
  )
}

export default Login