import React from 'react';


const Login = () => {
  return (
    <div className='bg-primary bg-no-repeat bg-center'>
      <div className="flex items-center justify-center h-screen p-4">
        <div className="w-full max-w-[380px] py-[20px] px-[10px] min-[430px]:p-[2rem] bg-white rounded-[30px] shadow-md hover:shadow-lg cursor-pointer transition duration-300 ease-in-out flex flex-col justify-center items-center justify-self-center gap-4">
          <h1 className='font-semibold text-3xl mt-4'>WELCOME</h1>
          
          <form className='flex flex-col justify-items-center items-center w-[80%] mt-3 gap-5'>
            <input type='text' placeholder='Username' id='username' className='w-full border border-gray-400 rounded-lg p-2'/>
            <input type='password' placeholder='Password' id='password' className='w-full border border-gray-400 rounded-lg p-2 mb-3'/>
            <button type='submit' className='w-[95%] shadow-md bg-orange-400 hover:bg-transparent hover:text-orange-400 hover:border font-semibold hover:border-orange-400 text-base rounded-lg p-2 mb-5 hover:scale-[1.045] duration-300 transition ease-in-out'>Login</button>
          </form>
          <div className='mt-2 mb-3 text-md flex items-center justify-around w-full'><p className='text-gray-500 text-sm md:text-base select-none cursor-default'>Don't have an account?</p><a className='text-black text-sm md:text-base' href='/'>Register Now</a></div>
        </div>
      </div>
    </div>
  )
}

export default Login
