const Hero = () => {
  return (
    <div className="wrapper py-[100px] lg:py-[130px] bg-hero bg-contain sm:bg-cover 2xl:bg-contain bg-center bg-no-repeat">
      <div className="flex w-[90%] lg:flex-row flex-col max-w-[1600px]  justify-between items-center gap-10">
        <div className="flex w-full xl:min-w-[690px] justify-start items-center text-center sm:text-left sm:items-start flex-col gap-3">
          <h4 className="font-bold text-[17px] leading-[1] text-orange capitalize">
            Start Learning For Free
          </h4>
          <h2 className="text-darkIndigo leading-[1.3] text-[35px] sm:text-[45px] xl:text-[55px] font-bold capitalize">
            Studies can now be done <br className="xl:block hidden" />
            online much easily
          </h2>
          <p className="text-nightBlue capitalize max-w-[370px]">
            You can access 7900+ different courses from 600
          </p>
          <p className="text-nightBlue capitalize  max-w-[370px]">
            professional trainers for free
          </p>
          <div className="w-full mt-5 mb-3 bg-white rounded-full max-w-[640px] h-[70px] px-2 border border-solid border-[#ecedf2] shadow-shadow1 flex justify-between items-center gap-1">
            <input
              type="text"
              className="w-full pl-4 border-none outline-none h-full text-dusk text-[15px] font-normal bg-transparent"
              placeholder="What do you want to learn today?"
            />
            <button className="bg-sunglow rounded-full h-[50px] min-w-[120px] sm:min-w-[150px] flex justify-center items-center gap-2 text-darkIndigo font-normal text-base hover:bg-transparent border-2 border-solid border-sunglow transition-all duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>{" "}
              Search
            </button>
          </div>
          <p className="text-[15px] font-sofia font-normal  text-[#696969]">
            <span className="text-[#202124] mr-2 ">Popular Searches:</span>{" "}
            Designer, Developer, Web, IOS, PHP, Senior, Engineer
          </p>
        </div>
        <div className="bg-white w-full  max-w-[620px] shadow-shadow2 pb-3 rounded-lg">
          <img src="/hero-img.png" className="object-contain w-full " alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
