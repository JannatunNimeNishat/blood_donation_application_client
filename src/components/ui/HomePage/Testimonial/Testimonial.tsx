import Image from "next/image";

const data:any = [
    {
        id:1,
        desc:'Donating blood through this website was a seamless experience. The process was quick, and the staff were incredibly supportive. Knowing my donation can save lives makes it all worth it!',
        name:'Melissa Smith',
        email:"melissaSmith@gmail.com",
        image:'https://i.ibb.co/F36DSpx/f8.jpg'
    },
    {
        id:2,
        desc:"I've always wanted to give back to my community, and this site made it so easy to schedule and donate blood. The team was professional, and I felt safe and comfortable throughout the entire process. Highly recommend!",
        name:'John',
        email:"john@gmail.com",
        image:'https://i.ibb.co/gDGB3mr/r1.jpg'
    },
    {
        id:3,
        desc:"As a first-time donor, I was a bit nervous, but the detailed information and helpful staff on this site made all the difference. It was a rewarding experience, and I'll definitely be donating regularly now'",
        name:'Timmi',
        email:"timmi@gmail.com",
        image:'https://i.ibb.co/Kmsjd8n/m3.jpg'
    },
]

const Testimonial = () => {
  return (
    <div className="max-w-[1440px]  mx-auto ">
      <div className="w-11/12  lg:w-8/12 mx-auto py-10 lg:py-16">
        {/* nav */}
        <h4 className="text-red-500 font-bold text-center">TESTIMONIAL</h4>
        <h1 className="text-4xl font-bold my-6 leading-[36px] text-center ">
          What People Say
        </h1>
      
      {/* review cards */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 lg:gap-5">
        {
            data.map((item:any,index:any)=>(
                <div
                key={index}
                className="flex flex-col justify-between rounded-md border border-neutral-800 bg-black p-8 shadow-sm max-w-sm mx-auto mt-24">
                <div className="text-red-500 flex gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-red-500" width="20" height="20" viewBox="0 0 24 24"
                        stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path
                            d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z">
                        </path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-red-500" width="20" height="20" viewBox="0 0 24 24"
                        stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path
                            d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z">
                        </path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-red-500" width="20" height="20" viewBox="0 0 24 24"
                        stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path
                            d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z">
                        </path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-red-500" width="20" height="20" viewBox="0 0 24 24"
                        stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path
                            d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z">
                        </path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-red-500" width="20" height="20" viewBox="0 0 24 24"
                        stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path
                            d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z">
                        </path>
                    </svg>
                </div>
            
                <p className="my-4 mb-0 text-base font-normal leading-relaxed tracking-wide text-gray-400">
                    {item.desc}
                </p>
            
            
                <div className="mt-6 flex items-center gap-6 ">
                    <div className="h-10 w-10 overflow-hidden rounded-full shadow-sm outline-neutral-800">
                        <div className="relative inline-block overflow-hidden rounded-lg border-neutral-800">
                            <Image alt="" src={item.image} width="50" height="50"
                                decoding="async" data-nimg="1" className="inline-block " loading="lazy" />
                        </div>
                    </div>
                    <div>
                        <p className="leading-relaxed tracking-wide text-gray-200">{item.name}</p>
                        <p className="text-xs leading-relaxed tracking-wide text-gray-400">{item.email}</p>
                    </div>
                </div>
            
            
            </div>
            ))
        }
        {/* card1 */}
       
      </div>
      
      </div>


    </div>
  );
};

export default Testimonial;
