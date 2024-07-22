import React from 'react'

const Cards = () => {
  return (
    <div  className='w-full h-screen bg-zinc-900 flex items-center px-32 gap-5'>
      <div className='cardcontainer h-[50vh] w-1/2 '>
      <div className=' card relative w-full flex items-center justify-center rounded-xl h-full bg-[#004D43]'>
        <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
        <button className='absolute px-8 py-1 rounded-full border-2 left-10 bottom-10'>&copy; 2024-2028</button>
      </div>
      </div>
      <div className='cardcontainer flex gap-5 h-[50vh] w-1/2 '>
      <div className=' card relative w-1/2 h-full flex items-center justify-center rounded-xl bg-[#042521]'>
      <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
        <button className='absolute px-8 py-1 rounded-full border-2 left-10 bottom-10'>&copy; 2024-2028</button></div>
      <div className=' card w-1/2 relative flex items-center justify-center rounded-xl h-full bg-[#042521]'>
      <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
        <button className='absolute px-8 py-1 rounded-full border-2 left-10 bottom-10'>&copy; 2024-2028</button></div>
      
      </div>

    </div>
  )
}

export default Cards
