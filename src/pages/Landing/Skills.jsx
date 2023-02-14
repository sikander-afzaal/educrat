const Skills = () => {
  return (
    <div className="wrapper mt-10">
      <div className="contain lg:flex-row flex-col justify-between items-center gap-10 ">
        <div className="flex max-w-[480px] justify-start items-center text-center lg:text-left lg:items-start flex-col gap-5">
          <h3 className="text-[30px] md:text-[45px] leading-[1.2] font-bold text-nightBlue">
            <span className="text-purple">Learn </span>
            new skills when and where you like.
          </h3>
          <p className="sub">
            Use the list below to bring attention to your product’s key
            differentiator.
          </p>
          <button className="text-white bg-darkIndigo w-[204px] h-[55px] border-2 border-solid border-darkIndigo hover:bg-transparent hover:text-darkIndigo transition-all duration-300 rounded-lg text-base">
            Join Free
          </button>
        </div>
        <div className="relative max-w-[450px] lg:max-w-[320px] xl:max-w-[520px] w-full">
          <img src="/skill.png" className="object-contain w-full " alt="" />
          <div className="absolute bg-[#282664] flex justify-start items-start flex-col gap-8 px-6 py-10 left-1/2 md:left-0 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-lg w-max">
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
              <p className="text-[15px] font-medium text-white">
                Hand-picked authors
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
              <p className="text-[15px] font-medium text-white">
                Easy to follow curriculum
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
              <p className="text-[15px] font-medium text-white">Free courses</p>
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
              <p className="text-[15px] font-medium text-white">
                Money-back guarantee
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
