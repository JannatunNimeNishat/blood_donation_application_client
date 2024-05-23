import assets from "@/assets";
import Image from "next/image";
import countImage from "@/assets/landing_page/count.jpg";
import {
  TrophyOutlined,
  UsergroupAddOutlined,
  TeamOutlined,
  SmileOutlined,
} from "@ant-design/icons";
const CountSection = () => {
  return (
    <div
      className={`my-16  bg-fixed bg-cover bg-center  `}
      style={{ backgroundImage: `url(${countImage.src})` }}
    >
      <div className="flex items-center justify-between backdrop-brightness-50 h-full w-full px-24">
        <div className="text-white max-w-[1440px] mx-auto">
          <div className="py-20 mx-auto flex items-center justify-between  gap-10  ">
            <div>
              <h1 className="text-6xl text-center font-bold text-white">0</h1>
              <p className="mt-3 text-2xl font-bold">YEARS EXPERIENCE</p>
            </div>
            <div>
              <h1 className="text-6xl text-center font-bold text-white">0</h1>
              <p className="mt-3 text-2xl font-bold">HAPPY DONORS</p>
            </div>
            <div>
              <h1 className="text-6xl text-center font-bold text-white">0</h1>
              <p className="mt-3 text-2xl font-bold">TOTAL AWARDS</p>
            </div>
            <div>
              <h1 className="text-6xl text-center font-bold text-white">0</h1>
              <p className="mt-3 text-2xl font-bold">HAPPY RECIPIENT</p>
            </div>
          </div>
        </div>
      </div>

      {/* <Link href='https://www.youtube.com/watch?v=ij8pX9SE9h8&ab_channel=Universit%C3%A9deLausanne'>
                        <Lottie className='mt-12 h-[150px] w-[150px]' animationData={play_btn} loop={true} />
                    </Link> */}
    </div>
  );
};

export default CountSection;

/*

{/* <div className="relative bg-cover my-16 "
        style={{backgroundImage: `url(${countImage.src})`, }}>
            <div className="backdrop-brightness-50">

            
            <div className="max-w-[1440px] mx-auto ">
       <div className="absolute inset-0 bg-black bg-opacity-50 "></div>

       <div className="w-8/12 py-16 mx-auto flex items-center justify-between   ">
        <div>
            <h1 className="text-6xl text-center font-bold text-white">0</h1>
            <p className="mt-3 text-2xl font-bold">YEARS EXPERIENCE</p>
        </div>
        <div>
            <h1 className="text-6xl text-center font-bold text-white">0</h1>
            <p className="mt-3 text-2xl font-bold">HAPPY DONORS</p>
        </div>
        <div>
            <h1 className="text-6xl text-center font-bold text-white">0</h1>
            <p className="mt-3 text-2xl font-bold">TOTAL AWARDS</p>
        </div>
        <div>
            <h1 className="text-6xl text-center font-bold text-white">0</h1>
            <p className="mt-3 text-2xl font-bold">HAPPY RECIPIENT</p>
        </div>
        </div>
       </div>
            </div>
   </div> 
*/
