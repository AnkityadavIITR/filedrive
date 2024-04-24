"use client";
import React, { useState } from "react";
import useAuth from "@/context/useAuth";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";
const Sidebar = () => {
  const router = useRouter();
  const options = [
    {
      title: "Your data",
      link: "/dashboard",
    },
    {
      title: "delted files",
      link: "/dashboard/deleted",
    },
  ];
  const [click, setClick] = useState("");
  const { currentUser } = useAuth();
  return (
    <div className="w-[16vw] min-h-screen px-4 border-r fixed ">
      <div className="mt-[50px] flex justify-center">
        {currentUser && currentUser.photoURL ? (
          <Image
            src={currentUser?.photoURL}
            alt="photo"
            className="w-[120px] h-[120px] rounded-full"
            height={120}
            width={120}
          />
        ) : (
          <Image
          src={"/Images/user.png"}
          alt="photo"
          className="w-[120px] h-[120px] rounded-full"
          height={120}
          width={120}
        />
        )}
      </div>
      <div className="items-center mt-[30px]">
        <div className="flex w-full flex-col gap-4 ">
          {options?.map((data) => {
            return (
              <Button
              key={data.title}
                className=""
                variant={click === data.title ? "outline" : ""}
                onClick={() => {
                  setClick(data.title);
                  router.push(data.link);
                }}
              >
                {data.title}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
