import About from '@/components/About/About'
import Contact from '@/components/Contact/Contact'
import WorkExperience from '@/components/Experience/WorkExperience'
import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'
import Projects from '@/components/Projects/Projects'
import Skills from '@/components/Skills/Skills'
import Head from 'next/head'
import Link from 'next/link'
import { HomeIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react'

type Props ={}

export default function Home({}:Props) {
  const [items,setItem] = useState({
    about:{
      backgroundInformation: '',
      email: '',
      role: '',
      heroImage: '',
      aboutImage:'',
      name: '',
      phoneNumber: '',
      socials: []
    },
    experiences:[],
    skills:[],
    projects:[],
    socials:[]
  });

useEffect(()=>{
  fetch('data.json').then(res=> res.json()).then(data=>setItem(data));
},[])

  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory 
    overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80'>
      <Head>
        <title>Aditya Gupta - Portfolio</title>
      </Head>

      <Header socials={items.socials} />

      <section id="hero" className='snap-start'>
        <Hero pageInfo={items.about}/>
      </section>

      <section id="about" className='snap-center '>
        <About pageInfo={items.about}/>
      </section>

      <section id="experience" className='snap-center'>
        <WorkExperience experiences={items.experiences}/>
      </section>

      <section id="skills" className='snap-start'>
        <Skills skills={items?.skills}/>
      </section>

      <section id="projects" className='snap-start'>
      <Projects projects={items?.projects}/>
      </section>

      <section id="contact" className='snap-start'>
        <Contact/>
      </section>

      <Link href='#hero'>
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center ml-3'>
          <HomeIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse' />
          </div>
        </footer>
      </Link>
    </div>
  )
}
