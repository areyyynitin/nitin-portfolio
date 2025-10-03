import { ArrowRight, Mail } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import {
  TextRevealCard,
  TextRevealCardTitle,
} from "../ui/text-reveal-card";


const GetInTouch = () => {
  return (
    <div className='font-sans mx-4 md:mx-16 lg:mx-82 text-lg md:text-[20px] pt-6'>

      <div className='pt-6 mt-10 flex flex-row justify-center'>
        <TextRevealCard
          text="You know the business"
          revealText="I know the chemistry "
          className='flex flex-col justify-center w-full max-w-md'
        >
          <TextRevealCardTitle className='font-kode-mono font-bold text-lg md:text-[20px]'>
            Work Together?
          </TextRevealCardTitle>
        </TextRevealCard>
      </div>

      <div className='mt-6 flex flex-col justify-center items-center text-center'> 
        <div>
          <p className='text-base md:text-lg px-4'>Got a project in mind? Let&apos;s build something great.</p>
        </div>

        <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 w-full max-w-xs sm:max-w-none sm:w-auto'>
          <Link 
            href="mailto:np089250@gmail.com" 
            className="bg-black text-white py-2 px-4 rounded-md flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span className="sm:hidden">Email</span>
          </Link>

          <Link 
            href="/contact" 
            className='bg-black text-white py-2 px-4 rounded-md flex flex-row items-center justify-center gap-2 hover:bg-gray-800 transition-colors'
          > 
            Get in touch <ArrowRight className="w-4 h-4" /> 
          </Link>
        </div>
      </div>


    </div>
  )
}

export default GetInTouch
