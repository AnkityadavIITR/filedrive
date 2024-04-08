import axios from "axios";
import { getFromLocalStorage } from "@/lib/utils";
export async function getTeamData(teamId,setTeamData,setLoading){
    try{
        const {data}=await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URI}/user/teams/${teamId}`,{
            headers:{
                Authorization:`Bearer `+getFromLocalStorage("token")
            },timeout:50000,
        });
        if(data.success){
            console.log(data);
            setTeamData(data.files);
            setLoading(false);
            return true
        }else{
            return false
            setLoading(false);
        }

    }catch(e){
        console.log(e);
        setLoading(false);
        return false
    }
}