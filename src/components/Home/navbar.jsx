import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { FileBox } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex  px-20 py-4 dark justify-between  border-b border-slate-300 bg-black">
      <FileBox size={36} strokeWidth={1} className="text-white" />
      <div className="flex gap-x-4 my-auto">
        <Button asChild variant="outline" className="bg-white">
          <Link href={"/login"}>Sign in</Link>
        </Button>
        <Button asChild variant="secondary">
          <Link href={"/register"}>Register</Link>
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
