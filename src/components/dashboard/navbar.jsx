import React from "react";
import useAuth from "@/context/useAuth";
import { FileBox, LogOut } from "lucide-react";
import TeamPopUp from "./teams";
import { SignOut } from "../../services/signout";
import { useRouter } from "next/navigation";
import Image from "next/image";
const Navbar = () => {
  const { currentUser } = useAuth();
  const router=useRouter();

  return (
    <div className="flex justify-between px-10 pt-3 items-center pb-2 border-b fixed top-0 w-full z-20 bg-white">
      <button onClick={()=>router.push("/dashboard")}>
        <div className="flex gap-2">
          <FileBox size={36} strokeWidth={1} className="" />
          <h1 className="font-semibold text-[30px]">FileDrive</h1>
        </div>
      </button>
      <div className="flex gap-x-4">
        <TeamPopUp/>
        <div className="flex gap-x-2">
          <Image
            src={currentUser?.photoURL}
            alt="user photo"
            className="w-10 rounded-full text-[10px]"
            width={40}
            height={40}
          />
        </div>
        <LogOut
          strokeWidth={1.25}
          onClick={() => SignOut(router)}
          className="my-auto border p-1 hover:bg-slate-100"
        />
      </div>
    </div>
  );
};

export default Navbar;
