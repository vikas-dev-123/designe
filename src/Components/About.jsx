import React from 'react'

const About = () => {
  return (
    <div className='w-full p-20  bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black '>
      <h1 className='font-["Matter"] leading-[3.5vw] tracking-tight text-[4.5vw]'>
          Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts,
         ex­plain com­plex ideas, and hire great peo­ple.
      </h1>
       <div className='w-full border-t-[1px] pt-8 flex gap-5 border-[#a1b562] mt-10'>
        <div className='w-1/2'>
          <h1 className='text-6xl'>Our approach:</h1>
          <button className='px-8 flex gap-8 items-center py-4 bg-zinc-900 mt-10 rounded-full text-white'>Read More
            <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
          </button>
        </div>
        <div className='w-1/2 h-[70vh] bg-[#798b37] object-cover overflow-hidden bg-[url("https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg")] rounded-3xl'>
        </div>
       </div>
    </div>
  )
}

export default About
