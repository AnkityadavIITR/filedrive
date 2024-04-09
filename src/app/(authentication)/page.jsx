"use client"
import Hero from "../../components/Home/hero";
import Navbar from "../../components/Home/navbar";
import { useEffect } from "react";
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
  },[token, saved,router])
  return (
    <main className="flex min-h-screen flex-col bg-gra ">
      <Navbar/>
      <Hero/>
    </main>
  );
}
