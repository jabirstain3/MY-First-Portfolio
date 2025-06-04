// import { useState } from 'react'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/navbar'
import Projects from './components/project/Projects'
import Skills from './components/skills/Skills'


function App() {
  const borderlight = 'border border-black dark:border-white rounded-xl'
  return (
    <div className=' text-black dark:text-white'>
      <section className={` sticky top-0 z-50`}>
        <Navbar></Navbar>
      </section>
      <div className='max-w-[1440px] w-[94vw] mx-auto my-4 grid grid-cols-1 gap-4'>
        <section id="hero" className={`scroll-mt-24 py-5 sm:py-10 md:py-14 ${borderlight}`}>
          <Hero></Hero>  
        </section>
        <section id="about" className={`scroll-mt-24 py-8 sm:py-10 md:py-14 ${borderlight}`}>
          <About></About>  
        </section>
        <section id="skills" className={`scroll-mt-24 py-8 sm:py-10 md:py-14 ${borderlight}`}>
          <Skills></Skills>
        </section>
        <section id="project" className={`scroll-mt-24 py-8 sm:py-10 md:py-14 ${borderlight}`}>
          <Projects></Projects>
        </section>
        <section id="contacts" className={`scroll-mt-24 py-8 sm:py-10 md:py-14 ${borderlight}`}>
          <Contact></Contact>
        </section>
      </div>
      <section>
        <Footer></Footer>
      </section>
    </div>
  )
}

export default App;
