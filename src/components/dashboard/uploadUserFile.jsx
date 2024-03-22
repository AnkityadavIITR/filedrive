"use client";
import React from "react";
import UploadBtn from "./uploadBtn";
import { DataCard } from "./dataCard";
import Image from "next/image";

const Upload = ({ data,onSubmit }) => {
  return (
    <div className="px-10 py-10 w-full ml-[16vw] min-h-[92vh] ">
      <div className="flex justify-between items-center">
        <h1 className="text-[35px] font-semibold">Your files</h1>
        <UploadBtn onSubmit={onSubmit}/>
      </div>
      {data?.length > 0 ? (
        data.map((data) => {
          return <DataCard key={data._id} file={data}/>
        })
      ) : (
        <div className="flex justify-center items-center mt-5">
          <Image
            src="/Images/empty.png"
            alt=""
            className="max-w-[300px] mx-auto "
            height={300}
            width={300}
          />
        </div>
      )}
    </div>
  );
};

export default Upload;
