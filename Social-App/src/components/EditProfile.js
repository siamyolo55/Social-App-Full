import React from 'react'
import { useLocation } from 'react-router-dom'
import Topbar from '../layouts/Topbar'
import EditMidContent from './EditMidContent'
import '../assets/mid-content.css'

const EditProfile = () => {
    let location = useLocation()
    let data = location.state
    document.title = 'Edit Profile'
    console.log(data)
    return (
        <>
            <Topbar {...data} />
            <EditMidContent {...data} />
        </>
    )
}

export default EditProfile