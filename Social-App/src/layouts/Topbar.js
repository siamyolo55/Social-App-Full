import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/app.css'
import '../assets/index.css'

const Topbar = ({id,name,email,password,dp,friends,posts,birthday,about}) => {
    let data = {
        id,name, about, dp, friends, birthday, posts
    }
    return (
        <div className='topbar'>
            <div>
                <Link to='/home' state={data} style={{textDecoration: 'none'}} >
                    <button id='logo'>GENERIC SOCIAL APP</button>
                </Link>
            </div>
            <div className='search-bar'>
                <input type='text' placeholder='Search'/>
            </div>
            <div className='topbar-right'> 
                <button>
                    <Link to='/profile' state={{id,name,email,password,dp,friends,posts,birthday,about}} style={{textDecoration: 'none'}} >
                        {name}
                    </Link>
                </button>
                <button>
                    <Link to='/' style={{textDecoration: 'none'}} >
                        Logout
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default Topbar