"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Headers = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div>
        <header className=' py-8 text-[20px] font-bold mx-4 md:mx-16 lg:mx-82'>
                <div className='flex flex-row justify-between items-center'>
                    <div>
                     <h2 className='font-bold  text-2xl md:text-[30px]  text-start'> Hi,Nitin here</h2>
                    </div>

                    {/* Desktop Navigation */}
                    <div className='hidden md:block  md:text-[20px] '>
                        <nav className='flex flex-row cursor-pointer '>
                            <Link href="/me" className='px-3  transition-colors hover:-translate-y-1 transition-transform'>Home</Link>

                            <Link target="_blank" rel="noopener noreferrer" href="https://github.com/areyyynitin/" > <p className='px-3 cursor-pointer  hover:-translate-y-1 transition-transform'>Github</p> </Link>


                            <Link href="/contact" className='px-3   hover:-translate-y-1 transition-transform'>Contact</Link>
                            <Link href="/blog" className='px-3   hover:-translate-y-1 transition-transform'>Blog</Link>
                        </nav>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className='md:hidden'>
                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className='p-2'
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className='md:hidden  '>
                        <nav className='flex flex-col space-y-2'>
                            <Link 
                                href="/me" 
                                className='py-2 px-3 hover:bg-gray-100 rounded transition-colors'
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </Link>
                            <Link 
                                target="_blank" rel="noopener noreferrer" href="https://github.com/areyyynitin/"
                                className='py-2 px-3 hover:bg-gray-100 rounded transition-colors'
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Github
                            </Link>
                              <Link 
                                href="/contact" 
                                className='py-2 px-3 hover:bg-gray-100 rounded transition-colors'
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact
                            </Link>
                            <Link 
                                href="/blog" 
                                className='py-2 px-3 hover:bg-gray-100 rounded transition-colors'
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Blog
                            </Link>
                        </nav>
                    </div>
                )}
            </header>
    </div>
  )
}

export default Headers
