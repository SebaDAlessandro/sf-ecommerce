import React from 'react'
import Slider from '../../components/slider/Slider'
import ListCards from '../../components/listCards/ListCards'
import './home.css'




const Home = () => {
  return (
    <div className='home__slider-container'>
      <Slider />
      <ListCards />
    </div>
  )
}

export default Home