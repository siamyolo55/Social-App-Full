import React from 'react'
import '../assets/mid-content.css'

const Sidebar = ( {birthday, friends} ) => {
    return (
        <>
            <div>
                {/* Name/pic & profile link here */}
            </div>
            <div className='uldiv'>
                <ul>
                    <li><div className='hvcenter'>Friends({friends.length})</div></li>
                    <li><div className='hvcenter'>Birthdays</div></li>
                    <li><div className='hvcenter'>Events</div></li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar