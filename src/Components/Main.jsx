import React from 'react'
import image from '../Assets/imm.png'

const Main = () => {
  return (
    <div>
     
      <div className="container mx-auto max-w-[1200px] grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 py-5 gap-4 ">
        <div className=" mx-auto sm:text-center md:text-left my-5 ">
          <h1 className='text-6xl font-bold py-5'>Quiz: Discover<br />wisdom in bites.</h1>
          <p className='text-2xl font-regular'>Unlock knowledge one question at a time  <br />
          with the power of quizzes</p>
          <div className='grid lg:grid-cols-2 gap-3 my-10 max-w-[400px]'>
            <button className=" py-3 text-left px-4 bg-orange-400 text-white border-solid  rounded-xl shadow-xl sm:my-2 md:my-1"><span>Test</span><br />Your Knowledge </button>
            <button className=" py-3 bg-slate-100 py-3 text-left px-4  border-solid rounded-xl shadow-lg sm:my-2 md:my-1"><span>Choose</span><br />from below</button>
          </div>
        </div>
        <div className="flex justify-left items-center flex justify-center">
          <img  className="w-[400px]" src={image} alt="" srcset="" />
        </div>
      </div>
    </div>
  )
}

export default Main
