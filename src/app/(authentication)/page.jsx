"use client"
import Image from "next/image";
import Hero from "../../components/Home/hero";
import Navbar from "../../components/Home/navbar";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../config/firebase";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
      <Navbar/>
      <Hero/>
    </main>
  );
}
