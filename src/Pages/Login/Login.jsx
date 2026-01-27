import React from 'react'
import './Login.css'
import { useState } from 'react'

const Login = () => {
  const [showPassword, setShowPassword] = useState('Sign Up')

  return (
    <div className="login flex flex-col items-center w-full sm:max-w-96 m-auto mt-14 gap-4 text-gray-800 px-4">
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{showPassword}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      <form className='flex flex-col items-center w-full gap-4 text-gray-800'>
        {showPassword === 'Sign Up' && (
          <input
            className='w-full px-3 py-2 border border-gray-800'
            type="text"
            required
            placeholder='Name'
          />
        )}
        <input
          className='w-full px-3 py-2 border border-gray-800'
          type="email"
          required
          placeholder='Email'
        />
        <input
          className='w-full px-3 py-2 border border-gray-800'
          type="password"
          required
          placeholder='Password'
        />

        <div className="w-full flex justify-between text-sm mt-[-8px]">
          <p className="cursor-pointer">Forgot your password?</p>
          {showPassword === 'Login'
            ? <p onClick={() => setShowPassword('Sign Up')} className="cursor-pointer">Create account</p>
            : <p onClick={() => setShowPassword('Login')} className="cursor-pointer">Login Here</p>
          }
        </div>

        <button className='bg-black text-white font-light px-8 py-2 mt-4 hover:opacity-80 transition-all'>
          {showPassword === 'Login' ? 'Sign In' : 'Sign Up'}
        </button>
      </form>
    </div>
  )
}

export default Login