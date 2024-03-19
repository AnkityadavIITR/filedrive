import axios from "axios";
import { getFromLocalStorage } from "@/lib/utils";
export async function getTeamData(teamId,setTeamData,setLoading){
    try{
        const {data}=await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URI}/user/teams/${teamId}`,{
            headers:{
                Authorization:`Bearer `+getFromLocalStorage("token")
            },timeout:50000,
        });
        console.log(data);
        if(data.success){
            setTeamData(data.files);
            setLoading(false);
            return true
        }else{
            return false
        }

    }catch(e){
        console.log(e);
        return false
    }
}