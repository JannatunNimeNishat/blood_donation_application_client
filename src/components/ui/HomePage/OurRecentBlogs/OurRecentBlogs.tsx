import assets from "@/assets";
import Image from "next/image";
import PrimaryBtn from "../../Button/PrimaryBtn";
import { ClockCircleOutlined,CommentOutlined  } from '@ant-design/icons';

const data: any = [
  {
    id: 1,
    title: "The Lifesaving Power of Blood Donation",
    desc: "Every blood donation can save up to three lives. Learn how your contribution makes a difference and the impact it has on those in need.",
    image: assets.images.blog1,
    publishedDate: "2024-05-01",
    comments: 4,
  },
  {
    id: 2,
    title: "Preparing for Your First Blood Donation",
    desc: "Donating blood for the first time? Here's a step-by-step guide on what to expect and how to prepare for a smooth and rewarding experience.",
    image: assets.images.blog2,
    publishedDate: "2024-05-10",
    comments: 7,
  },
  {
    id: 3,
    title: "Top Myths About Blood Donation Debunked",
    desc: "There's a lot of misinformation out there about blood donation. We're setting the record straight on the most common myths and misconceptions.",
    image: assets.images.blog3,
    publishedDate: "2024-05-15",
    comments: 3,
  },
];

const OurRecentBlogs = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="w-11/12 lg:w-8/12 mx-auto py-10 lg:py-16">
        {/* nav */}
        <h4 className="text-red-500 font-bold text-center">OUR RECENT BLOGS</h4>
        <h1 className="text-4xl font-bold my-6 leading-[36px] text-center">
          Checkout News & Updates
        </h1>

        {/* blog cards */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-5">
          {data.map((item: any) => (
            <div key={item.id} className="max-w-lg mx-auto  ">
              <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5 group">
                
                <figure className="overflow-hidden">
                  <Image className="rounded-t-lg group-hover:scale-110 duration-300" src={item.image} alt={item.title} />
                </figure>
                <div className="flex items-center justify-between  px-5 pt-3 text-red-500">
                    <div className="flex items-center gap-3 text-red-500">
                    <ClockCircleOutlined /> 
                    <p>{item.publishedDate}</p>
                    </div>
                    <div className="flex items-center gap-3 text-red-500">
                    <CommentOutlined  /> 
                    <p>{item.comments}</p>
                    </div>
                </div>
                <div className="px-5 pt-4">
                  <figure >
                    <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                      {item.title}
                    </h5>
                  </figure>
                  <p className="font-normal text-gray-700 mb-3">{item.desc}</p>
                  
                 <div className="mb-3">
                 <PrimaryBtn>
                    Read more
                  </PrimaryBtn>
                 </div>
                 
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurRecentBlogs;
