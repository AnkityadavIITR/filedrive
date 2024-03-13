import React from "react";
import useAuth from "@/context/useAuth";
import { FileBox } from "lucide-react";
import TeamPopUp from "./teams";

const Navbar = () => {
  const { currentUser } = useAuth();
  return (
    <div className="flex justify-between px-10 pt-3 pb-2 border-b">
      <FileBox size={36} strokeWidth={1} className="" />
      <div className="flex gap-x-4">
        <TeamPopUp/>
        <div className="flex gap-x-2">
          <img
            src={currentUser?.photoURL}
            alt="user photo"
            className="w-10 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
