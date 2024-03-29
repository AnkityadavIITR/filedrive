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
    <div className="w-[16vw] min-h-screen px-4 border-r fixed">
      <div className="mt-[50px] flex justify-center">
        {currentUser ? (
          <Image
            src={currentUser?.photoURL}
            alt="photo"
            className="w-[200px] h-[200px] rounded-full"
            height={200}
            width={200}
          />
        ) : (
          <Image
          src={""}
          alt="photo"
          className="w-[200px] h-[200px] rounded-full"
          height={200}
          width={200}
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
