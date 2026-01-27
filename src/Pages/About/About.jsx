import React from 'react'
import { assets } from '../../assets/assets'
import './About.css'
const About = () => {
    return (
        <div className='about px-4 sm:px-10 lg:px-20'>
            <h1 className='text-3xl font-medium text-black text-center mb-10 py-10'>
                <span className='text-gray-400'>About</span> Us
            </h1>

            <div className="flex flex-col md:flex-row justify-center items-center gap-14 mb-20">
                <div className="w-full md:w-1/2">
                    <img className='w-full h-auto' src={assets.about_img} alt="About Forever" />
                </div>
                <div className="w-full md:w-1/2 text-gray-600">
                    <p className='mb-6'>Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.</p>
                    <p className='mb-6'>Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p>
                    <h2 className='text-xl font-bold text-black mb-4'>Our Mission</h2>
                    <p>Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
                </div>
            </div>

            <div className="py-10">
                <h2 className='text-2xl font-medium text-black mb-10'>
                    <span className='text-gray-400'>Why</span> Choose Us
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 border border-gray-200">
                    <div className="p-10 md:p-14 border-b md:border-b-0 md:border-r border-gray-200">
                        <h3 className='font-bold mb-3'>Quality Assurance:</h3>
                        <p className='text-gray-500 text-sm'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
                    </div>
                    <div className="p-10 md:p-14 border-b md:border-b-0 md:border-r border-gray-200">
                        <h3 className='font-bold mb-3'>Convenience:</h3>
                        <p className='text-gray-500 text-sm'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
                    </div>
                    <div className="p-10 md:p-14">
                        <h3 className='font-bold mb-3'>Exceptional Customer Service:</h3>
                        <p className='text-gray-500 text-sm'>Our team of dedicated professionals is here to assist you every step of the way, ensuring your satisfaction is our top priority.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About