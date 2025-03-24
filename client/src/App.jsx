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
import { Logout } from './components/Logout/Logout'
import { UserProvider } from './providers/UserProvider'

function App() {


  return (

    <UserProvider>
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
            <Route path='/logout' element={<Logout />} />
          </Routes>
        </div >

      </div>
      <Footer />
    </UserProvider>


  )
}

export default App
