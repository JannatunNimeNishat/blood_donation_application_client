"use client"

import AuthButton from "@/components/ui/AuthButton/AuthButton";



const Navbar = () => {
    return (
        <div className="flex items-center justify-between py-5 w-11/12 mx-auto">
            <figure>
                <h1 className="text-4xl font-semibold text-red-500 ">BloodBond</h1>
            </figure>
            <div>
                <ul className="flex items-center gap-5">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Blood Donors</li>
                </ul>
            </div>
            <div>
                <AuthButton/>
            </div>
        </div>
    );
};

export default Navbar;