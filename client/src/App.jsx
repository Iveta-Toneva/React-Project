import './App.css'
import { Navigation } from './components/Navigation/Navigation'
import { Footer } from './components/Footer/Footer'
import { Route, Routes } from 'react-router'
import { Home } from './components/Home/Home'
import { Caricatures } from './components/Caricatures/Carticatures'

function App() {


  return (
    <>
      <div >
        <Navigation />
        <div className="min-h-screen flex flex-col items-center">
          <Routes>
            <Route index element={<Home />} />
            <Route path='/caricatures' element={<Caricatures />} />
          </Routes>
        </div >

      </div>
      <Footer />
    </>
  )
}

export default App
