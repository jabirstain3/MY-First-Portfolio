// import { useState } from 'react'
import './App.css'
import Footer from './components/footer/Footer'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/navbar'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className=''>
      <Navbar></Navbar>
      <Hero></Hero>
      <Footer></Footer>
    </div>
  )
}

export default App
