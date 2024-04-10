import {  createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { setLocalStorage } from "@/lib/utils";

export const createUserWithEmail=async(email,password,setLoading)=>{
    try{
        console.log("making request")
        const response=await createUserWithEmailAndPassword(auth,email,password);
        console.log(response);
        setLocalStorage("token",response.user.accessToken);
        setLoading(false);
        return true;
    }catch(e){
        return false;
    }
}