"use client";
import React from "react";
import useAuth from "@/context/useAuth";
import { Button } from "../ui/button";

const Sidebar = ({ activebtn }) => {
  const options = ["Your Files", " Deleted", "Archived"];
  return (
    <div className="w-[16vw] min-h-screen px-4 border-r fixed">
      <div className="items-center mt-[100px]">
        <div className="flex w-full flex-col gap-4 ">
          {options?.map((data) => {
            return (
              <Button className="" variant="outline">
                {data}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
