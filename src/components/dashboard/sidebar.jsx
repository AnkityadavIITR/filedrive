"use client";
import React, { useState } from "react";
import useAuth from "@/context/useAuth";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
const Sidebar = () => {
  const router = useRouter();
  const options = [
    {
      title: "Your data",
      link: "/dashboard",
    },
    {
      title: "delted files",
      link: "/dashboard/deleted",
    },
  ];
  const [click,setClick]=useState("")
  return (
    <div className="w-[16vw] min-h-screen px-4 border-r fixed">
      <div className="items-center mt-[100px]">
        <div className="flex w-full flex-col gap-4 ">
          {options?.map((data) => {
            return (
              <Button className="" variant={click ===data.title ? "outline" : ""} onClick={()=>{
                setClick(data.title)
                router.push(data.link)}
              }>
                {data.title}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
