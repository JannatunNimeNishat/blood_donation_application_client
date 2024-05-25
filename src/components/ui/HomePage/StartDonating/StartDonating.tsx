import callNowImage from "@/assets/landing_page/callNow.jpg";
import { EnvironmentOutlined,MailOutlined } from "@ant-design/icons";
const StartDonating = () => {
  return (
    <div
      className={`  bg-fixed bg-cover bg-center  `}
      style={{ backgroundImage: `url(${callNowImage.src})` }}
    >
      <div className="lg:flex items-center justify-between backdrop-brightness-50 h-full w-full  ">
        <div className="text-white max-w-[1440px] mx-auto py-20">
          <div className="p-16   border-4 border-red-600 space-y-5">
            <h3 className="lg:text-xl font-bold text-center">START DONATING</h3>
            <h1 className="text-3xl lg:text-5xl font-bold text-center">
              Call Now: 01743607289
            </h1>
            <div className="text-center flex items-center justify-center">
              <div className="lg:flex items-center gap-5">
                <div className="flex gap-2 items-center">
                  <EnvironmentOutlined className="" />
                  <p className="">Dhaka, Bangladesh</p>
                </div>
                <div className="flex gap-2 items-center">
                <MailOutlined />
                  <p className="">nishatnime100@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartDonating;
