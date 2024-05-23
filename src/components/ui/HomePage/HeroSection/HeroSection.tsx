"use client";
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
import PrimaryBtn from "../../Button/PrimaryBtn";
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
          <div className="mt-10 w-[40%]">
            <Link
            href="/bloodDonors"
            >
                <PrimaryBtn>
                Connect with Donors
                </PrimaryBtn>
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
