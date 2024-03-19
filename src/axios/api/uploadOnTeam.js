import axios from "axios";
import { getFromLocalStorage } from "@/lib/utils";
export async function uploadDataOnTeams(){
    try{
        const {data}=await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URI}/user/teams/upload/${teamId}`,{
            headers:{
                Authorization:`Bearer `+getFromLocalStorage("token")
            },timeout:50000,
        });
        console.log(data);
        if(data.success){
            setTeamData(prev=>[...prev,data.files])
            return true
        }else{
            return false
        }

    }catch(e){
        console.log(e);
        return false
    }
}