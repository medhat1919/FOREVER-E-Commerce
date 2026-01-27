import React from 'react'
import { assets } from '../../assets/assets'
import './model.css'

const Model = () => {
  return (
    <>
      <div className="main flex flex-col md:flex-row px-4 sm:px-10 lg:px-20">
        <div className="left">
          <p className='first'> our bestsellers</p>
          <h1 className='second font-normal'> latest arrivals</h1>
          <p className='last'> shop now</p>
        </div>

        <div className="right">
          <img className='w-full h-auto' src={assets.hero_img} alt="" />
        </div>
      </div>
    </>






  )
}

export default Model