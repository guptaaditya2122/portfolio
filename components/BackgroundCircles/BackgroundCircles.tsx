import React from 'react'
import { motion } from "framer-motion"
type Props = {}

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div 
    initial={{
        opacity:0
    }}
    animate={{
        scale:[1,2,2,3,1],
        opacity:[0.1,0.2,0.4,0.8,0.1,1.0],
        // Its giving 1/5 th of transition time toeach array element
        borderRadius:["20%","20%","50%","80%","20%"]
    }}
    transition={{
        duration:2.5
    }}
    className='relative flex justify-center items-center'>
        <div className='absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-64 animate-ping'/>
        <div className='absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-64 
        animate-ping'/>
        <div className='absolute border border-[#333333] rounded-full h-[500px] w-[500px] mt-64
        animate-ping'/>
        <div className='rounded-full border border-[#f7ab0a] opacity-20 h-[535px] w-[535px]
        absolute mt-64 animate-pulse'/>
        <div className='absolute border border-[#333333] rounded-full h-[650px] w-[650px] mt-64'/>

    </motion.div>
  )
}
