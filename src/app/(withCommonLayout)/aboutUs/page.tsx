import aboutUsPage from "@/assets/landing_page/aboutUsPage.jpg";
import PrimaryBtn from "@/components/ui/Button/PrimaryBtn";
import assets from "@/assets";
import Image from "next/image";
import { Card } from "antd";
import Link from "next/link";

const data: any = [
  {
    id: 1,
    name: "John Kabir",
    location: "Dhaka",
    image: "https://i.ibb.co/bsdYzV2/m1.jpg",
  },
  {
    id: 2,
    name: "Mia White",
    location: "Khulna",
    image: "https://i.ibb.co/tCSXZRf/m2.jpg",
  },
  {
    id: 3,
    name: "William Taylor",
    location: "Rajshahi",
    image: "https://i.ibb.co/SRyfvXK/m10.jpg",
  },
];

const AboutUsPage = () => {
  return (
    <div>
      {/* nav */}
      <div
        className={` bg-fixed  bg-no-repeat    hidden lg:block`}
        style={{ backgroundImage: `url(${aboutUsPage.src})` }}
      >
        <div className="lg:flex items-center justify-between backdrop-brightness-50 h-full w-full px-16 flex text-center  ">
          <div className="text-center w-8/12 mx-auto py-28">
            <h1 className="text-6xl text-center font-bold text-white">
              About Us
            </h1>
            <p className="mt-3 text-2xl font-bold text-white ">
              Home / <span className="text-red-500">About Us</span>
            </p>
          </div>
        </div>
      </div>

      {/* who we are */}
      <div className="max-w-[1440px] mx-auto py-10 lg:py-16">
        <div className="w-11/12 lg:w-8/12 mx-auto flex flex-col lg:flex-row items-center gap-10   ">
          {/* 1st */}
          <div className="lg:w-1/2">
            <h1 className="text-3xl font-bold">WHo We Are</h1>
            <h3 className="text-xl font-semibold py-8">
              We are here not for income, but for outcome
            </h3>
            <p className="text-gray-600">
              Which is the same as saying through shrinking from toil and pain.{" "}
              <br className="hidden lg:block"/>
              These cases are perfectly simple and easy to distinguish. In a
              free hour, <br className="hidden lg:block"/> when untrammelled and when nothing prevents
            </p>
            <div className="mt-5 lg:w-3/4">
              <PrimaryBtn>Contact With Us</PrimaryBtn>
            </div>
          </div>
          <figure className="lg:w-1/2 overflow-hidden"
          style={{
            boxShadow: "5px 5px 30px red"
          }}
          >
            <Image
              className="w-full h-full hover:scale-110 duration-300"
              src={assets.images.aboutUs1}
              alt="about us"
            />
          </figure>
        </div>
      </div>

      {/* out team */}
      <div className="max-w-[1440px] mx-auto py-10 lg:py-16">
      <h4 className="text-red-500 font-bold text-center">OUR TEAM</h4>
        <h1 className="text-4xl font-bold my-6 leading-[36px] text-center ">
          Our Core Team Members
        </h1>
        <div className="px-4 lg:px-0 lg:w-8/12 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5 mt-8">
          {data.map((item: any) => (
            <Card
              key={item.id}
              className=" "
              hoverable
              cover={
                <Image
                  className="h-[370px]"
                  alt="donor image"
                  width={450}
                  height={250}
                  src={item.image}
                />
              }
            >
              <div className="mb-3 text-[18px]">
                <h2>
                  <span className="font-bold">Name: </span>
                  {item.name}
                </h2>

                <h2>
                  <span className="font-bold">Location: </span>
                  {item.location}
                </h2>
              </div>
              <Link className="  " href={`/aboutUs`}>
                <PrimaryBtn>Details</PrimaryBtn>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
