import React, { useState } from 'react'
import classes from './Login.module.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  return (
    <div className={`page ${classes.Login}`}>
      <div className={classes.LoginForm}>
        <h1>Login</h1>
        <form>
          <div className='mb-3'>
            <label htmlFor="email" className='form-label text-light'>Email</label>
            <input type="email" className='form-control' id='email' autoComplete='off' placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='mb-3'>
            <label htmlFor="password" className='form-label text-light'>Password</label>
            <input type="password" className='form-control' id='password' autoComplete='off' placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className='text-center text-warning mt-3' style={{ cursor: 'pointer' }}>
            Forgot Password?
          </div>
          <div className='d-grid'>
            <button type='button' className='btn btn-primary form-control mt-3'>Login</button>
          </div>

        </form>
        <button type='button' className='btn btn-primary form-control mt-3'>Continue with Google</button>
        <p className='text-center text-light mt-3'>Don't have an account? <span className='text-warning' style={{cursor:'pointer'}} onClick={()=>navigate('/register')}>Sign Up</span> here</p>
      </div>
    </div>
  )
}

export default Login