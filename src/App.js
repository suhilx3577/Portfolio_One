import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Social from './components/Social'
import About from './components/About'
import Portfolio from './components/Portfolio'

const App = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <Social/>
      <About/>
      <Portfolio/>
    </>
  )
}

export default App