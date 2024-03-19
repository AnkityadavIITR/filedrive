"use client"
import Image from "next/image";
import Hero from "../../components/Home/hero";
import Navbar from "../../components/Home/navbar";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../config/firebase";
import { useEffect, useState } from "react";
import { getFromLocalStorage } from "@/lib/utils";
import { useRouter } from "next/navigation";

export default function Home() {
  const router=useRouter();
  const token=getFromLocalStorage("token")
  const saved=getFromLocalStorage("isUserSaved")
  useEffect(()=>{
    if(getFromLocalStorage("token")){
      router.push("/dashboard")
    }
  },[token, saved])
  return (
    <main className="flex min-h-screen flex-col ">
      <Navbar/>
      <Hero/>
    </main>
  );
}
