import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"
import { PageInfo } from '@/typing'
type Props = {
  pageInfo: PageInfo
}

export default function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className='flex flex-col relative text-center h-screen md:text-left 
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>

      <h3 className='absolute top-24 md:top-24 uppercase tracking-[20px] sm:mb-16 text-gray-500 text-2xl'>About</h3>
      <motion.div
        className='md:mt-0 md:mb-20 xl:mt-28'
        initial={{
          x: -200,
          opacity: 0
        }}
        transition={{
          duration: 1.2
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <Image
          src={pageInfo?.aboutImage}
          alt=""
          className='-mb-19 md:mb-0 flex-shrink-0 w-36 h-36 mt-36 object-contain md:object-cover xl:oject-cover 
          rounded-full md:mt-48 md:rounded-lg md:w-[2000px] md:h-[420px] xl:mt-24 xl:w-[1000px] xl:h-[420px]'
          width={100}
          height={100}
          priority
        />
      </motion.div>
      <div className='space-y-8 px-0 md:px-10 md:space-y-10'>
        <h4 className='md:text-4xl font-semibold mt-3 text-3xl md:mt-28'>
          Here is a  <span className='underline decoration-[#f7ab0a]'>little</span> background;
        </h4>
        <p className='text-base text-justify'>
          {pageInfo?.backgroundInformation}
        </p>
      </div>
    </motion.div>
  )
}