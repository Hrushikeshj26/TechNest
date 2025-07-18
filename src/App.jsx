import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import About from './pages/About'
import Blogs from './pages/Blogs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen w-full overflow-hidden bg-[#e9e6f1]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/blogs' element={<Blogs/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
