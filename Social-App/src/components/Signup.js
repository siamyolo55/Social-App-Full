import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { nameValidator, emailValidator, passwordValidator } from '../utils/validation'
import '../assets/app.css'


const Signup = () => {
    document.title = 'Signup'
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [rpassword,setRpassword] = useState('')
    const [status,setStatus] = useState('')
    const navigate = useNavigate()

    const signup = async () => {
        // add request here
        let res = await axios.post('http://127.0.0.1:4000/signup',{
            name,
            email,
            password
        })
        if(res.status === 201){
            setStatus('Signup Successful, Login to continue')
            setTimeout(() => navigate('/',{state: {
                name: res.data.name,
                email: res.data.email
            }}),2000)
        }
        else{
            setStatus('Signup Error')
            setTimeout(()=> setStatus(''),2000)
        }

    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!nameValidator(name)){
            setStatus('Enter a valid name')
            setTimeout(() => { setStatus('') },2000)
        }
        if(password !== rpassword){
            setStatus("Passwords don't match")
            setTimeout(()=>{ setStatus('') },2000)
            return
        }
        if(!emailValidator(email)){
            setStatus("Enter Valid Email")
            setTimeout(()=>{ setStatus('') },2000)
            return
        }
        if(!passwordValidator(password)){
            setStatus("Password should contain at least one number,uppercase,lower case letter and length 6-20")
            setTimeout(()=>{ setStatus('') },2000)
            return
        }
        signup()
    }

    return (
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <h3>Signup</h3>
                <label htmlFor='name'>Name</label>
                <input type='text' name='name' id='name' value={name} onChange={(e) => setName(e.target.value)} />
                <label htmlFor="email">Email</label>
                <input type='text' name='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor='password'>Password</label>
                <input type='password' name='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <label htmlFor='rpassword'>Re-type password</label>
                <input type='password' name='rpassword' id='rpassword' value={rpassword} onChange={(e) => setRpassword(e.target.value)} />
                <div>
                    <button type='submit'>Signup</button>
                    <Link to='/'><button type='click' >Login</button></Link>
                </div>
            </form>
            <div>
                <p>{status}</p>
            </div>
        </div>
    )
}

export default Signup
