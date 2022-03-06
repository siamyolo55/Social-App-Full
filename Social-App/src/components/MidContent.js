import React from 'react'
import { useLocation } from 'react-router-dom'
import Postbox from './Postbox'
import Sidebar from '../layouts/Sidebar'
import ProfileContent from './ProfileContent'
import '../assets/mid-content.css'
import '../assets/index.css'

const MidContent = () => {
    const location = useLocation()
    return (
        <div className='mid-content'>
            <div className='sidebar'>
                <Sidebar />
            </div>
            <div className='content'>
                {location.pathname === '/home' ? <Postbox /> : <ProfileContent /> }
            </div>
            <div>
                {/* add posts here */}
            </div>
        </div>
    )
}

export default MidContent