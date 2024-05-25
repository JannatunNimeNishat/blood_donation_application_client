import assets from "@/assets";
import Image from "next/image";
import PrimaryBtn from "../../Button/PrimaryBtn";

const data: any = [
  {
    count: "01",
    title: "Blood Donation",
    image: assets.images.whatWeDoImg1,
    desc:'I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorpe matti pulvinar dapibus leo.'
  },
  {
    count: "02",
    title: "Health Check",
    image: assets.images.whatWeDoImg2,
    desc:'I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorpe matti pulvinar dapibus leo'
  },
  {
    count: "03",
    title: "Blood Bank",
    image: assets.images.whatWeDoImg3,
    desc:'I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorpe matti pulvinar dapibus leo.'
  },
];

const WhatWeDo = () => {
  return (
    <div className="max-w-[1440px]  mx-auto ">
      <div className="w-11/12  lg:w-8/12 mx-auto py-10 lg:py-16">
        {/* nav */}
        <h4 className="text-red-500 font-bold text-center">WHAT WE DO</h4>
        <h1 className="text-4xl font-bold my-6 leading-[36px] text-center ">
          Our Best Services
        </h1>

        {/* cards */}
        <div className="mt-16">
          {data?.map((item: any,index:any) => {
            if (index % 2 === 0) {
              return (
                <div key={item.count} className="flex flex-col lg:flex-row items-center gap-8 my-8">
                  <figure className=" lg:w-1/2 overflow-hidden" >
                    <Image className="lg:w-[450px] lg:h-[400px] hover:scale-110 duration-300" src={item.image} alt="what we do image" />
                  </figure >
                  <div className="lg:w-1/2 flex flex-col justify-center space-y-3">
                    <h1 className="text-7xl font-bold text-gray-300">{item.count}</h1>
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                    <p className="text-gray-600 ">{item.desc}</p>
                   <div className="mt-10 w-1/3 border">
                   <PrimaryBtn>
                        Read More
                    </PrimaryBtn>
                   </div>
                  </div>
                </div>
              );
            } else {
              return (
                <div key={item.count} className="flex flex-col lg:flex-row items-center gap-8 my-8">
                   <figure className="block lg:hidden lg:w-1/2 overflow-hidden" >
                    <Image className="lg:w-[450px] lg:h-[400px] hover:scale-110 duration-300" src={item.image} alt="what we do image" />
                  </figure >
                  <div className="lg:w-1/2 flex flex-col justify-center lg:items-end lg:text-end space-y-3">
                    <h1 className="text-7xl font-bold text-gray-300">{item.count}</h1>
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                    <p className="text-gray-600 ">{item.desc}</p>
                   <div className="mt-10 w-1/3 border">
                   <PrimaryBtn>
                        Read More
                    </PrimaryBtn>
                   </div>
                  </div>
                  <figure className="hidden lg:block lg:w-1/2 overflow-hidden" >
                    <Image className="lg:w-[450px] lg:h-[400px] hover:scale-110 duration-150" src={item.image} alt="what we do image" />
                  </figure >
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
