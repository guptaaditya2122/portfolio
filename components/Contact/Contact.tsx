import React from 'react'
import { PhoneIcon, MapIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from 'react-hook-form';

type Props = {}

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,

  };

export default function Contact({ }: Props) {
    const { register, handleSubmit,reset } = useForm<Inputs>({
        defaultValues:{
            name: '',
            email: '',
            subject: '',
            message: '',
        }
    });
    const onFormSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href =`mailto:guptaaditya2122@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${
            formData.email })`;
        reset({
            name: '',
            email: '',
            subject: '',
            message: '',
        })
        
    };


    return (
        <div className='h-screen relative flex  flex-col text-center md:text-left md:flex-row max-w-7xl
    justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Contact Me</h3>
            <div className='relative flex flex-col space-y-8 mt-40 md:mt-32'>
                <h4 className='text-xl font-semibold text-center'>
                    I have got just what you need.{" "}
                    <span className=' decoration-[#f7ab0a]/50 underline'>Lets Talk</span>

                </h4>
                <div className='space-y-1 md:flex   md:flex-col  xl:flex xl:justify-center'>
                    <div className='flex items-center space-x-5 justify-center'>
                        <PhoneIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>+919039292842</p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <EnvelopeIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse' />
                        <p className='text-2xl relative mb-2'>gupta08aditya1996@gmail.com</p>
                    </div>
                   
                </div>
                <form onSubmit={handleSubmit(onFormSubmit)} className='flex flex-col space-y-1 w-fit mx-auto '>
                    <div className='flex space-x-1'>
                        <input type="text" {...register('name')} placeholder='Name' className='contactInput p-3' />
                        <input type="email" {...register('email')} placeholder='Email' className='contactInput p-3' />

                    </div>
                    <input type="text" {...register('subject')} placeholder='Subject' className='contactInput p-3' />
                    <textarea {...register('message')} placeholder='Message' id="" className='contactInput p-3'></textarea>
                    <button type='submit' className='bg-[#f7ab0a]  p-3 rounded-md text-black font-bold '>Submit</button>
                </form>
            </div>
        </div>
    )
}