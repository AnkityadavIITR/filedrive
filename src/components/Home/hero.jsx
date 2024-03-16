import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FileBox } from "lucide-react";

const Hero = () => {
  return (
    <div className=" px-6 lg:px-8 h-[90vh] flex container mx-auto ">
      <div className="mx-auto max-w-2xl my-auto">
        <FileBox size={100} strokeWidth={1} className="mx-auto" />

        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Publish your passions, in your way
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Create a unique and beautiful blog easily.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href={"/login"}
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
