const MobApp = () => {
  return (
    <div className="wrapper bg-[#E5F0FD] xl:rounded-2xl mb-[100px]  mx-auto max-w-[1500px] mt-[80px] lg:mt-[200px]">
      <div className="contain py-16 lg:flex-row flex-col   justify-between items-center gap-16 lg:gap-10">
        <div className="flex justify-start items-center text-center lg:text-left lg:items-start gap-5 flex-col">
          <h3 className="title leading-[1]">Download the App</h3>
          <p className="sub max-w-[280px]">
            New features. New appearance. No risk and credit card required.
          </p>
          <div className="flex justify-start sm:flex-row flex-col items-center gap-6">
            <button className="bg-nightBlue rounded-lg h-[60px] w-[210px] flex justify-start items-center px-5 border-none gap-5">
              <img
                src="/apple.png"
                className="object-contain h-[30px]"
                alt=""
              />
              <div className="flex justify-start items-start flex-col  border-l border-solid border-[rgba(255,255,255,0.15)] pl-5">
                <p className="text-white text-[13px]">Download on the</p>
                <p className="text-white text-[15px] font-medium">
                  Apple Store
                </p>
              </div>
            </button>
            <button className="bg-nightBlue rounded-lg h-[60px] w-[210px] flex justify-start items-center px-5 border-none gap-5">
              <img
                src="/playstore.png"
                className="object-contain h-[30px]"
                alt=""
              />
              <div className="flex justify-start items-start flex-col  border-l border-solid border-[rgba(255,255,255,0.15)] pl-5">
                <p className="text-white text-[13px]">Get in on</p>
                <p className="text-white text-[15px] font-medium">
                  Google Play
                </p>
              </div>
            </button>
          </div>
        </div>
        <img
          src="/app.png"
          className="max-w-[620px] lg:max-w-[450px] xl:max-w-[624px] w-full object-contain"
          alt=""
        />
      </div>
    </div>
  );
};

export default MobApp;
