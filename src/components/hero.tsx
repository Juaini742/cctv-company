function HeroSection() {
  return (
    <div className="md:h-[400px] w-[90%] mx-auto overflow-hidden flex flex-col justify-center items-center mt-10">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 w-full">
        <div className="flex-1 flex flex-col gap-3">
          <h1 className="text-4xl lg:text-5xl text-primary font-[500] text-center md:text-left">
            Professional <br />
            <span className="text-secondary font-[600]">Security Services</span>
            <br /> You Can Trust
          </h1>
          <p className="lg:w-[600px] text-sm leading-6 text-gray-500 text-center md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsa
            blanditiis soluta nulla pariatur aliquid, voluptatem eaque error,
            officia sapiente quis ipsum dicta animi quidem!
          </p>
          <div className="flex gap-4 justify-center md:justify-start ">
            {["11", "25", "100+"].map((item, index) => (
              <div
                key={index}
                className="p-3 rounded text-secondary flex justify-center flex-col items-center"
              >
                <h5 className="font-bold text-4xl ">{item}</h5>
                <span>Experience</span>
              </div>
            ))}
          </div>
        </div>
        <div className="">
          <div className="p-3 bg-white shadow-round rounded-t-full">
            <div className="w-64 h-96 overflow-hidden flex items-start rounded-t-full ">
              <img src="./hero.jpg" alt="" className="object-fill" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
