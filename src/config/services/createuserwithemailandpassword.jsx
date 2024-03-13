import {  createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import toast from "react-hot-toast";

export const createUserWithEmail=async({email,password,setLoading,toaster})=>{

    try{
        const response=await createUserWithEmailAndPassword(auth,email,password);
        setLoading(false);
        toast

    }catch(e){
        const errorCode = e.code;
        const errorMessage = e.message;
    }
}