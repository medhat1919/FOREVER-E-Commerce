import React from 'react'
import './Navpar.css'
import { assets } from '../../assets/assets.js'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { shopContext } from '../../Context/Context'
const Navpar = () => {
  const { Def, Count, Search, Ser, setSer } = useContext(shopContext)
  const [Menu, setMenu] = useState(false)

  const [isOpen, setIsOpen] = useState("home");

  return (
    <div className='navpar px-4 sm:px-10 lg:px-20 mt-10 flex justify-between items-center mb-10 w-full'>
      <div className="logo w-32 sm:w-40">
        <Link to='/'>   <img src={assets.logo} alt="logo" className="w-full" /></Link>
      </div>
      {Menu === false ? <div className="mid">
        <ul className='hidden lg:flex gap-6 cursor-pointer relative uppercase text-sm font-medium' >
          <Link to='/'> <li onClick={() => setIsOpen("home")} className={`pb-1 ${isOpen === "home" ? "border-b-2 border-black" : ""} hover:text-black transition-all duration-300`}>Home</li></Link>

          <Link to='/collection'> <li onClick={() => setIsOpen("collection")}
            className={`pb-1 ${isOpen === "collection" ? "border-b-2 border-black" : ""} hover:text-black transition-all duration-300`}> collection  </li></Link>

          <Link to='/about'> <li onClick={() => setIsOpen("about")} className={`pb-1 ${isOpen === "about" ? "border-b-2 border-black" : ""} hover:text-black transition-all duration-300`}>About</li></Link>

          <Link to='/contact'> <li onClick={() => setIsOpen("contact")} className={`pb-1 ${isOpen === "contact" ? "border-b-2 border-black" : ""} hover:text-black transition-all duration-300`}>contact</li></Link>
        </ul>
      </div>

        :




        <div className={`fixed top-0 right-0 bottom-0 bg-white z-50 transition-all duration-300 overflow-hidden ${Menu ? 'w-full' : 'w-0'}`}>
          <div className="flex flex-col text-gray-600">
            <div onClick={() => setMenu(false)} className="flex items-center gap-4 p-5 cursor-pointer border-b">
              <img src={assets.dropdown_icon} className="h-4 rotate-180" alt="" />
              <p className="font-medium text-lg">Back</p>
            </div>
            <Link to='/' onClick={() => { setIsOpen("home"); setMenu(false) }} className={`py-4 pl-6 border-b hover:bg-black hover:text-white transition-all ${isOpen === "home" ? "bg-black text-white" : ""}`}>HOME</Link>
            <Link to='/collection' onClick={() => { setIsOpen("collection"); setMenu(false); Ser(false) }} className={`py-4 pl-6 border-b hover:bg-black hover:text-white transition-all ${isOpen === "collection" ? "bg-black text-white" : ""}`}>COLLECTION</Link>
            <Link to='/about' onClick={() => { setIsOpen("about"); setMenu(false) }} className={`py-4 pl-6 border-b hover:bg-black hover:text-white transition-all ${isOpen === "about" ? "bg-black text-white" : ""}`}>ABOUT</Link>
            <Link to='/contact' onClick={() => { setIsOpen("contact"); setMenu(false) }} className={`py-4 pl-6 border-b hover:bg-black hover:text-white transition-all ${isOpen === "contact" ? "bg-black text-white" : ""}`}>CONTACT</Link>
          </div>
        </div>
      }







      <div className="right flex items-center gap-5 sm:gap-7">
        <Link to='/collection'>    <img className='w-5 cursor-pointer' onClick={() => setSer(!Ser)} src={assets.search_icon} alt="search" /></Link>
        <Link to='/login'>  <img className='w-5 cursor-pointer' src={assets.profile_icon} alt="profile" /></Link>
        <Link to='/card' className="relative">
          <img className='w-5 cursor-pointer' src={assets.cart_icon} alt="cart" />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{Count}</p>
        </Link>
        <img className='w-5 cursor-pointer lg:hidden' onClick={() => setMenu(true)} src={assets.menu_icon} alt="menu" />
      </div>
    </div>
  )
}

export default Navpar