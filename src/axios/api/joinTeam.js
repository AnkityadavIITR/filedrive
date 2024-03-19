import axios from "axios"
import { getFromLocalStorage } from "@/lib/utils";
export const JoinTeam=async(shortId,setUserTeam)=>{
    try{
        const {data}=await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URI}/user/teams/join`,{shortId:shortId},{
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