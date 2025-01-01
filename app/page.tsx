import { BottomBar } from '@/components/BottomBar'
import { FloatingDockMenu } from '@/components/FloatingDock'
import HeroSection from '@/components/Hero-Section'
import { MyTimeLine } from '@/components/MyTimeLine'

import React from 'react'

const page = () => {
  return (
   <>
   <div className='bg-black h-screen text-white' >
    <FloatingDockMenu/>
    <HeroSection/>
    <MyTimeLine/>
    <BottomBar/>
   </div>
   </>
  )
}

export default page