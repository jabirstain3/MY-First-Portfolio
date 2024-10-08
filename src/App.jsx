// import { useState } from 'react'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/navbar'
import Projects from './components/project/Projects'
import Skills from './components/skills/Skills'


function App() {
  // const [count, setCount] = useState(0) mx-[3vw] sm:mx-[4vw] w-max[1440]
  const borderlight = 'border border-black dark:border-white rounded-xl'
  return (
    <div className='max-w-[1440px] w-[94vw] mx-auto my-0 grid grid-cols-1 gap-4'>
      <section className={`sticky top-0 z-50 ${borderlight}`}>
        <Navbar></Navbar>
      </section>
      <section id="hero" className={`py-5 sm:py-10 md:py-14 ${borderlight}`}>
        <Hero></Hero>  
      </section>
      <section id="about" className={`py-8 sm:py-10 md:py-14 ${borderlight}`}>
        <About></About>  
      </section>
      <section id="skills" className={`py-8 sm:py-10 md:py-14 ${borderlight}`}>
        <Skills></Skills>
      </section>
      <section id="project" className={`py-8 sm:py-10 md:py-14 ${borderlight}`}>
        <Projects></Projects>
      </section>
      <section id="contact" className={`py-8 sm:py-10 md:py-14 ${borderlight}`}>
        <Contact></Contact>
      </section>
      <section>
        <Footer></Footer>
      </section>
    </div>
  )
}

export default App;
