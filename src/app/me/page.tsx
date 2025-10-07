import LandingPage from '@/components/mypages/LandingPage'
import React from 'react'
import Skills from '@/components/mypages/Skills'
import Projects from '@/components/mypages/Projects'
import Experience from '@/components/mypages/Experience'
import Shining from '@/components/mypages/Shining'
import GetInTouch from '@/components/mypages/GetInTouch'
import Education from '@/components/mypages/Education'
import Headers from '@/components/mypages/Headers'
import Navbar from '@/components/mypages/Footer'

const FirstPage = () => {
  return (
    <div>
      <Headers />
      <LandingPage />
     
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <GetInTouch />
      <Shining /> 
      <Navbar />
    </div>
  )
}

export default FirstPage
