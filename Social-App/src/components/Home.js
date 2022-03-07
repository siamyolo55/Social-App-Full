import React from 'react'
import { useLocation } from 'react-router-dom'
import Topbar from '../layouts/Topbar'
import MidContent from './MidContent'
import '../assets/app.css'
import '../assets/index.css'

const Home = () => {
    document.title = 'Home'
    const location = useLocation()
    const data = location.state

    return (
        <>
            <Topbar  {...data} />
            <MidContent {...data} />
        </>
    )
}

export default Home