import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import '../assets/app.css'

const Login = () => {
    document.title = 'Login'
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [status,setStatus] = useState('')
    const navigate = useNavigate()

    const loginValidation = async() => {
        // return true when validated
        let res = await axios.post('http://127.0.0.1:4000/login',{
            email,
            password
        })
        if(res.status === 201)
            return true
        return false
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // sent to backend to validate
        if(loginValidation()){
            setStatus('Logging in')
            // send some sort of token
            // need useLocation hook to get email inside homepage
            setTimeout(() => {
                navigate('/home',{ state: { email } })
            },2000)
            return
        }
    }

    return (
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <h3>Login</h3>
                <label htmlFor='email'>Email</label>
                <input type='text' name='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor='password'>Password</label>
                <input type='password' name='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type='submit'>Login</button>
                <p>
                    Don't have an account?
                    <Link to='/signup' style={{ textDecoration: 'none' }}> Signup</Link>
                </p>
            </form>
            <div>
                <p>{status}</p>
            </div>
        </div>
    )
}

export default Login 