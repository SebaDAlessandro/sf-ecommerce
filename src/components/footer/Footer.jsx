import React from 'react'
import './footer.css'
import { AiOutlineCopyright } from 'react-icons/ai'

const date = new Date()
const year = date.getFullYear()

const Footer = () => {
  return (
    <footer className='footer__container'>
        <AiOutlineCopyright />
        <span className='footer__title'>{year} All Rights Reserved</span>
        {/* <a className="developers__name" href="https://www.linkedin.com/in/sebadalessandro/" target="_blank">Sebastián D'Alessandro</a> */}
    </footer>
  )
}

export default Footer