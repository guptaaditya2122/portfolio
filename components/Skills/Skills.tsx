
import { Skills as SkillTypes } from '@/typing';
import { motion } from 'framer-motion'
import React from 'react'
import Skill from './SkillCard/Skill'

type Props = {
  skills:SkillTypes[];
}

export default function Skills({skills}: Props) {
  return (
    <motion.div
    initial={{opacity: 0 }}
    transition={{duration: 1.5 }}
    whileInView={{opacity: 1 }}
    className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px]
    xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>

        <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm mb-44'>
            Hover over a skill current proficiency
        </h3>
        <div className='relative top-24  grid grid-cols-4 xl:grid-cols-5 md:grid-cols-4 gap-4'>
          {skills?.map((skill)=>(
            <Skill key={skill._id} skillType={skill.skill}/>
          ))}
          {/* {skills?.slice(skills.length/2,skills.length).map((skill)=>(
            <Skill key={skill._id} skillType={skill}/>
          ))} */}
           

        </div>
    </motion.div>
  )
}