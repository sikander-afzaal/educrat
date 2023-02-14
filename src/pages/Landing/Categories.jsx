import CategoryBox from "../../components/CategoryBox";

const Categories = () => {
  const CATEGORIES__DATA = [
    {
      name: "Digtal Marketing",
      img: "/cat1.png",
      courses: "573+",
    },
    {
      name: "Web Development",
      img: "/cat2.png",
      courses: "573+",
    },
    {
      name: "Graphic Design",
      img: "/cat3.png",
      courses: "573+",
    },
    {
      name: "Social Sciences",
      img: "/cat4.png",
      courses: "573+",
    },
    {
      name: "Photohraphy",
      img: "/cat5.png",
      courses: "573+",
    },
    {
      name: "Art & Humanities",
      img: "/cat6.png",
      courses: "573+",
    },
    {
      name: "Personal Development",
      img: "/cat7.png",
      courses: "573+",
    },
    {
      name: "IT and Software",
      img: "/cat8.png",
      courses: "573+",
    },
  ];
  return (
    <div className="wrapper mt-10">
      <div className="contain flex-col items-center justify-start">
        <div className="justify-center items-center w-full flex ">
          {/* <div className="flex justify-center items-center gap-3 flex-col max-w-[300px] text-center">
            <h3 className="text-black font-bold text-xl">What is Quomeda ?</h3>
            <p>
              Going beyond traditional market research to unleash the full
              potential of research ecosystem
            </p>
          </div> */}
          <div className="flex justify-center flex-wrap items-center gap-3">
            <button className="bg-[#6440FB12] hover:bg-purple hover:text-white transition-all duration-300 rounded-lg h-[50px] w-full sm:w-auto px-[29px] border-none flex justify-center items-center gap-2 text-purple text-[15px] font-normal">
              For Companies
            </button>
            <button className="bg-[#6440FB12] hover:bg-purple hover:text-white transition-all duration-300 rounded-lg h-[50px] w-full sm:w-auto px-[29px] border-none flex justify-center items-center gap-2 text-purple text-[15px] font-normal">
              For Healthcare Professionals
            </button>
            <button className="bg-[#6440FB12] hover:bg-purple hover:text-white transition-all duration-300 rounded-lg h-[50px] w-full sm:w-auto px-[29px] border-none flex justify-center items-center gap-2 text-purple text-[15px] font-normal">
              For Everyone
            </button>
            <button className="bg-[#6440FB12] hover:bg-purple hover:text-white transition-all duration-300 rounded-lg h-[50px] w-full sm:w-auto px-[29px] border-none flex justify-center items-center gap-2 text-purple text-[15px] font-normal">
              For Market Research Agencies
            </button>
            <button className="bg-[#6440FB12] hover:bg-purple hover:text-white transition-all duration-300 rounded-lg h-[50px] w-full sm:w-auto px-[29px] border-none flex justify-center items-center gap-2 text-purple text-[15px] font-normal">
              All Categories{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="grid gap-5 mt-10 sm:mt-16 place-items-center grid-cols-fluid w-full auto-rows-[100px]">
          {CATEGORIES__DATA.map((elem) => {
            return <CategoryBox key={elem.name} {...elem} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
