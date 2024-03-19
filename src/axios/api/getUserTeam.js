import { getFromLocalStorage, setLocalStorage } from "@/lib/utils";
import axios from "axios";

export const getTeams=async(setUserTeam)=>{
    try{
        const {data}=await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URI}/user/teams`,{
            headers:{
                Authorization:`Bearer `+getFromLocalStorage("token")
            },timeout:50000,
            
        });
        console.log(data);
        if(data.success){
            setUserTeam(data.data);
            return true
        }
        return false;
    }catch(e){
        console.log(e);
        return false;
    }
}