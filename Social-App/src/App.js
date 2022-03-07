import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import Home from './components/Home'
import Profile from './components/Profile'
import EditProfile from './components/EditProfile'
import './assets/app.css'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Login /> } />
        <Route path='/signup' element={ <Signup /> } />
        <Route path='/home' element={ <Home /> } />
        <Route path='/profile' element={ <Profile /> } />
        <Route path='/profile/edit' element={ <EditProfile /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
