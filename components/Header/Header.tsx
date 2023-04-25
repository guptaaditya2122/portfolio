import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion"
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid'
import { Social } from '@/typing';

type Props = {
    socials:Social[]
}

export default function Header({socials }: Props) {
    return (
        <header className='sticky top-0 p-3 flex items-start justify-between max-w-7xl mx-auto z-20
        xl:items-center'>
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1
                }}
                className='flex flex-row items-center'>
                {socials.map((social)=>(
                    <SocialIcon
                    key={social._id}
                    url={social.url}
                    fgColor="gray"
                    bgColor='transparent' />
                ))}
            </motion.div>
            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1
                }}
                className='flex flex-row items-center text-gray-300 cursor-pointer'>
                <button >
                    <a className="button" href="/assets/Aditya Gupta_a_Resume.pdf" download="Aditya_Gupta_Resume.pdf">
                        <ArrowDownTrayIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse' />
                    </a>

                </button>
                <span className='uppercase hidden md:inline-flex text-sm text-gray-400 ml-1' >RESUME</span>
                <SocialIcon
                    url='#contact'
                    className='cursor-pointer'
                    network='email'
                    fgColor='gray'
                    bgColor='transparent'
                />

                <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get in touch</p>


            </motion.div>
        </header >
    )
}

