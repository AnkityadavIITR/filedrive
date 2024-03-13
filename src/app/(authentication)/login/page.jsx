"use client";
import React from "react";
import { auth, provider } from "@/config/firebase";
import { FaGoogle } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { signInWithPopup } from "firebase/auth";
import { useToast } from "@/components/ui/use-toast";
import { setLocalStorage } from "@/lib/utils";
import Form from "@/components/auth/loginForm";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { SaveUser } from "@/axios/api/saveUser";

const page = () => {
  const { toast } = useToast();
  const router = useRouter();

  const signInWithGoogle = async () => {
    try {
      const userCredential = await signInWithPopup(auth, provider);
      const { user } = userCredential;
      const { email, uid, displayName, photoURL } = user;
      console.log("user from login", user);
      toast({
        title: "success",
        description: "logged in",
      });
      setLocalStorage("token", user.accessToken);
      router.replace("/dashboard");
    } catch (error) {
      console.log(error);
      toast({
        title: "error",
        description: "logged in",
      });
    }
  };
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="min-w-[400px] p-4 flex-col border rounded-md justify-center border-gray-600 ">
        <h1 className="text-[24px] text-semibold">Sign in to account</h1>
        <h2 className="text-[14px] text-gray-500 text-md mt-2">
          Enter your email below to login
        </h2>
        <div className="flex justify-between items-center gap-2 mt-3">
          <Button onClick={signInWithGoogle} className="w-full">
            <FaGoogle className="mr-2 h-4 w-4" /> SignIn with Google
          </Button>
        </div>
        <div className="flex w-full justify-center gap-x-1 mt-3">
          <hr className="h-px my-3 bg-slate-400 border-0 dark:bg-gray-700 w-2/5" />
          <p>OR</p>
          <hr className="h-px my-3 bg-slate-400 border-0 dark:bg-gray-700 w-2/5" />
        </div>
        <Form />
        <div className=" flex justify-end gap-x-1">
          <p className="text-[14px] text-gray-500 text-md">
            don't have an account?
          </p>
          <Link
            href={"/register"}
            className="text-[14px] text-md text-blue-500 hover:underline"
          >
            register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
