import React from 'react'
import { Link } from 'react-router-dom'
import './admin.css'

const Admin = () => {
  return (
    <section className='admin__container'>
      <Link to='./addProduct' className='tool__link'>
        <div className='tool__container'>
          <span className="material-symbols-outlined tool__icon">add_circle</span>
          <h1 className='tool__title'>Ingrese un nuevo producto</h1>
        </div>
      </Link>
      <Link to='./addProduct' className='tool__link'>
        <div className='tool__container'>
          <span className="material-symbols-outlined tool__icon">monitoring</span>
          <h1 className='tool__title'>Tablero de estadística</h1>
        </div>
      </Link>
      <Link to='./addProduct' className='tool__link'>
        <div className='tool__container'>
          <span className="material-symbols-outlined tool__icon">list_alt</span>
          <h1 className='tool__title'>Dashboard logístico</h1>
        </div>
      </Link>
      <Link to='./addProduct' className='tool__link'>
        <div className='tool__container'>
        <span className="material-symbols-outlined tool__icon">group</span>
          <h1 className='tool__title'>Gestión de Usuarios</h1>
        </div>
      </Link>
    </section>
  )
}

export default Admin