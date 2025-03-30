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
import { EditOrder } from './components/EditOrder/EditOrder'
import { CreateOrder } from './components/CreateOrder/CreateOrder'
import { DeleteOrder } from './components/DeleteOrder/DeleteOrder'
import { Profile } from './components/Profile/Profile'
import { AuthGuard } from './guards/AuthGuard'
import { GuestGuard } from './guards/GuestGuard'
import { Error } from './components/Error/Error'


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
            <Route element={<AuthGuard />}>
              <Route path='/logout' element={<Logout />} />
              <Route path='/createOrder' element={<CreateOrder />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/edit/:id' element={<EditOrder />} />
              <Route path='/delete/:id' element={<DeleteOrder />} />
            </Route>
            <Route element={<GuestGuard />}>
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<Login />} />
            </Route>
            <Route path='*' element={<Error />} />
          </Routes>
        </div >

      </div>
      <Footer />
    </UserProvider>


  )
}

export default App
