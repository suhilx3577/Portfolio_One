import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Social from './components/Social'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'

const App = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <Social/>
      <About/>
      <Portfolio/>
      <Experience/>
    </>
  )
}

export default App