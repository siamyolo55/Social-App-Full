import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../layouts/Sidebar'
import axios from 'axios'
import '../assets/mid-content.css'

const EditMidContent = (data) => {
    const id = data.id
    const [name,setName] = useState(data.name)
    const [email,setEmail] = useState(data.email)
    const [about,setAbout] = useState(data.about)
    const [password,setPassword] = useState(data.password)
    const [repassword,setRepassword] = useState(data.password)
    const [birthday, setBirthday] = useState(data.birthday)
    const [status,setStatus] = useState('')
    const navigate = useNavigate()

    const updateUserData = async (e) => {
        e.preventDefault()
        let res = await axios.put('http://127.0.0.1:4000/updateUserData',{
            id, name, email, password, about, birthday
        })
        if(res.status === 201){
            setStatus('Updated, login to continue')
            setTimeout(() => navigate('/'), 1500)
            return
        }
        setStatus('Error updating')
    }

    return (
        <div className='mid-content'>
            <div>
                <Sidebar friends={data.friends} />
            </div>
            <div className='edit-form'>
                <form onSubmit={updateUserData}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" value={name} id="name" onChange={(e) => setName(e.target.value)} />
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={email} id="email" onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor="about">About</label>
                    <input type="text" name="about" value={about} id="about" onChange={(e) => setAbout(e.target.value)} />
                    <label htmlFor="birthday">Birthday</label>
                    <input type="date" name='birthday' value={birthday} id='birthday' onChange={(e) => setBirthday(e.target.value)} />
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' value={password} id='password' onChange={(e) => setPassword(e.target.value)} />
                    <label htmlFor="repassword">Retype Password</label>
                    <input type="password" name="repassword" value={repassword} id="repassword" onChange={(e) => setRepassword(e.target.value)} />
                    <button type='submit'>Save</button>
                </form>
                <p>{status}</p>
            </div>
        </div>
    )
}

export default EditMidContent