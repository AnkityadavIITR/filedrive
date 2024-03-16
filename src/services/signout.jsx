import { removeFromLocalStorage } from "@/lib/utils";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";

export async function SignOut(router){
    try{
        const response=await signOut(auth);
        removeFromLocalStorage("token");
        router.replace("/")
    }catch(e){
        console.log(e)
    }

}