import React from "react";
import useAuth from "@/context/useAuth";
import { FileBox, LogOut } from "lucide-react";
import TeamPopUp from "./teams";
import { SignOut } from "../../services/signout";
import { useRouter } from "next/navigation";
const Navbar = () => {
  const { currentUser } = useAuth();
  const router=useRouter();
  return (
    <div className="flex justify-between px-10 pt-3 pb-2 border-b fixed top-0 w-full z-20 bg-white">
      <FileBox size={36} strokeWidth={1} className="" />
      <div className="flex gap-x-4">
        <TeamPopUp/>
        <div className="flex gap-x-2">
          <img
            src={currentUser?.photoURL}
            alt="user photo"
            className="w-10 rounded-full text-[10px]"
          />
        </div>
        <LogOut strokeWidth={1.25} onClick={()=>SignOut(router)} className="my-auto border p-1 hover:bg-slate-100" />
      </div>
    </div>
  );
};

export default Navbar;
