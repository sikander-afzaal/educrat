const Trusted = () => {
  return (
    <div className="lg:pb-[190px] relative isolate py-[80px] lg:pt-[120px] bg-[#f7f8fb] maskTrusted wrapper mt-20">
      <img src="/deco3.png" className="absolute left-[5%] top-[18%]" alt="" />
      <img src="/deco4.png" className="absolute left-[5%] top-[65%]" alt="" />
      <div className="contain justify-between xl:flex-row flex-col items-center gap-12 xl:gap-5">
        <div className="relative isolate">
          <img
            src="/deco1.png"
            className="absolute right-0 bottom-0 translate-y-1/2 md:translate-x-1/2 -z-10"
            alt=""
          />
          <img
            src="/deco2.png"
            className="absolute right-0 top-0 md:translate-x-1/2 -z-10"
            alt=""
          />
          <img
            src="/trusted-img.png"
            className="max-w-[590px] w-full object-contain"
            alt=""
          />
        </div>
        <div className="flex justify-start max-w-[520px] items-center text-center lg:text-left lg:items-start flex-col gap-5">
          <h2 className="text-nightBlue text-[30px] font-bold max-w-[300px]">
            Trusted By Best Teachers
          </h2>
          <p className="text-dusk font-normal text-[15px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <div className=" flex justify-start items-start flex-col gap-4 mt-3 mb-5">
            <div className="flex justify-start items-center gap-3">
              <div className="bg-purple flex justify-center items-center text-white rounded-full aspect-square w-[25px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </div>
              <p className="text-[15px] text-nightBlue">
                Last Education of Bachelor Degree
              </p>
            </div>
            <div className="flex justify-start items-center gap-3">
              <div className="bg-purple flex justify-center items-center text-white rounded-full aspect-square w-[25px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </div>
              <p className="text-[15px] text-nightBlue">
                More Than 15 Years Experience
              </p>
            </div>
            <div className="flex justify-start items-center gap-3">
              <div className="bg-purple flex justify-center items-center text-white rounded-full aspect-square w-[25px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </div>
              <p className="text-[15px] text-nightBlue">
                12 Education Award Winning
              </p>
            </div>
          </div>
          <button className="text-white bg-darkIndigo w-[204px] h-[55px] border-2 border-solid border-darkIndigo hover:bg-transparent hover:text-darkIndigo transition-all duration-300 rounded-lg text-base">
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Trusted;
