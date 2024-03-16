"use client"
import React from 'react'
import Upload from '@/components/dashboard/upload'
import Sidebar from '@/components/dashboard/sidebar'
const page = () => {
  
  return (
    <div className='flex mt-[60px]'>
      <Sidebar/>
      <Upload/>
    </div>
  )
}

export default page
