import axiosInstance from "../baseuri";
import useAuth from "@/context/useAuth";
import { getFromLocalStorage } from "@/lib/utils";
import axios from "axios";

export const SaveUser=async(userdb)=>{
    console.log(userdb);
    try{
        const response=await axios.post("http://localhost:4000/user/register",userdb,{
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