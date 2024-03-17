import axiosInstance from "../baseuri";
import useAuth from "@/context/useAuth";
import { getFromLocalStorage } from "@/lib/utils";
import { data } from "autoprefixer";
import axios from "axios";

export const getUserData=async(setCurrentUserData,setLoading)=>{
    try{
        const response=await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URI}/user/data`,{
            headers:{
                Authorization:`Bearer `+getFromLocalStorage("token")
            },timeout:50000,
            
        });
        console.log(response);
        setCurrentUserData(response.data.user);
        return true;
    }catch(e){
        console.log(e);
        return false;
    }
}