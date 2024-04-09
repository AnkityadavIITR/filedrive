import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FileBox } from "lucide-react";
import Container from "../ui/container";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <Container>
      <div className=" px-6 lg:px-8 h-[90vh] flex container mx-auto ">
        <div className="mx-auto max-w-2xl my-auto">
          <FileBox size={100} strokeWidth={1} className="mx-auto bg-white" />

          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl bg-white">
              The organized workspace. Share with confidence.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 bg-white">
              Share and access files instantly
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild >
                <Link
                  href={"/login"}
                >
                  Get started
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
