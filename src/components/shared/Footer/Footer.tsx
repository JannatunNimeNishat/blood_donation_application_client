import { DoubleRightOutlined,FacebookOutlined,LinkedinOutlined,InstagramOutlined,TwitterOutlined } from "@ant-design/icons";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-black text-white ">
      <div className="max-w-[1440px]  mx-auto ">
        <div className=" lg:w-9/12 mx-auto px-4 py-10 lg:pt-20  ">
          {/* top */}
          <div className="lg:grid  lg:grid-cols-4">
            {/* 1st */}
            <div className="col-span-2">
              <h1 className="text-xl font-bold">About Us</h1>
              <p className="mt-8">
                We connect generous donors with patients in need, <br />{" "}
                ensuring a safe and efficient blood donation process. <br />{" "}
                Join us in saving lives and supporting our community.
              </p>
              <p className="mt-5">
                <span className="font-bold">Phone: </span>01743607289
              </p>
              <p className="mt-2">
                <span className="font-bold">Email: </span>
                nishatnime100@gmail.com
              </p>
            </div>
            {/* 2nd */}
            <div className="col-span-1 mt-8 lg:mt-0">
              <h1 className="text-xl font-bold">Quick Links</h1>
              <ul className="mt-3 lg:mt-8">
                <Link
                  href={"/"}
                  className="flex items-center gap-3 hover:text-red-500 duration-200"
                >
                  <DoubleRightOutlined />
                  <p>Home</p>
                </Link>
                <Link
                  href={"/aboutUs"}
                  className="flex items-center gap-3 hover:text-red-500 duration-200"
                >
                  <DoubleRightOutlined />
                  <p>About Us</p>
                </Link>
                <Link
                  href={"/bloodDonors"}
                  className="flex items-center gap-3 hover:text-red-500 duration-200"
                >
                  <DoubleRightOutlined />
                  <p>Blood Donors</p>
                </Link>
                <Link
                  href={"/contact"}
                  className="flex items-center gap-3 hover:text-red-500 duration-200"
                >
                  <DoubleRightOutlined />
                  <p>Contact</p>
                </Link>
                <Link
                  href={"/blog"}
                  className="flex items-center gap-3 hover:text-red-500 duration-200"
                >
                  <DoubleRightOutlined />
                  <p>Blog</p>
                </Link>
              </ul>
            </div>
            {/* 3rd */}
            <div className="col-span-1 mt-8 lg:mt-0">
              <h1 className="text-xl font-bold">Our Services</h1>
              <ul className="mt-3 lg:mt-8">
                <Link
                  href={"/"}
                  className="flex items-center gap-3 hover:text-red-500 duration-200"
                >
                  <DoubleRightOutlined />
                  <p>Blood Donation</p>
                </Link>
                <Link
                  href={"/"}
                  className="flex items-center gap-3 hover:text-red-500 duration-200"
                >
                  <DoubleRightOutlined />
                  <p>Health Check</p>
                </Link>
                <Link
                  href={"/"}
                  className="flex items-center gap-3 hover:text-red-500 duration-200"
                >
                  <DoubleRightOutlined />
                  <p>Blood Bank</p>
                </Link>
                <Link
                  href={"/"}
                  className="flex items-center gap-3 hover:text-red-500 duration-200"
                >
                  <DoubleRightOutlined />
                  <p>Donate Process</p>
                </Link>
                <Link
                  href={"/"}
                  className="flex items-center gap-3 hover:text-red-500 duration-200"
                >
                  <DoubleRightOutlined />
                  <p>Blood Info</p>
                </Link>
              </ul>
            </div>
          </div>
          {/* bottom */}
          <br />
          <br />
          <div className=" bg-white h-[2px]" />
          <br />
          <div className="mt-3 lg:mt-8 lg:flex  justify-between w-full ">
            {/* 1st */}
            <div className="lg:w-1/2">
              <h4 className="lg:text-xl font-bold">
                Subscribe us for more update & news !!
              </h4>
              <div className="mt-4 ">
                <input type="email" placeholder="Enter your Email" className="px-3 lg:px-6 py-3 lg:py-4 " />
                <button className="px-3 lg:px-6 py-3 lg:py-4 bg-red-600  ">
                  Subscribe
                </button>
              </div>
            </div>
            {/* 2nd */}
            <div className="lg:w-1/2 mt-6 lg:mt-0">
            <div className="text-red-500 flex gap-3 items-center">
            <FacebookOutlined className="text-3xl" />
            <TwitterOutlined className="text-3xl" />
            <LinkedinOutlined className="text-3xl" />
            <InstagramOutlined className="text-3xl" />
            </div>
            <div className="mt-4">
                <ul className="flex gap-3">
                    <li className="hover:text-red-500">Privacy Policy</li>
                    <li>/</li>
                    <li className="hover:text-red-500">Terms & Conditions</li>
                    <li>/</li>
                    <li className="hover:text-red-500">FAQ</li>
                </ul>
            </div>
            </div>

            <div>

            </div>
          </div>
         
         {/* cory right */}
         <div className="mt-20 text-center">
            <h1>Copyright &#169; 2024 BloodBond. All rights reserved</h1>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
