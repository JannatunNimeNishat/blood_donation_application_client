import { Card } from "antd";
import Image from "next/image";
import Link from "next/link";
import PrimaryBtn from "../../Button/PrimaryBtn";

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

  
const AboutUs = () => {
    return (
        <div>
            <div className="max-w-[1440px] mx-auto py-10 lg:py-16">
      <h4 className="text-red-500 font-bold text-center">OUR TEAM</h4>
      <p className="text-gray-500 text-center lg:w-8/12 mx-auto mt-4">Our blood donation website connects donors with those in need, simplifying the donation process. Our mission is to save lives through accessible blood donations and support blood banks with a steady supply.</p>
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

export default AboutUs;