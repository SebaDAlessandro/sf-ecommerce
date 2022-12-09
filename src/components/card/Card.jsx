import React, { useState } from 'react'
import './card.css'
import imgTest from '../assets/imgTest.jpeg'
import ShowOnLogin, { ShowAdmin } from '../hidenLinks/hidenLinks'
//import { INCREMENT } from '../../redux/slice/cartSlice'
//import { useDispatch } from 'react-redux'


const Card = () => {

    const [quantity, setQuantity] = useState(1);

/*    const dispatch = useDispatch()

     const addToCart = (prduct, quantity)=>{
        dispatch(INCREMENT(prduct, quantity))
    } */

    const discount = (quantity)=>{
        quantity > 1 ?  setQuantity(quantity - 1) : console.log('You must add at least one product');
    }
    const count = (quantity)=>{
        setQuantity(quantity + 1)
    }

  return (
    <div className='card__container'>
        <div className='card_admin-options'>
            <ShowAdmin>
                <span className="material-symbols-outlined card_admin-icons">delete</span>
                <span className="material-symbols-outlined card_admin-icons">edit</span>
            </ShowAdmin>
            <ShowOnLogin>
                <span className="material-symbols-outlined card_admin-icons">favorite</span>
            </ShowOnLogin>
        </div>
        <div className='card__details-img'>
            <img className='card__details-img-container' src={imgTest} alt="Product" />
        </div>
        <div className='card__details'>
            <h3 className='card__details-title'>Titulo de 27 letras</h3>
            <h3 className='card__details-price'>$ARG 40.000</h3>
        </div>
        <div className='card_cart-options'>
            <ShowOnLogin>
                <h6><button onClick={()=>discount(quantity)}>-</button> {quantity} <button onClick={()=>count(quantity)}>+</button></h6>
                <h6><button /* onClick={()=>addToCart(product, quantity)} */>add</button></h6>
            </ShowOnLogin>
        </div>
    </div>
  )
}

export default Card