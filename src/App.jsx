// import { useState } from 'react'
import './App.css'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/navbar'
import Projects from './components/project/Projects'
import Skills from './components/skills/Skills'


function App() {
  // const [count, setCount] = useState(0) mx-[3vw] sm:mx-[4vw] w-max[1440]

  return (
    <div className='w-full '>
      <section className='sticky top-0 z-50' >
        <Navbar></Navbar>
      </section>
      <section id="hero" className='py-5 sm:py-10 md:py-14'>
        <Hero></Hero>  
      </section>
      <section id="about" className=' py-8 sm:py-10 md:py-14'>
        <About></About>  
      </section>
      <section id="skills" className='border py-8 sm:py-10 md:py-14'>
        <Skills></Skills>
      </section>
      <section id="project" className='py-8 sm:py-10 md:py-14'>
        <Projects></Projects>
      </section>
      <section id="contact" className='py-8 sm:py-10 md:py-14'>
        <Contact></Contact>
      </section>
      <section>
        <Footer></Footer>
      </section>
    </div>
  )
}

export default App;
