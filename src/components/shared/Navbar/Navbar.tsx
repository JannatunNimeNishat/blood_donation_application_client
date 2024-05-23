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
    <div className="flex items-center justify-between py-5 w-11/12 mx-auto">
      <figure>
        <Link href={'/'} className="text-4xl font-semibold text-red-500 cursor-pointer">BloodBond</Link>
      </figure>
      <div>
        <ul className="flex items-center gap-5">
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
      <div className="cursor-pointer  ">
        <AuthButton />
      </div>
    </div>
  );
};

export default Navbar;
