import { auth } from "@/config/firebase";
import { setLocalStorage } from "@/lib/utils";
import { signInWithEmailAndPassword } from "firebase/auth";

export async function signInWithEmail(email,password,setLoading){
    try{
        const response=await signInWithEmailAndPassword(auth,email,password);
        const {user}=response;
        setLocalStorage("token",user.accessToken);
        setLoading(false);
        return true;
    }catch(e){
        console.log(e);
        return false;
    }
}