import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"
import { Skill as SkillType  } from '@/typing';
type Props = {
  skillType:SkillType;
  directionLeft?:boolean
}

export default function Skill({skillType,directionLeft}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.div
        initial={{
          x: directionLeft ? -200 :200,
          opacity: 0
        }}
        transition={{ duration: 1}}
        whileInView={{ x: 0, opacity: 1 }}
      >
        <Image
          src={skillType.image}
          alt=""
          className='rounded-full border border-gray-500 object-cover w-16 h-16 md:h-20 md:w-20 xl:w-22 xl:h-22 filter 
          group-hover:grayscale transition duration-300 ease-in-out'
          width={50}
          height={50}
          priority
        />
      </motion.div>
      <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out
      group-hover:bg-white h-16 w-16 md:h-20 md:w-20 xl:w-22 xl:h-22 rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
            <p className='text-3xl font-bold text-black opacity-100'>{skillType?.progress}</p>
        </div>
      </div>
    </div>
  )
}