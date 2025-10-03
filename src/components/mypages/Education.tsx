import { ArrowRight, Mail } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Education = () => {
    return (
        <div className='font-sans mx-4 md:mx-16 lg:mx-82 text-lg md:text-[20px]'>
             <h2 className='font-bold font-kode-mono text-2xl md:text-[30px] pt-15 text-start'>Education </h2>
            <div className=''>
                <div className='flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-0'>
                    <div className='flex-1'>
                        <p className='font-bold text-base md:text-lg'>Tilak Maharashtra Vidyapeeth University</p>
                        <p className='font-medium text-sm md:text-base'>Bachelor of Computer Applications</p>
                    </div>
                    <div className='sm:flex-shrink-0'>
                        <p className='text-gray-700 text-sm md:text-base'>2022 - 2025</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education
