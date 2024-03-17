"use client"
import React, { useState } from 'react'
import Upload from '@/components/dashboard/upload'
import Sidebar from '@/components/dashboard/sidebar'
import { useEffect } from 'react'
const page = () => {
  const [url,setUrl]=useState("/userData");
  useEffect(()=>{
    
  })
  const dummyArray = [
    { title: "Example 1", url: "https://www.example1.com" },
    { title: "Example 2", url: "https://www.example2.com" },
    { title: "Example 3", url: "https://www.example3.com" },
    { title: "Example 4", url: "https://www.example4.com" },
    { title: "Example 5", url: "https://www.example5.com" }
  ];
  return (
    <div className='flex mt-[60px]'>
      <Upload data={dummyArray}/>
    </div>
  )
}

export default page
