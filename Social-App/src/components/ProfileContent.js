import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../layouts/Sidebar'
import Postbox from './Postbox'
import '../assets/mid-content.css'
import Posts from './Posts'

const ProfileContent = ({id,name,email,password,about,dp,friends,birthday,posts}) => {
    let data = {id,name,email,password,about,dp,friends,birthday,posts}
    return (
        <div className='all-content'>
            <div className='mid-content'>
                <div className='sidebar'>
                    <Sidebar birthday={birthday} friends={friends} />
                </div>
                <div className='avatar-content'>
                    <div>
                        <img src={dp} alt="bla" />
                    </div>
                    <div className='about'>
                        <div style={{'marginBottom': '100px','marginLeft':'15px'}}>
                            <b>{name}, 24</b>
                            <p><b>About : {about}</b></p>
                            <Link to='/profile/edit' state={{...data}}>
                                <button className='edit-but'>Edit Profile</button>
                            </Link>
                        </div>
                        <Postbox {...data} />
                    </div>
                </div>
            </div>
            <div className='posts'>
                <Posts posts={posts} />
            </div>
        </div>
    )
}

export default ProfileContent