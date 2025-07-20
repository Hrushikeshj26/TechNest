import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import About from './pages/About'
import Blogs from './pages/Blogs'
import SingleBlog from './pages/SingleBlog'
import Contact from './pages/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen w-full overflow-hidden bg-[#e9e6f1]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/blogs' element={<Blogs/>} />
        <Route path='/blog/:id' element={<SingleBlog/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
