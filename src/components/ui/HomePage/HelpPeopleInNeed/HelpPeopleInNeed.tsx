import assets from "@/assets";
import Image from "next/image";
import { DoubleRightOutlined } from "@ant-design/icons";
import PrimaryBtn from "../../Button/PrimaryBtn";

const HelpPeopleInNeed = () => {
  return (
    <div className="py-10 lg:py-16 w-10/12 lg:w-8/12 mx-auto lg:flex items-center  gap-10 ">
      <div className="lg:grid grid-cols-6 gap-6">
        <figure className="hidden lg:relative  col-span-3">
          <Image height={450} src={assets.images.help1} alt="help image" />
          <Image
            height={160}
            width={160}
            className="absolute top-1/3 right-8"
            src={assets.images.help2}
            alt="help image"
          />
        </figure>
        <div className=" col-span-3">
          <h4 className="text-red-500 font-bold">HELP THE PEOPLE IN NEED</h4>
          <h1 className="text-4xl font-bold my-6 leading-[36px]">
            Welcome to BloodBond <br /> Donors Organization
          </h1>
          <p className="mt-8 text-gray-500 leading-[25px]">
            At Blood Donors Organization, we connect lifesaving blood donors
            with those in urgent need. Your donation can make a crucial
            difference.
          </p>
          <div className="mt-10 flex justify-between items-center">
            <ul className="space-y-3">
              <li>
                <DoubleRightOutlined style={{ color: "red" }} /> Good Service
              </li>
              <li>
                <DoubleRightOutlined style={{ color: "red" }} /> Help People
              </li>
              <li>
                <DoubleRightOutlined style={{ color: "red" }} /> Hugine Tools
              </li>
            </ul>
            <ul className="space-y-3">
              <li>
                <DoubleRightOutlined style={{ color: "red" }} /> 24h Service
              </li>
              <li>
                <DoubleRightOutlined style={{ color: "red" }} /> Health Check
              </li>
              <li>
                <DoubleRightOutlined style={{ color: "red" }} /> Blood Bank
              </li>
            </ul>
          </div>
          <div className="mt-8 lg:w-1/3">
            <PrimaryBtn>Find a Donor</PrimaryBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpPeopleInNeed;
