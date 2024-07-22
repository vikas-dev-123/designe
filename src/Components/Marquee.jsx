import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {
  
  return (
    
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-20 rounded-tl-3xl rounded-tr-3xl  bg-[#004D43] '>
      <div className='text border-t-2 border-b-2 flex border-zinc-300  overflow-hidden whitespace-nowrap'>
        <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{repeat:Infinity, ease: "linear", duration:10}}  className='text-[22vw] leading-none  font-["Matter"] pr-10 uppercase -mb-[1.9vw] pt-1 font-semibold'>we are ochi</motion.h1>
        <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{repeat:Infinity, ease: "linear", duration:10}} className='text-[22vw] leading-none  font-["Matter"] pr-10  uppercase -mb-[1.9vw] pt-1 font-semibold'>we are ochi</motion.h1>
      </div>
    </div>
  )
}

export default Marquee
