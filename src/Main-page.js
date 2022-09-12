import React from 'react'
import Header from './components/Header/Header'
import Section1 from './components/main-section/Main.section'
import Section2 from './components/nav-section/Section'
import Footer from './components/footer/Footer'
import Slider from './components/slider-section/Slider'
import Welcome from './components/welcome-section/Welcome'
const App = () => {
  return (
    <div>
      <Header /> 
      <Section1 />
      <Section2 />
      <Slider></Slider>
      <Welcome></Welcome>
      <Footer />
    </div>
  )
}

export default App
