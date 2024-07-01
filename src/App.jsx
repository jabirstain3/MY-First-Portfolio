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
  // const [count, setCount] = useState(0)

  return (
    <div className=''>
      <section>
        <Navbar></Navbar> 
      </section>
      <section id="hero">
        <Hero></Hero>  
      </section>
      <section id="about">
        <About></About>  
      </section>
      <section id="skills">
        <Skills></Skills>
      </section>
      <section id="projects">
        <Projects></Projects>
      </section>
      <section id="contect">
        <Contact></Contact>
      </section>
      <section>
        <Footer></Footer>
      </section>
    </div>
  )
}

export default App
