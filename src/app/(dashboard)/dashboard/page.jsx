"use client"
import React, { useState } from 'react'
import Upload from '@/components/dashboard/upload'
import Sidebar from '@/components/dashboard/sidebar'
import { useEffect } from 'react'
import useAuth from '@/context/useAuth'
import { getUserData } from '@/axios/api/getUserData'
import { useToast } from '@/components/ui/use-toast'
import { getFromLocalStorage } from '@/lib/utils'
const page = () => {
  const {currentUserData,setCurrentUserData}=useAuth();
  const [loading,setLoading]=useState(true);
  const isUserSave=getFromLocalStorage("isSavedUser") || false;
  const toast=useToast();

  useEffect(()=>{
    async function getUserDetail(){
      try{
        const response=await getUserData(setCurrentUserData,setLoading);
        if(!response){
          toast({
            title: "error",
            message:"can't get detail"
          })
        }
      }catch(e){
        toast({
          title:"Internal error"
        })
      }
    }
    console.log("check",isUserSave);

    if(currentUserData==null && isUserSave ){
      getUserDetail();
    }

  },[setCurrentUserData,currentUserData])

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
