import React from 'react'
import { CometCard } from '../ui/comet-card'
import Link from 'next/link'
import Image from 'next/image'

const Projects = () => {
  return (
    <div className='mx-4 md:mx-16 lg:mx-82 text-lg md:text-xl'>
      <div className='text-start mb-8'>
        <h2 className='font-bold  text-2xl md:text-3xl pt-10'>Projects</h2>
        <p className='text-base md:text-lg mt-2'>
          Before the real job, I was busy making websites… some worked, some just looked cool.
        </p>
      </div>

      <div className='flex flex-col gap-12 md:gap-16'>
        {/* First Project */}
        <div className='flex flex-col lg:flex-row items-center gap-8 lg:gap-12'>
          <div className='w-full max-w-sm lg:w-80 flex-shrink-0'>
            <CometCard>
              <Link 
                target="_blank" 
                rel="noopener noreferrer" 
                href="https://code-network-two.vercel.app/"
                className="block"
              >
                <div className="rounded-2xl border-0 bg-[#1F2121] p-3 md:p-4 transition-transform hover:scale-[1.02]">
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl">
                    <Image
                      className="object-cover contrast-75"
                      alt="Code Network project"
                      src="/svg/codeNetwork.png"
                      fill
                      sizes="(max-width: 768px) 100vw, 320px"
                    />
                  </div>
                  <div className="mt-3 flex items-center justify-between text-white px-1">
                    <div className="text-sm">Code Network</div>
                    <div className="text-sm text-gray-400">May, 2025</div>
                  </div>
                </div>
              </Link>
            </CometCard>
          </div>

          <div className="flex-1 flex flex-col justify-center">
            <Image 
              src="/svg/quotation-marks.svg" 
              alt="Quote" 
              height={40} 
              width={40} 
              className='mb-4'
            />
            <p className='text-sm md:text-base leading-relaxed'>
              <span className='font-bold text-xl md:text-2xl  block mb-2'>
                Code Network
              </span>
              is an interactive web platform designed for coding interviews. It allows candidates to take interviews and interviewers to conduct them seamlessly. The platform features a real-time video calling system for live communication and an in-built code editor where candidates can write, run, and test their code during the interview. By combining live interaction with hands-on coding, Code Network provides a smooth and professional environment for technical assessments.
            </p>
          </div>
        </div>

        {/* Second Project */}
        <div className='flex flex-col lg:flex-row items-center gap-8 lg:gap-12'>
          <div className='w-full max-w-sm lg:w-80 flex-shrink-0'>
            <CometCard>
              <Link 
                target="_blank" 
                rel="noopener noreferrer" 
                href="https://open-note-frontend.onrender.com/"
                className="block"
              >
                <div className="rounded-2xl border-0 bg-[#1F2121] p-3 md:p-4 transition-transform hover:scale-[1.02]">
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl">
                    <Image
                      className="object-cover contrast-75"
                      alt="Open Note project"
                      src="/svg/openNote.png"
                      fill
                      sizes="(max-width: 768px) 100vw, 320px"
                    />
                  </div>
                  <div className="mt-3 flex items-center justify-between text-white px-1">
                    <div className="text-sm">Open Note</div>
                    <div className="text-sm text-gray-400">July, 2025</div>
                  </div>
                </div>
              </Link>
            </CometCard>
          </div>

          <div className="flex-1 flex flex-col justify-center">
            <p className='text-sm md:text-base leading-relaxed'>
              <span className='font-bold text-xl md:text-2xl block mb-2'>
                Open Note
              </span>
              is a web app that lets users save and organize posts, articles, or videos they want to revisit later. It provides a clean and simple interface to quickly add, view, and manage notes, making it easy to keep track of important content without losing it in bookmarks or feeds.
            </p>
            <div className='flex justify-end mt-4'>
              <Image 
                src="/svg/Quatation-close.svg" 
                alt="Quote" 
                height={40} 
                width={40}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects