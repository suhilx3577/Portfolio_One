import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Social from './components/Social'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'
import Contact from './components/Contact'

const App = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <Social/>
      <About/>
      <Portfolio/>
      <Experience/>
      <Contact/>
    </>
  )
}

export default App