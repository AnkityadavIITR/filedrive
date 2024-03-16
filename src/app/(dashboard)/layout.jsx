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

export default function RootLayout({ children }) {
  const router = useRouter();
  const { currentUser } = useAuth();
  const [loadingAuth, setLoadingAuth] = useState(true);
  const token = getFromLocalStorage("token");
  const saved = getFromLocalStorage("saved") || false;

  // console.log(token);

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
      };
      async function SaveUserDb() {
        try {
          const { data } = await SaveUser(userObj);
          if (data.success) setLocalStorage("saved", true);
        } catch (e) {
          console.log(e);
        }
      }
      SaveUserDb();
    }
  }, [currentUser, saved, SaveUser]);


  useEffect(() => {
    console.log(currentUser);
    // Check if currentUser is still null and loadingAuth is false
    if (!currentUser && !loadingAuth && getFromLocalStorage("token")) {
      removeFromLocalStorage("token");
      router.replace("/");
    }
  }, [currentUser, loadingAuth]);

  // useEffect to update loadingAuth when currentUser changes
  useEffect(() => {
    if (currentUser) {
      setLoadingAuth(false); 
    }
  }, [currentUser, loadingAuth]);

  return (
    <main className="w-full h-full">
      <Navbar/>
        {children}
    </main>
  );
}
