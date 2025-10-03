import React from 'react'
import { CometCard } from '../ui/comet-card'
import Link from 'next/link'
import Image from 'next/image'


const Projects = () => {
  return (
    <div className='font-sans mx-4 md:mx-16 lg:mx-82 text-lg md:text-[20px]'>
   
   <div className='text-center'>
     <h2 className='font-bold font-kode-mono text-2xl md:text-[30px] pt-10 text-start'>Projects</h2>
     <p className='text-base md:text-lg text-start'>Before the real job, I was busy making websites… some worked,</p>
     <p className=' text-2xl font-kode-mono text-start'>some just looked cool.</p>
   </div>

<div className='flex flex-col items-start justify-between gap-6 '> 

{/* First Project */}
<div className='flex flex-col lg:flex-row justify-between gap-6 w-full'>   
  <div className='w-full lg:w-auto'> 
 <CometCard>
      <button
        type="button"
        className="my-6 md:my-10 flex w-full max-w-80 mx-auto lg:mx-0 lg:w-80 cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2 saturate-0 lg:my-20 md:p-4"
        aria-label="View Code Network project"
        style={{
          transformStyle: "preserve-3d",
          transform: "none",
          opacity: 1,
        }}
      > 

     <Link target="_blank" rel="noopener noreferrer" href="https://code-network-two.vercel.app/" className="underline ml-2 flex flex-row"> 
        <div className="mx-2 flex-1">
          <div className="relative mt-2 aspect-[3/4] w-full">
            <img
              loading="lazy"
              className="absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] object-cover contrast-75"
              alt="Code Network project"
              src="https://images.unsplash.com/photo-1505506874110-6a7a69069a08?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              style={{
                boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                opacity: 1,
              }}  
            />
          </div>
        </div>
        </Link>

        <div className="mt-2 flex flex-shrink-0 items-center justify-between p-4 font-mono text-white">
          <div className="text-xs">Code Network</div>
          <div className="text-xs text-gray-300 opacity-50">May,2025</div>
        </div>
       
      </button>
     
    </CometCard>
 </div> 

 <div className="lg:pl-10 lg:pt-20 mt-4 lg:mt-0 flex-1">
      <Image  src="svg/quotation-marks.svg" alt='"' height={40} width={40} className='mb-4'/>
      <p className='text-sm md:text-base leading-relaxed'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quasi repellat modi dolore non tenetur. Optio dolorem quibusdam quis laudantium qui deleniti dolore harum fuga dicta id nemo eaque itaque exercitationem rem, architecto ab dolorum nesciunt officiis accusamus ducimus? Pariatur eligendi esse aliquid sapiente praesentium quod, maiores reprehenderit fuga dolores omnis numquam obcaecati inventore earum repellat, enim laborum tenetur eaque?
      </p>
 </div>
  </div>

{/* Second Project */}
<div className='flex flex-col lg:flex-row justify-between gap-6 w-full mt-8'>   
  <div className='w-full lg:w-auto'> 
 <CometCard>
      <button
        type="button"
        className="my-6 md:my-10 flex w-full max-w-80 mx-auto lg:mx-0 lg:w-80 cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2 saturate-0 lg:my-20 md:p-4"
        aria-label="View Open Note project"
        style={{
          transformStyle: "preserve-3d",
          transform: "none",
          opacity: 1,
        }}
      > 

     <Link target="_blank" rel="noopener noreferrer" href="https://code-network-two.vercel.app/" className="underline ml-2 flex flex-row"> 
        <div className="mx-2 flex-1">
          <div className="relative mt-2 aspect-[3/4] w-full">
            <img
              loading="lazy"
              className="absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] object-cover contrast-75"
              alt="Open Note project"
              src="https://images.unsplash.com/photo-1505506874110-6a7a69069a08?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              style={{
                boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                opacity: 1,
              }}  
            />
          </div>
        </div>
        </Link>

        <div className="mt-2 flex flex-shrink-0 items-center justify-between p-4 font-mono text-white">
          <div className="text-xs">Open Note</div>
          <div className="text-xs text-gray-300 opacity-50">July,2025</div>
        </div>
       
      </button>
     
    </CometCard>
 </div> 

 <div className="lg:pl-10 lg:pt-20 mt-4 lg:mt-0 flex-1">
      <p className='text-sm md:text-base leading-relaxed'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quasi repellat modi dolore non tenetur. Optio dolorem quibusdam quis laudantium qui deleniti dolore harum fuga dicta id nemo eaque itaque exercitationem rem, architecto ab dolorum nesciunt officiis accusamus ducimus? Pariatur eligendi esse aliquid sapiente praesentium quod, maiores reprehenderit fuga dolores omnis numquam obcaecati inventore earum repellat, enim laborum tenetur eaque?
      </p>
    <div className='flex flex-row justify-end'>  <Image  src="svg/Quatation-close.svg" alt='"' height={40} width={40} className='' />  </div>
 </div>
  </div>

   </div>
    </div>
  )
}

export default Projects
