import React from 'react'
import { assets } from '../../assets/assets'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact px-4 sm:px-10 lg:px-20'>
      <h1 className='text-3xl font-medium text-black text-center mb-10 py-10'>
        <span className='text-gray-400'>Contact</span> Us
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-start gap-10 mb-20 max-w-6xl mx-auto">
        <div className="w-full md:w-1/2">
          <img className="w-full h-auto" src={assets.contact_img} alt="Contact Us" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-start items-start gap-6">
          <h2 className='text-xl font-semibold text-gray-600'>Our Store</h2>
          <div className="text-gray-500">
            <p>54709 Willms Station</p>
            <p>Suite 350, Washington, USA</p>
          </div>
          <div className="text-gray-500">
            <p>Tel: (415) 555-0132</p>
            <p>Email: admin@forever.com</p>
          </div>
          <h2 className='text-xl font-semibold text-gray-600'>Careers at Forever</h2>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  )
}

export default Contact