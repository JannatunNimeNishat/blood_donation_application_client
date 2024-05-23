"use client";
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
const HeroSection = () => {
  return (
    <div className="py-8 w-11/12 mx-auto flex items-center justify-center">
      <div className="grid grid-cols-6 gap-6 w-9/12 mx-auto ">
        <div className="col-span-3 flex flex-col justify-center ">
          <div className="space-y-5">
            
            <h3 className="text-red-500 font-bold text-xl">
              Donate blood, save life !
            </h3>
            <h1 className="text-4xl font-bold  ">
              Be the Hero Someone Desperately Needs Right Now
            </h1>
          </div>
          <div className="mt-10">
            <Link
              href="/bloodDonors"
              className="rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-red-600 active:shadow-none shadow-lg bg-gradient-to-tr from-red-600 to-red-500 border-red-700 text-white"
            >
              <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
              <span className="relative">Connect with Donors</span>
            </Link>
          </div>
        </div>
        <div className=" col-span-3">
          <Image
            className="h-[450px] w-[450px] rounded-lg"
            src={assets.images.heroImage}
            alt="hero image"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
