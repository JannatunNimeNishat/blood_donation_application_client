"use client"



const Navbar = () => {
    return (
        <div className="flex items-center justify-between py-5 w-11/12 mx-auto">
            <figure>
                <h1 className="text-4xl font-semibold">Logo</h1>
            </figure>
            <div>
                <ul className="flex items-center gap-5">
                    <li>About</li>
                    <li>Contact</li>
                    <li>Donor list</li>
                    <li>Donor list</li>
                    <li>Donor list</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;