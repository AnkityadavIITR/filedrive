import { getFromLocalStorage, setLocalStorage } from "@/lib/utils";
import axios from "axios";

export const SaveUser=async(userdb)=>{
    console.log(userdb);
    try{
        const response=await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URI}/user/register`,userdb,{
            headers:{
                Authorization:`Bearer `+getFromLocalStorage("token")
            },timeout:50000,
            
        });
        console.log(response);
        return response;
    }catch(e){
        console.log(e);
        return e;
    }
}