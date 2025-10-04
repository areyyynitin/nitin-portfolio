"use client"
import React from 'react'
import { TypewriterEffect } from '../ui/typewriter-effect';

const LandingPage = () => {
    const words = [
    {
      text: "Idea ",
    },
    {
      text: "recieved, ",
    },
    {
      text: "code ",
    },
    {
      text: "deployed ",
    },
  ];
    return (
        <div>
            <main>
                <div className=' mx-4 md:mx-16 lg:mx-82  text-lg md:text-[20px]'>
                    <div>
                        <h2 className='font-bold  text-2xl md:text-[30px]  text-start'>About me </h2>
                       <TypewriterEffect words={words} cursorClassName='inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-6 bg-black' className=' text-start ' />
                    
                     
                    </div>
                </div>
            </main>
        </div>
    )
}

export default LandingPage;