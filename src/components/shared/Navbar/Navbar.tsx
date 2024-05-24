"use client";


import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const AuthButton = dynamic(
    () => import("@/components/ui/AuthButton/AuthButton"),
    { ssr: false }
  );
  const pathName = usePathname();
  return (
    <div className="flex items-center gap-16  w-full mx-auto shadow-lg">
      <div className="bg-red-500 w-4/12 text-left flex justify-end py-3 ">
        <Link href={'/'} className="text-4xl font-semibold text-white px-3 cursor-pointer">BloodBond</Link>
      </div>
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
        </ul>
      <div className="cursor-pointer  ">
        <AuthButton />
      </div>
      </div>
    </div>
  );
};

export default Navbar;


/*
 <div className="flex items-center justify-between py-5 w-11/12 mx-auto">
      <figure className="border">
        <Link href={'/'} className="text-4xl font-semibold text-red-500 cursor-pointer">BloodBond</Link>
      </figure>
      <div>
        <ul className="flex items-center gap-5 border">
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
        </ul>
      </div>
      <div className="cursor-pointer  border">
        <AuthButton />
      </div>
    </div>
*/
