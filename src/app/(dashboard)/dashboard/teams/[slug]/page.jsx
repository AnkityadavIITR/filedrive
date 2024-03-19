"use client";
import Upload from "@/components/dashboard/uploadUserFile";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import userTeamData from "@/context/userTeamData";
import { getTeamData } from "@/axios/api/getTeamData";
import { getFromLocalStorage } from "@/lib/utils";
import { toast } from "@/components/ui/use-toast";

function Data({ params }) {
  // const [data, setData] = useState([]);
  const router = useRouter();
  // console.log(params);
  const { teamData, setTeamData } = userTeamData();
  const token=getFromLocalStorage("token") || "";
  useEffect(() => {
    async function getData(){
      try{
        const response= await getTeamData(params.slug,setTeamData);
        if(response){
          toast({
            title:"success",
            message:"teams data "
          })
        }
      }catch(e){
        console.log(e);
      }
    }
    if(token){
      console.log("getting");
      getData();
    }
  }, []);

  return (
    <div className="flex mt-[60px]">
      <Upload  />
    </div>
  );
}
export default Data;
