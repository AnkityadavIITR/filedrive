"use client";
import React from "react";
import UploadBtn from "./uploadBtn";


const Upload = ({ data }) => {
  return (
    <div className="px-10 py-10 w-full ml-[16vw] min-h-[92vh] ">
      <div className="flex justify-between items-center">
        <h1 className="text-[35px] font-semibold">Your files</h1>
        <UploadBtn/>
      </div>
      {data?.length > 0 ? (
        data.map((data) => {})
      ) : (
        <div className="flex justify-center items-center mt-5">
          <img
            src="/Images/empty.png"
            alt=""
            className="max-w-[300px] mx-auto "
          />
        </div>
      )}
    </div>
  );
};

export default Upload;
