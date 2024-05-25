
import countImage from "@/assets/landing_page/count.jpg";

const CountSection = () => {
  return (
    <div
      className={`  bg-fixed bg-cover bg-center  `}
      style={{ backgroundImage: `url(${countImage.src})` }}
    >
      <div className="lg:flex items-center justify-between backdrop-brightness-50 h-full w-full px-16 ">
        <div className="text-white max-w-[1440px] mx-auto">
          <div className="py-20 mx-auto flex flex-col lg:flex-row items-center justify-between  gap-10  ">
            <div>
              <h1 className="text-6xl text-center font-bold text-white">3</h1>
              <p className="mt-3 text-2xl font-bold">YEARS EXPERIENCE</p>
            </div>
            <div>
              <h1 className="text-6xl text-center font-bold text-white">500</h1>
              <p className="mt-3 text-2xl font-bold">HAPPY DONORS</p>
            </div>
            <div>
              <h1 className="text-6xl text-center font-bold text-white">5</h1>
              <p className="mt-3 text-2xl font-bold">TOTAL AWARDS</p>
            </div>
            <div>
              <h1 className="text-6xl text-center font-bold text-white">1000</h1>
              <p className="mt-3 text-2xl font-bold">HAPPY RECIPIENT</p>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default CountSection;


