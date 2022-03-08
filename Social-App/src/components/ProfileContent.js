import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../layouts/Sidebar'
import Postbox from './Postbox'
import '../assets/mid-content.css'
import Posts from './Posts'

const ProfileContent = ({id,name,email,password,about,dp,friends,birthday,posts}) => {
    const [rerender, setRerender] = useState(false)

    const handleRerender = () => {
        setRerender(!rerender)
    }
    let data = {id,name,email,password,about,dp,friends,birthday,posts}

    useEffect(() => {
        console.log('mew')
    },[rerender])

    return (
        <div className='all-content'>
            <div className='mid-content'>
                <div className='sidebar'>
                    <Sidebar birthday={birthday} friends={friends} />
                </div>
                <div className='right-side'>
                    <div className='avatar-content'>
                        <div>
                            <img src={dp} alt="bla" />
                        </div>
                        <div className='right-content'>
                            <div className='about'>
                                <div style={{'marginBottom': '100px','marginLeft':'15px'}}>
                                    <b>{name}, 24</b>
                                    <p><b>About : {about}</b></p>
                                    <Link to='/profile/edit' state={{...data}}>
                                        <button className='edit-but'>Edit Profile</button>
                                    </Link>
                                </div>
                                <Postbox data={data} handleRerender={handleRerender} />
                            </div>
                        </div>
                    </div>
                    <div className='posts'>
                        <h3>Posts</h3>
                        <Posts uid={id} />
                    </div>
                </div>
            </div>      
        </div>
    )
}

export default ProfileContent