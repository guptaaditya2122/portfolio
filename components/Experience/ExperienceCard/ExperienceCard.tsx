import Image from 'next/image'
import { motion } from "framer-motion"
import React from 'react'
import { Experience } from '@/typing'

type Props = {
  experience:Experience
}

export default function ExperienceCard({experience}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 mt-24
    w-[500px] md:mt-48 md:w-[600px] xl:mt-44 xl:w-[1024px] snap-center bg-[#292929] p-5 md:p-6 hover:opacity-100
    opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <div className='flex justify-center'>
          <motion.div
          initial={{
              y: -100,
              opacity: 0
            }}
            transition={{duration: 1.2}}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
          <Image
              src={experience.companyImage}
              alt=""
              className="w-24 h-24 mt-3 md:w-28 md:h-28 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center"
              width={100}
              height={100}
              priority
              />
          </motion.div>
          <motion.div
          initial={{
            y: -100,
            opacity: 0
          }}
          transition={{duration: 1.2}}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
           className='ml-20 mt-2'>
            <h4 className='text-2xl md:text-3xl font-light'>{experience.title}</h4>
            <p className='font-bold text-2xl mt-1'>{experience.company}</p>
            <div className='flex space-x-2 my-2'> 
            {experience.technologies.map((technology)=>(
              <Image
              key={technology._id}
              src={technology.skill.image}
              alt=""
              className="w-10 h-10 rounded-full"
              width={100}
              height={100}
              priority
              />
            ))}
            
            </div>
          </motion.div>
        </div>
        <div className='px-0 md:px-10 mt-3'>
            <p className='uppercase py-4 text-gray-300'>
              {`${experience.startedWork} -${experience.endedWork}`}
            </p>
            <div className='overflow-y-scroll h-24 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80'>
            <ul className='list-disc space-y-2 ml-5 text-lg'>
              {experience.points.map((point,i)=>(
                <li key={i}>{point}</li>
              ))}
                </ul>
            </div>
        </div>
    </article>
  )
}