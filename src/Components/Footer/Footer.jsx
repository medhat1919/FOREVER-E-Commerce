import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className="footer px-4 sm:px-10 lg:px-20">
      <div className="flex flex-col items-center text-center py-20">
        <div className="max-w-xl mx-auto">
          <h1 className='text-2xl md:text-3xl font-semibold text-gray-800 mb-3'>Subscribe now & get 20% off</h1>
          <p className='text-gray-500 text-sm md:text-base'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>

        <form className="input">
          <input type="email" placeholder='Enter your email' required />
          <button type='submit'>SUBSCRIBE</button>
        </form>
      </div>



      <div className="end grid grid-cols-1 sm:grid-cols-[2fr_1fr_1fr] gap-10 sm:gap-14 my-10 text-sm">
        <div>
          <img className='w-32 mb-5' src={assets.logo} alt="logo" />
          <p className='w-full md:w-2/3 text-gray-600 leading-relaxed'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ullam aut placeat fugit excepturi, rem dolor non odit expedita quo.
          </p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+1-212-456-7890</li>
            <li>contact@foreveryou.com</li>
          </ul>
        </div>
      </div>






    </div>
  )
}

export default Footer