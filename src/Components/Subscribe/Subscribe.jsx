import React from 'react'
import './Subscribe.css'
import { assets } from '../../assets/assets'
const Subscribe = () => {
  return (
    <div className='subscribe mt-25 mx-auto px-4 sm:px-10 lg:px-20'>
      <div className="icons block sm:flex justify-around items-center">
        <div className="box text-center mb-7">
          <img className='w-10 h-10 mx-auto mb-7' src={assets.exchange_icon} alt="exchange_icon" />
          <h3 className='text-black font-bold'>Easy Exchange Policy</h3>
          <p className='text-gray-400'>wE offer a 30 day money back guarantee</p>
        </div>

        <div className="box text-center mb-7">
          <img className='w-10 h-10 mx-auto mb-7' src={assets.quality_icon} alt="quality_icon" />
          <h3 className='text-black font-bold'>Best Quality</h3>
          <p className='text-gray-400'>we offer a 30 day money back guarantee</p>
        </div>

        <div className="box text-center">
          <img className='w-10 h-10 mx-auto mb-7' src={assets.support_img} alt="star_icon" />
          <h3 className='text-black font-bold'>Best Quality</h3>
          <p className='text-gray-400'>we offer a 30 day money back guarantee</p>
        </div>

      </div>




    </div>
  )
}

export default Subscribe