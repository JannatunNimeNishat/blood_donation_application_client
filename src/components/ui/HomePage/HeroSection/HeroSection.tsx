"use client";
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
import PrimaryBtn from "../../Button/PrimaryBtn";
const HeroSection = () => {
  return (
    <div className=" max-w-[1440px]  mx-auto ">
      <div className="lg:grid grid-cols-6 gap-8 w-11/12  lg:w-8/12 mx-auto py-10 lg:py-16 ">
        <div className="col-span-3 lg:flex flex-col justify-center ">
          <div className="space-y-2 lg:space-y-5">
            
            <h3 className="text-red-500 font-bold text-xl">
              Donate blood, save life !
            </h3>
            <h1 className="text-4xl font-bold  ">
              Be the Hero Someone Desperately Needs Right Now
            </h1>
          </div>
          <div className="mt-8 lg:mt-10 lg:w-[40%]">
            <Link
            href="/bloodDonors"
            >
                <PrimaryBtn>
                Connect with Donors
                </PrimaryBtn>
            </Link>
            
          </div>
        </div>
        <div className=" col-span-3 mt-8 lg:mt-0 overflow-hidden rounded-lg"
        style={{
          boxShadow: "5px 5px 30px red"
        }}>

          <Image
            className="h-[450px] w-[450px] rounded-lg hover:scale-110 duration-300  "
            
            src={assets.images.heroImage}
            alt="hero image"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
