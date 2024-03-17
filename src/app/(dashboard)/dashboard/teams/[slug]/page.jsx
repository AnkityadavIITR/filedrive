"use client";
import Upload from "@/components/dashboard/upload";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function Data({params}) {
    const [data,setData]=useState([]);
    const router=useRouter();
    // console.log(params.slug);
    
  return (
    <div className="flex mt-[60px]">
      <Upload/>
    </div>
  );
}
export default Data;
