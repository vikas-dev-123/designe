import { motion, useAnimation, } from 'framer-motion'
import React, { useState } from 'react'

const Featured = () => {
  const cards = [useAnimation(), useAnimation()]

 const handelHover= (index) =>{
      cards[index].start({y: "0"})
 }
 const handleHoverEnd= (index) =>{
  cards[index].start({y: "100%"})
}


   
  return (
    
    <div className='w-full py-20  '>
       <div className='w-full px-20 border-b-[1px] pb-10 border-zinc-700'>
        <h1 className='text-6xl font-[Matter] tracking-tight'>Featured projects</h1>
       </div>
       <div className='px-20    '>
        <div className='cards w-full mt-10 flex gap-5 '>
             
            <motion.div 
            onHoverStart={()=>handelHover(0)}
            onHoverEnd={()=> handleHoverEnd(0)}
            className='cardcontainer relative w-1/2 h-[75vh]  '>
              
            <h1 className='absolute flex overflow-hidden left-full text-[#CDEA68] -translate-x-1/2 top-1/2 -translate-y-1/2     z-[9] text-7xl font-[Matter] font-semibold leading-none tracking-tight'> 
            {"FYDE".split('').map((items, index)=>
         <motion.span initial={{y:"100%"}} animate={cards[0]}
         transition={{ease: [0.22, 1, 0.36, 1], delay:index*.05}}
         className='inline-block' >{items}</motion.span>
    
    )}
             </h1>
             
            <div className='card flex overflow-hidden w-full h-full rounded-xl '>
                <img className='w-full h-full bg-cover ' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
            </div>
            </motion.div>
            <motion.div
             onHoverStart={()=>handelHover(1)}
             onHoverEnd={()=> handleHoverEnd(1)}
            className='cardcontainer relative w-1/2 h-[75vh]   '>
            
            <h1 className='absolute flex right-full overflow-hidden translate-x-1/2 top-1/2 -translate-y-1/2  text-[#CDEA68]  z-[9] text-7xl font-[Matter] font-semibold leading-none tracking-tight'> 
            {"VISE".split('').map((items, index)=>
    <motion.span initial={{y:"100%"}} animate={cards[1]}
    transition={{ease: [0.22, 1, 0.36, 1], delay:index*.05}}
    className='inline-block' >{items}</motion.span>
    )}
             </h1>
            
            <div className='card w-full h-full rounded-xl   overflow-hidden '>
                <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
            </div>
            
            </motion.div>
       </div>

        </div>
    </div>
  )
}

export default Featured




