import React from 'react'
import Topbar from '../layouts/Topbar'
import MidContent from './MidContent'

const Profile = ({name}) => {
    return (
        <>
            <Topbar name={name} />
            <MidContent />
        </>
    )
}



export default Profile