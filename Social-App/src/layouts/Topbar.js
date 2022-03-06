import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/app.css'
import '../assets/index.css'

const Topbar = ({name}) => {
    return (
        <div className='topbar'>
            <div>
                <Link to='/home' style={{textDecoration: 'none'}} >
                    <button id='logo'>GENERIC SOCIAL APP</button>
                </Link>
            </div>
            <div className='search-bar'>
                <input type='text' placeholder='Search'/>
            </div>
            <div className='topbar-right'> 
                <button>
                    <Link to='/profile' style={{textDecoration: 'none'}} >
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