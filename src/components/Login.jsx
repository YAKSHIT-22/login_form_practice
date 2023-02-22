import React from 'react';
import FaithMe from '../Img/FaithMe.png';
import './Login.css';

const Login = () => {
  return (
    <div className='bg-gray-300'>
      <div className="flex items-center justify-center min-h-[100vh]">
        <div className="w-full max-w-[380px] py-[20px] px-[10px] min-[430px]:p-[30px] bg-white rounded-[30px] shadow-md hover:shadow-lg cursor-pointer transition duration-300 ease-in-out flex flex-col justify-center items-center justify-items-center">
          <h1 className='font-semibold text-3xl mt-4'>WELCOME</h1>
          <div className='mt-2 mb-3 text-md'><p className='text-gray-500 select-none cursor-default'>Don't have an account? <a className='text-black' href='#'>Register Now</a></p></div>
          <form className='flex flex-col justify-items-center items-center w-[80%] mt-3 gap-5'>
            <input type='text' placeholder='Username' id='username' className='w-full border border-gray-400 rounded-xl p-2'/>
            <input type='password' placeholder='Password' id='password' className='w-full border border-gray-400 rounded-xl p-2 mb-3'/>
            <button type='submit' className='w-[95%] shadow-md bg-orange-400 rounded-lg p-1.5 mb-5 hover:scale-[1.045] duration-300 transition ease-in-out'>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
