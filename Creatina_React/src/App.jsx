import { useState } from 'react'
import Header from './components/Header.jsx'
import Slider from './components/Slider.jsx'
import Footer from './components/Footer.jsx'
import CorpoSite from './components/CorpoSite.jsx'

import './App.css'
import './assets/js/home.js'

function App() {
  return (
    <>
        <Header></Header>
        <Slider></Slider>
        <CorpoSite></CorpoSite>
        <Footer></Footer>
    </>
  )
}

export default App
