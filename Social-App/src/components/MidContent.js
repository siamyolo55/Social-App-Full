import React from 'react'
import Postbox from './Postbox'
import Sidebar from '../layouts/Sidebar'
import '../assets/mid-content.css'
import '../assets/index.css'

const MidContent = ({id,name, dp, about, friends, birthday, posts }) => {
    return (
        <div className='mid-content'>
            <div className='sidebar'>
                <Sidebar friends={friends} birthday={birthday} />
            </div>
            <div className='content'>
                <Postbox id={id} /> 
            </div>
            <div>
                {/* add posts here */}
            </div>
        </div>
    )
}

export default MidContent