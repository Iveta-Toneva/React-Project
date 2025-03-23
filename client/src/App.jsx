import './App.css'
import { Navigation } from './components/Navigation/Navigation'
import { Footer } from './components/Footer/Footer'
import { Route, Routes } from 'react-router'
import { Home } from './components/Home/Home'
import { Caricatures } from './components/Caricatures/Carticatures'
import { Caricature } from './components/Caricature/Caricature'
import { Orders } from './components/Orders/Orders'
import { Register } from './components/Register/Register'
import { Login } from './components/Login/Login'
import { UserContext } from '../contexts/UserContext'
import { useState } from 'react'

function App() {

  const [authData, setAuthData] = useState({});

  const loginHandler = (data) => {
    setAuthData(data)
  }

  return (

    <UserContext.Provider value={{ ...authData, loginHandler }}>
      <div >
        <Navigation />
        <div className="min-h-screen flex flex-col items-center">
          <Routes>
            <Route index element={<Home />} />
            <Route path='/caricatures' element={<Caricatures />} />
            <Route path='/details/:id' element={<Caricature />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </div >

      </div>
      <Footer />
    </UserContext.Provider >

  )
}

export default App
