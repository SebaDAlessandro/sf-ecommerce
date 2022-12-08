import React from 'react'
import Card from '../card/Card'
import './listCards.css'


const ListCards = () => {
  return (
    <>
      <h2 className='listCards__title'>All products with: 20% off</h2>
      <div className='listCards__container'>

        <div className='listCards__seccion'>
          <h2>Tshirts</h2>
          <div className='listCards__items'>
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>

        <div className='listCards__seccion'>
          <h2>shorts</h2>
          <div className='listCards__items'>
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>

        <div className='listCards__seccion'>
          <h2>socks</h2>
          <div className='listCards__items'>
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>


      </div>
    </>
  )
}

export default ListCards