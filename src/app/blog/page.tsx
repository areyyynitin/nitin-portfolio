import BlogOne from '@/components/blog/BlogOne'
import Headers from '@/components/mypages/Headers'
import Navbar from '@/components/mypages/Footer'
import React from 'react'

const page = () => {
  return (
    <div>
      <Headers/>
      <BlogOne />
     
      <Navbar />

    </div>
  )
}

export default page
