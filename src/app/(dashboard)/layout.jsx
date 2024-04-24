"use client";
import { useEffect, useState } from "react";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setLocalStorage,
} from "@/lib/utils";
import { useRouter } from "next/navigation";
import useAuth from "@/context/useAuth";

import Sidebar from "@/components/dashboard/sidebar";
import Navbar from "@/components/dashboard/navbar";
// import { getUserData } from "@/axios/api/getUserData";
import { useToast } from "@/components/ui/use-toast";
import { getTeams } from "@/axios/api/getUserTeam";
import useTeam from "@/context/useTeam";

export default function RootLayout({ children }) {
  const router = useRouter();
  const { currentUser } = useAuth();
  const { userTeam, setUserTeam } = useTeam();
  const isUserSave = getFromLocalStorage("isUserSaved") || false;
  const { toast } = useToast();
  const [loadingAuth, setLoadingAuth] = useState(true);

  const token = getFromLocalStorage("token");
  const saved = getFromLocalStorage("isUserSaved") || false;

  useEffect(() => {
    if (!getFromLocalStorage("token")) router.replace("/");
  }, [router]);

  useEffect(() => {
    if (
      currentUser &&
      currentUser?.metadata?.creationTime !=
        currentUser?.metadata?.lastSignInTime
    ) {
      setLocalStorage("isUserSaved", true);
    }
  }, [currentUser, saved]);

  useEffect(() => {
    if (currentUser && saved) {
      async function getUserTeam() {
        try {
          const response = await getTeams(setUserTeam);
          // console.log("teams",response)
          // console.log(userTeam);
          if (!response) {
            console.log("error");
          }
        } catch (e) {
          console.log(e);
        }
      }
      getUserTeam();
    }
  }, [currentUser, saved, setUserTeam]);

  useEffect(() => {
    if (!currentUser && !loadingAuth && getFromLocalStorage("token")) {
      removeFromLocalStorage("token");
      router.replace("/");
    }
  }, [currentUser, loadingAuth, router]);

  useEffect(() => {
    if (currentUser) {
      setLoadingAuth(false);
    }
  }, [currentUser, loadingAuth]);

  return (
    <main className="w-full h-full">
      <Navbar />
      <div className="w-full">
        <div className="hidden md:block">
          <Sidebar />
        </div>
        {children}
      </div>
    </main>
  );
}
