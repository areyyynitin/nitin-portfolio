import React from 'react'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../ui/hover-card'
import Link from 'next/link'
import { TrendingUp } from 'lucide-react'
const Experience = () => {
    return (
        <div className='font-sans mx-4 md:mx-16 lg:mx-82 text-lg md:text-[20px]'>
           <h2 className='font-bold font-kode-mono text-2xl md:text-[30px] pt-10 text-start'>Work Experience</h2>
            <div className='mt-3'>
                <p>Full Stack Developer at {" "}
                    <HoverCard>
                        <HoverCardTrigger className='underline cursor-pointer'>
                            Optiminastic
                        </HoverCardTrigger>

                        <HoverCardContent className="w-80 max-w-[90vw]">
                            <div className="flex justify-between gap-4">
                                <div className="space-y-1">
                                    <h4 className="font-kode-mono text-sm font-semibold">Marketing agency</h4>
                                    <p className="text-sm leading-relaxed"> 
                                        Optiminastic is a digital marketing agency that blends creativity, technology, and data to help brands grow online. 
                                    </p>
                                    <div className="text-muted-foreground text-xs flex flex-col sm:flex-row justify-between gap-2 sm:gap-0">
                                        <div><p>Joined July 2025</p></div>
                                        <div className='flex flex-row'>  
                                            <Link 
                                                target="_blank"
                                                rel="noopener noreferrer" 
                                                href="https://www.optiminastic.com" 
                                                className="underline ml-0 sm:ml-2 flex flex-row items-center gap-1"
                                            > 
                                                <TrendingUp className='h-4 w-4' /> optiminastic.com
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </HoverCardContent>
                    </HoverCard>
                </p>
            </div>
        </div>
    )
}

export default Experience
