import aboutUsPage from "@/assets/landing_page/aboutUsPage.jpg";
import assets from "@/assets";
import Image from "next/image";
import { ClockCircleOutlined, CommentOutlined } from "@ant-design/icons";
import PrimaryBtn from "@/components/ui/Button/PrimaryBtn";
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

const BlogPage = () => {
  return (
    <div className="bg-gray-200">
      {/* nav */}
      <div
        className={` bg-fixed  bg-no-repeat  hidden lg:block`}
        style={{ backgroundImage: `url(${aboutUsPage.src})` }}
      >
        <div className="lg:flex items-center justify-between backdrop-brightness-50 h-full w-full px-16 flex text-center  ">
          <div className="text-center w-8/12 mx-auto py-28">
            <h1 className="text-6xl text-center font-bold text-white">Blog</h1>
            <p className="mt-3 text-2xl font-bold text-white ">
              Home / <span className="text-red-500">Blog</span>
            </p>
          </div>
        </div>
      </div>
      {/* blog */}
      <div className="max-w-[1440px] mx-auto py-10 lg:py-16 ">
        <div className="lg:mt-10">
          <div className="w-11/12 lg:w-8/12 mx-auto border shadow-lg lg:grid  ">
            {/* blog cards */}
            <div className=" p-5 bg-white">
              {data.map((item: any) => (
               
                <div key={item.id} className="mt-3 ">
                  <figure className="overflow-hidden">
                    <Image
                      className="w-full h-[450px] hover:scale-110 duration-300"
                      src={item.image}
                      alt="blog image"
                    />
                  </figure>
                  <div className="flex items-center justify-between  px-5 pt-3 text-red-500">
                    <div className="flex items-center gap-3">
                      <ClockCircleOutlined className=""/>
                      <p>{item.publishedDate}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <CommentOutlined />
                      <p>{item.comments}</p>
                    </div>
                  </div>

                  <div className="py-3">
                    <h1 className="text-3xl font-bold py-3">{item.title}</h1>
                    <p className="text-gray-600 py-4">{item.desc}</p>

                    <PrimaryBtn>
                        Read More
                    </PrimaryBtn>
                  </div>

                </div>
              ))}
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
