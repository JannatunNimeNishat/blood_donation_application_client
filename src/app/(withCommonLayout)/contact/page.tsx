
import aboutUsPage from "@/assets/landing_page/aboutUsPage.jpg";
import PrimaryBtn from "@/components/ui/Button/PrimaryBtn";

const ContactPage = () => {
  return (
    <div>
      {/* nav */}
      <div
        className={` bg-fixed  bg-no-repeat  hidden lg:block`}
        style={{ backgroundImage: `url(${aboutUsPage.src})` }}
      >
        <div className="lg:flex items-center justify-between backdrop-brightness-50 h-full w-full px-16 flex text-center  ">
          <div className="text-center w-8/12 mx-auto py-28">
            <h1 className="text-6xl text-center font-bold text-white">
              Contact Us
            </h1>
            <p className="mt-3 text-2xl font-bold text-white ">
              Home / <span className="text-red-500">Contact Us</span>
            </p>
          </div>
        </div>
      </div>
      {/* contact form */}
      <div className="max-w-[1440px] mx-auto py-10 lg:py-16">
        <div className="lg:mt-20">
          <div className="w-11/12 lg:w-8/12 mx-auto border shadow-lg lg:grid grid-cols-5 gap-6 p-10">
            <div className="col-span-3 ">
              <h2 className="text-xl font-bold">Get in Touch</h2>
              <p className="text-gray-500 mt-5">On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms</p>
              <div className="h-full mt-10">
                <div className="grid grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="px-4 py-3 w-full bg-gray-200"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="px-4 py-3 w-full bg-gray-200"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="px-4 py-3 w-full bg-gray-200"
                  />
                  <input
                    type="text"
                    placeholder="Mobile Number"
                    className="px-4 py-3 w-full bg-gray-200"
                  />
                </div>
                <br />
                <textarea
                  name=""
                  id=""
                  placeholder="Message"
                  className="px-4 py-3 w-full bg-gray-200 "
                ></textarea>
                <div className="mt-5">

                <PrimaryBtn>Send Request</PrimaryBtn>
                </div>
              </div>
            </div>
            <div className="col-span-2 bg-red-600 p-10 text-white hidden lg:block">
                <h4 className="font-bold">Blood Excellence!</h4>
                <h1 className="text-3xl font-bold py-4">Expanded Blood Donate Services Here</h1>
                <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms</p>
                <p className="mt-8">Mobile: 01743607289</p>
                <p className="mt-8">Email: nishatnime100@gmail.com</p>
                <p className="mt-5">Location: Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
