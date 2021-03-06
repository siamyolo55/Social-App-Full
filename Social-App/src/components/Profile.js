import React from 'react'
import { useLocation } from 'react-router-dom'
import Topbar from '../layouts/Topbar'
import ProfileContent from './ProfileContent'
import '../assets/app.css'

const Profile = () => {
    let location = useLocation()
    let data = location.state
    document.title = data.name
    return (
        <>
            <Topbar {...data} />
            <ProfileContent {...data} />
        </>
    )
}

export default Profile