import { PageInfo } from '@/typing'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from '../BackgroundCircles/BackgroundCircles'

type Props = {
    pageInfo:PageInfo
}

export default function Hero({ pageInfo}: Props) {
    const [text, count] = useTypewriter({
        words: [`Hi, The Name's ${pageInfo?.name}`, "Guy-who-loves-Tea.js", "<ButLovesToCodeMore/>"],
        loop: true,
        delaySpeed: 2000
    })
    return (
        <div className='h-screen flex flex-col space-y-6 items-center justify-center
     text-center overflow-hidden'>
            <BackgroundCircles />
            <Image
                src={pageInfo.heroImage}
                alt=""
                className="relative rounded-full mx-auto object-cover"
                width={100}
                height={100}
                priority
            />
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>{pageInfo?.role}</h2>
                <h1 className='text-3xl lg:text-5xl font-semibold px-10'>
                    <span className='mr-3 text-3xl'>{text}</span>
                    <Cursor cursorColor='#f7ab0a' />
                </h1>
                <div className='pt-5'>
                    <Link href='#about'>
                        <button className='heroButtons'>About</button>
                    </Link>
                    <Link href='#experience'>
                        <button className='heroButtons'>Experience</button>
                    </Link>
                    <Link href='#skills'>
                        <button className='heroButtons'>Skills</button>
                    </Link>
                    <Link href='#projects'>
                        <button className='heroButtons'>Projects</button>
                    </Link>

                </div>
            </div>

        </div>
    )
}
