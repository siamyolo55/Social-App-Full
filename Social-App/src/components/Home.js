import React from 'react'
import Topbar from '../layouts/Topbar'
import MidContent from './MidContent'
import '../assets/app.css'
import '../assets/index.css'

const Home = (props) => {
    document.title = 'Home'
    //const [name,setName] = useState('Abrar')
    const name = 'Abrar'

    return (
        <>
            <Topbar name={name} />
            <MidContent />
        </>
    )
}

export default Home