import axios from "axios"
import { getFromLocalStorage } from "@/lib/utils";
export const CreateTeam=async(teamName,setUserTeam)=>{
    try{
        const {data}=await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URI}/user/teams/create`,{teamName:teamName},{
            headers:{
                Authorization:`Bearer `+getFromLocalStorage("token")
            },timeout:50000,
        });
        if(data.success){
            setUserTeam(prev=>[...prev,data.team]);
            return true
        }else{
            return false
        }
    }catch(e){
        console.log(e);
        return false
    }
}