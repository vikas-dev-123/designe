import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from 'react-icons/fa6';


const LandingPage = () => {
  
  return (
    <div data-scroll data-scroll-speed="-0.3" className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textstructure mt-40 px-20'>
            {["We create", "eye-opening", "presentations"].map((item, index) => {
              return (  <div className='masker   '>
                <div className='w-fit flex items-end overflow-hidden '>
                    { index === 1 && (
                      <motion.div intial={{width: "0%"}} animate={{width: "9vw"}} transition={{ease:[0.45, 0, 0.55, 1], duration:1}} className=' h-[5vw] rounded-md mr-[1vw] relative -top-[0.1vw] bg-[#004D43]'></motion.div>
                      )} 
                 <h1 className='uppercase text-[7.5vw] leading-[6vw] tracking-tighter font-["Roboto Flex"] font-medium'>
                  {item}
                 </h1>
              </div>
              </div>
              )
            })}
    </div>
         
        <div className='border-t-2 border-zinc-800 mt-28 flex flex-col md:flex-row justify-between items-center py-5 px-20'>
    {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
        <p key={index} className='text-md font-light leading-none'>{item}</p>
    ))}
    <div className='start flex items-center gap-5'> 
    <div className='px-5 py-1 border-[1px] uppercase border-zinc-500 font-light text-md rounded-full mt-4 md:mt-0'>Start the project</div>
    <div className='w-10 h-10 border-[1px] flex items-center   justify-center rounded-full'>
        <span className='rotate-[45deg] '>
          <FaArrowUpLong/>
        </span>
    </div>
    </div>
    </div>     
    </div>
  )
}

export default LandingPage
