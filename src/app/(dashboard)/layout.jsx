"use client";
import { useEffect, useState } from "react";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setLocalStorage,
} from "@/lib/utils";
import { useRouter } from "next/navigation";
import useAuth from "@/context/useAuth";
import { SaveUser } from "@/axios/api/saveUser";
import Sidebar from "@/components/dashboard/sidebar";
import Navbar from "@/components/dashboard/navbar";
// import { getUserData } from "@/axios/api/getUserData";
import { useToast } from "@/components/ui/use-toast";
import { getTeams } from "@/axios/api/getUserTeam";
import useTeam from "@/context/useTeam";


export default function RootLayout({ children }) {
  const router = useRouter();
  const {currentUser}=useAuth();
  const {userTeam,setUserTeam}=useTeam();  
  const isUserSave=getFromLocalStorage("isUserSaved") || false;
  const {toast}=useToast();
  const [loadingAuth, setLoadingAuth] = useState(true);
  const token = getFromLocalStorage("token");
  const saved = getFromLocalStorage("isUserSaved") || false;

  useEffect(() => {
    if (!getFromLocalStorage("token")) router.replace("/");
  }, []);

  useEffect(() => {
    if (
      currentUser &&
      currentUser?.metadata?.creationTime ===
        currentUser?.metadata?.lastSignInTime &&
      !saved
    ) {
      console.log("yes", currentUser);
      const userObj = {
        name: currentUser?.displayName,
        email: currentUser?.email,
        photo: currentUser?.photoURL,
        emailVerified:currentUser?.emailVerified
      };
      async function SaveUserDb() {
        try {
          const { data } = await SaveUser(userObj);
          if (data.success) setLocalStorage("isUserSaved", true);
        } catch (e) {
          console.log(e);
        }
      }
      SaveUserDb();
    }
  }, [currentUser, saved, SaveUser]);

  useEffect(()=>{
    if(currentUser && currentUser?.metadata?.creationTime!=currentUser?.metadata?.lastSignInTime){
      setLocalStorage("isUserSaved", true);
    }
  },[currentUser,saved])

  useEffect(()=>{
    if(currentUser && saved){
      async function getUserTeam(){
        try{
          const response =await getTeams(setUserTeam);
          console.log("teams",response)
          console.log(userTeam);
          if(!response){
            console.log("error");
          }
        }catch(e){
          console.log(e);
        }
      }
      getUserTeam();
    }
  },[currentUser,saved])


  useEffect(() => {
    if (!currentUser && !loadingAuth && getFromLocalStorage("token")) {
      removeFromLocalStorage("token");
      router.replace("/");
    }
  }, [currentUser, loadingAuth]);

  useEffect(() => {
    if (currentUser) {
      setLoadingAuth(false); 
    }
  }, [currentUser, loadingAuth]);

  return (
    <main className="w-full h-full">
      <Navbar/>
      <div className="w-full">
        <Sidebar/>
        {children}
      </div>
    </main>
  );
}
