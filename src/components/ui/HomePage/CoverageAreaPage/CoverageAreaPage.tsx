const CoverageAreaPage = () => {
  return (
    <div className="py-10 lg:py-16">
      <div className="w-11/12  lg:w-8/12 mx-auto py-10 lg:py-16">
        {/* nav */}
        <h4 className="text-red-500 font-bold text-center">COVERAGE AREA</h4>
        <h1 className="text-4xl font-bold my-4 leading-[36px] text-center ">
          Now we are available on
        </h1>
        <div className="mt-10 lg:mt-16 grid grid-cols-1 lg:grid-cols-4 gap-4 ">
          {[
            { id: 1, value: "Dhaka" },
            { id: 2, value: "Rajshahi" },
            { id: 3, value: "khulna" },
            { id: 4, value: "Sylhet" },
          ].map((item: any) => (
            <div key={item.id} className="">
            <div  className="px-6 py-6 border shadow-lg text-center lg:hover:scale-110 duration-300"
            style={{
                boxShadow: "5px 5px 25px red"
              }}
            >
              {item.value}
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoverageAreaPage;
