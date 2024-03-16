import {  createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { boolean } from "yup";

export const createUserWithEmail=async({email,password,setLoading})=>{
    try{
        const response=await createUserWithEmailAndPassword(auth,email,password);
        console.log(response);
        setLoading(false);
        return true;  
    }catch(e){
        const errorCode = e.code;
        const errorMessage = e.message;
        return false;
    }
}