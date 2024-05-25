"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { getUserInfo, removeUser } from "@/services/actions/auth.services";
const Navbar = () => {
  const AuthButton = dynamic(
    () => import("@/components/ui/AuthButton/AuthButton"),
    { ssr: false }
  );
  const pathName = usePathname();
  const [smNavbarOptions, setSmNavbarOptions] = useState(false);
  const userInfo = getUserInfo();
  const router = useRouter();
  return (
    <>
      {/* sm nav */}
      <div className=" flex lg:hidden justify-between items-center px-3 py-[30px] shadow-lg ">
        <figure>
          <Link
            href={"/"}
            className="text-2xl font-semibold text-red-500 px-2 cursor-pointer"
          >
            BloodBond
          </Link>
        </figure>

        <figure
          className={`duration-500  cursor-pointer`}
          onClick={() => setSmNavbarOptions(true)}
        >
          <MenuOutlined className="text-3xl" />
        </figure>
      </div>
      {/* sm nav bar options */}
      <div
        className={` fixed  top-0 right-0 z-10 w-full h-full bg-white  ${
          smNavbarOptions ? "translate-x-0 z-10" : "translate-x-full z-10"
        } duration-300  `}
      >
        <div className="flex justify-between items-center mx-4 py-[24px] font-customFontGroteskRegular">
          <Link
            href={"/"}
            onClick={() => setSmNavbarOptions(false)}
            className="text-2xl font-semibold text-red-500 px-2 cursor-pointer"
          >
            BloodBond
          </Link>

          <figure
            className={` duration-500  cursor-pointer`}
            onClick={() => setSmNavbarOptions(false)}
          >
            <CloseOutlined className="text-3xl" />
          </figure>
        </div>
        <hr />
        <div className="flex flex-col gap-[24px] items-end mt-[16px] px-[18px] ">
          <Link
            onClick={() => setSmNavbarOptions(false)}
            href={"/"}
            className={`${pathName === '/' ? "text-red-500" : "text-[#0F172A] "}
            text-[18px] font-medium leading-[26px]
            `}
    
          >
            Home
          </Link>
          <Link
            onClick={() => setSmNavbarOptions(false)}
            href={`/dashboard/${userInfo?.role}`}
            className="text-[#0F172A] text-[18px] font-medium leading-[26px]"
          >
            Dashboard
          </Link>
          <Link
            onClick={() => setSmNavbarOptions(false)}
            href={"/aboutUs"}
            className={`${pathName === '/aboutUs' ? "text-red-500" : "text-[#0F172A] "}
            text-[18px] font-medium leading-[26px]
            `}
            
          >
            About Us
          </Link>

          <Link
            href={"/bloodDonors"}
            className={`${pathName === '/bloodDonors' ? "text-red-500" : "text-[#0F172A] "}
            text-[18px] font-medium leading-[26px]
            `}
            
            onClick={() => setSmNavbarOptions(false)}
          >
            Blood Donors
          </Link>
          <Link
            href={"/contact"}
            className={`${pathName === '/contact' ? "text-red-500" : "text-[#0F172A] "}
            text-[18px] font-medium leading-[26px]
            `}
           
            onClick={() => setSmNavbarOptions(false)}
          >
            Contact
          </Link>
          {/* login/logout */}
          {
            userInfo ? 
            <button
            className="text-[#0F172A] text-[18px] font-medium leading-[26px]"
            onClick={() => {
              removeUser();
              router.refresh();
              router.push("/");
              setSmNavbarOptions(false);
            }}
          >
            Logout
          </button>
          :
          <button
            className="text-[#0F172A] text-[18px] font-medium leading-[26px]"
            onClick={() => {
              router.push("/login");
              setSmNavbarOptions(false);
            }}
          >
            Login
          </button>
          }
        </div>
      </div>
      {/* lg navbar */}
      <div className="hidden lg:flex items-center gap-16  w-full mx-auto shadow-lg ">
        {/* logo */}
        <div className="bg-red-600 w-5/12 text-left flex justify-end py-3 ">
          <Link
            href={"/"}
            className="text-4xl font-semibold text-white px-3 cursor-pointer"
          >
            BloodBond
          </Link>
        </div>
        {/* links */}
        <div className="flex items-center w-8/12  gap-3 py-3">
          <ul className="flex items-center gap-5 ">
            <Link
              className={`${pathName === "/" ? "text-red-500" : ""}
          hover:text-red-500 duration-150 font-medium
          `}
              href={"/"}
            >
              Home
            </Link>
            <Link
              className={`${pathName === "/aboutUs" ? "text-red-500" : ""}
          hover:text-red-500 duration-150 font-medium
          `}
              href={"/aboutUs"}
            >
              About Us
            </Link>
            <Link
              className={`${pathName === "/bloodDonors" ? "text-red-500" : ""}
          hover:text-red-500 duration-150 font-medium
          `}
              href={"/bloodDonors"}
            >
              Blood Donors
            </Link>
            <Link
            href={"/contact"}
            className={`${pathName === '/contact' ? "text-red-500" : "text-[#0F172A] "}
            text-[18px] font-medium leading-[26px]
            `}
           
            onClick={() => setSmNavbarOptions(false)}
          >
            Contact
          </Link>
            
            <Link
            href={"/blog"}
            className={`${pathName === '/blog' ? "text-red-500" : "text-[#0F172A] "}
            text-[18px] font-medium leading-[26px]
            `}
           
            onClick={() => setSmNavbarOptions(false)}
          >
            Blog
          </Link>
          </ul>
          <div className="cursor-pointer ml-4 ">
            <AuthButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;


