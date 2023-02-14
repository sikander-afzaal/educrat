const Journey = () => {
  return (
    <div className="wrapper py-[50px] lg:pt-[100px] mt-0 lg:mt-10 bg-[#282664]">
      <div className="contain lg:gap-0 gap-10 flex-col  justify-center items-center">
        <div className="flex text-center justify-start items-center flex-col gap-1 ">
          <h2 className="text-white text-[30px] font-bold">
            Start your Learning Journey Today!
          </h2>
          <p className="text-white font-normal text-[15px]">
            Lorem ipsum dolor sit amet, consectetur.
          </p>
        </div>
        <div className="grid lg:translate-y-1/2 grid-cols-fluid lg:grid-cols-4 w-full gap-4 xl:gap-8">
          <JourneyBox
            title="Learn with Experts"
            img="/journey1.png"
            desc="Grursus mal suada faci lisis that ipsum ameti consecte."
          />
          <JourneyBox
            title="Learn Anything"
            img="/journey2.png"
            desc="Grursus mal suada faci lisis that ipsum ameti consecte."
          />
          <JourneyBox
            title="Flexible Learning"
            img="/journey3.png"
            desc="Grursus mal suada faci lisis that ipsum ameti consecte."
          />
          <JourneyBox
            title="Industrial Standard"
            img="/journey4.png"
            desc="Grursus mal suada faci lisis that ipsum ameti consecte."
          />
        </div>
      </div>
    </div>
  );
};

export default Journey;

const JourneyBox = ({ img, title, desc }) => {
  return (
    <div className="flex justify-center text-center items-center flex-col gap-3 bg-white rounded-lg shadow-shadow4 p-6">
      <img src={img} alt="" />
      <h3 className="text-lg mt-2 text-nightBlue font-medium ">{title}</h3>
      <p className="text-dusk text-sm">{desc}</p>
    </div>
  );
};
