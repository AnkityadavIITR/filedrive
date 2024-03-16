"use client"
import React from 'react'
import useAuth from '@/context/useAuth'
import { Button } from '../ui/button'

const Sidebar = ({activebtn}) => {
  const options=["Personal Data"," Deleted", "Archived"]
  return (
    <div className='w-[16vw] h-full px-4 border-r fixed'>
        <div className='flex w-full flex-col gap-4 '>
        {
          options?.map((data)=>{
            return <Button className="" variant="outline">{data}</Button>
          })
        }

        </div>

    </div>
  )
}

export default Sidebar;
