
import { Project } from '@/typing'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

type Props = {
  projects:Project[];
}

export default function Projects({projects }: Props) {
  return (
    <motion.div
    initial={{opacity: 0 }}
    transition={{duration: 1.5 }}
    whileInView={{opacity: 1 }}
    className='h-screen relative flex  flex-col text-left md:flex-row max-w-full 
    justify-evenly mx-auto items-center z-0'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>
      <div className='relative  w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 mb-1 md:mb-[16px] 
      scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80'>
        {projects?.map((project, i) => (
          <div key={project._id}
            className="relative top-10 w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center
                p-20 md:p-44 h-screen">
            <motion.div
              initial={{ y:-300,opacity:0}}
              transition={{ duration: 1.2}}
              whileInView={{ y: 0, opacity: 1 }}
            >
            <Image
              src={project?.image}
              className='md:mt-11 h-[172px] md:h-[160px]'
              alt=""
              width={265}
              height={265}
              priority
            />
            </motion.div>
            <div className=' space-y-5 px-0 md:px-10 max-w-6xl'>
              <h4 className='text-2xl md:text-2xl font-semibold text-center'>
                <span className='text-3xl md:text-xl'>Case study {i + 1} of {projects?.length} :</span>{" "} 
                <a className='cursor-pointer underline decoration-[#f7ab0a]/50 text-3xl md:text-xl' href={project?.linkToBuild}>{project?.title}</a>
              </h4>
              <div className='flex items-center space-x-2 justify-center'>
                {project?.technologies?.map((technology)=>(
                  <Image
                  className='rounded-full border border-gray-500 object-cover w-8 h-8'
                  key={technology._id}
                  src={technology.skill.image}
                  alt=""
                  width={50}
                  height={50}
                  priority
                />
                ))}
              </div>
              <p className='text-lg text-justify'>{project?.summary}</p>
            </div>
          </div>
        ))}
      </div>
      <div className=' w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12'>

      </div>
    </motion.div>
  )
}