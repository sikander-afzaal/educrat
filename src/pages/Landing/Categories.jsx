import { useState } from "react";
import CategoryBox from "../../components/CategoryBox";

const Categories = () => {
  const CATEGORIES__DATA = [
    {
      filter: "companies",
      name: "Digtal Marketing",
      img: "/cat1.png",
      courses: "573+",
    },
    {
      filter: "market",
      name: "Web Development",
      img: "/cat2.png",
      courses: "573+",
    },
    {
      filter: "everyone",
      name: "Graphic Design",
      img: "/cat3.png",
      courses: "573+",
    },
    {
      filter: "healthcare",
      name: "Social Sciences",
      img: "/cat4.png",
      courses: "573+",
    },
    {
      filter: "everyone",
      name: "Photohraphy",
      img: "/cat5.png",
      courses: "573+",
    },
    {
      filter: "market",
      name: "Art & Humanities",
      img: "/cat6.png",
      courses: "573+",
    },
    {
      filter: "healthcare",
      name: "Personal Development",
      img: "/cat7.png",
      courses: "573+",
    },
    {
      filter: "companies",
      name: "IT and Software",
      img: "/cat8.png",
      courses: "573+",
    },
  ];
  const [selectedCategory, setSelectedCategory] = useState("companies");
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
            <button
              onClick={() => setSelectedCategory("companies")}
              className={` hover:bg-purple hover:text-white transition-all duration-300 rounded-lg h-[50px] w-full sm:w-auto px-[29px] border-none flex justify-center items-center gap-2  text-[15px] font-normal ${
                selectedCategory === "companies"
                  ? "bg-purple text-white"
                  : "bg-[#6440FB12] text-purple"
              }`}
            >
              For Companies
            </button>
            <button
              onClick={() => setSelectedCategory("healthcare")}
              className={` hover:bg-purple hover:text-white transition-all duration-300 rounded-lg h-[50px] w-full sm:w-auto px-[29px] border-none flex justify-center items-center gap-2  text-[15px] font-normal ${
                selectedCategory === "healthcare"
                  ? "bg-purple text-white"
                  : "bg-[#6440FB12] text-purple"
              }`}
            >
              For Healthcare Professionals
            </button>
            <button
              onClick={() => setSelectedCategory("everyone")}
              className={` hover:bg-purple hover:text-white transition-all duration-300 rounded-lg h-[50px] w-full sm:w-auto px-[29px] border-none flex justify-center items-center gap-2  text-[15px] font-normal ${
                selectedCategory === "everyone"
                  ? "bg-purple text-white"
                  : "bg-[#6440FB12] text-purple"
              }`}
            >
              For Everyone
            </button>
            <button
              onClick={() => setSelectedCategory("market")}
              className={` hover:bg-purple hover:text-white transition-all duration-300 rounded-lg h-[50px] w-full sm:w-auto px-[29px] border-none flex justify-center items-center gap-2  text-[15px] font-normal ${
                selectedCategory === "market"
                  ? "bg-purple text-white"
                  : "bg-[#6440FB12] text-purple"
              }`}
            >
              For Market Research Agencies
            </button>
            <button
              onClick={() => setSelectedCategory("all")}
              className={` hover:bg-purple hover:text-white transition-all duration-300 rounded-lg h-[50px] w-full sm:w-auto px-[29px] border-none flex justify-center items-center gap-2  text-[15px] font-normal ${
                selectedCategory === "all"
                  ? "bg-purple text-white"
                  : "bg-[#6440FB12] text-purple"
              }`}
            >
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
          {CATEGORIES__DATA.filter((elem) => {
            if (selectedCategory === "all") return elem;
            return selectedCategory === elem.filter ? elem : "";
          }).map((elem) => {
            return <CategoryBox key={elem.name} {...elem} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
