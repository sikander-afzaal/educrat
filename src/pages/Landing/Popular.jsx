import { useState } from "react";
import PopularCourseBox from "../../components/PopularCourseBox";
import useOutsideClick from "../../hooks/useOutsideClick";

const Popular = () => {
  const DATA = [
    {
      banner: "/popular.png",
      stars: 5,
      rating: "4.5",
      title: "Learn Figma - UI/UX Design Essential Training",
      lessons: "6",
      duration: "3h 56m",
      level: "Beginner",
      teacher: "Ali Turfan",
      price: "179",
      discount: "79",
    },
    {
      banner: "/popular.png",
      stars: 5,
      rating: "4.5",
      title: "Complete Python Bootcamp From Zero to Hero in Python",
      lessons: "6",
      duration: "3h 56m",
      level: "Beginner",
      teacher: "Ali Turfan",
      price: "179",
      discount: "79",
    },
    {
      banner: "/popular.png",
      stars: 5,
      rating: "4.5",
      title: "Angular - The Complete Guide (2022 Edition)",
      lessons: "6",
      duration: "3h 56m",
      level: "Beginner",
      teacher: "Ali Turfan",
      price: "179",
      discount: "79",
    },
    {
      banner: "/popular.png",
      stars: 5,
      rating: "4.5",
      title: "The Ultimate Drawing Course Beginner to Advanced",
      lessons: "6",
      duration: "3h 56m",
      level: "Beginner",
      teacher: "Ali Turfan",
      price: "179",
      discount: "79",
    },
    {
      banner: "/popular.png",
      stars: 5,
      rating: "4.5",
      title: "Photography Masterclass: A Complete Guide to Photography",
      lessons: "6",
      duration: "3h 56m",
      level: "Beginner",
      teacher: "Ali Turfan",
      price: "179",
      discount: "79",
    },
    {
      banner: "/popular.png",
      stars: 5,
      rating: "4.5",
      title: "Instagram Marketing 2021: Complete Guide To Instagram",
      lessons: "6",
      duration: "3h 56m",
      level: "Beginner",
      teacher: "Ali Turfan",
      price: "179",
      discount: "79",
    },
    {
      banner: "/popular.png",
      stars: 5,
      rating: "4.5",
      title: "Complete Blender Creator: Learn 3D Modelling for Beginners",
      lessons: "6",
      duration: "3h 56m",
      level: "Beginner",
      teacher: "Ali Turfan",
      price: "179",
      discount: "79",
    },
    {
      banner: "/popular.png",
      stars: 5,
      rating: "4.5",
      title: "The Complete Financial Analyst Training & Investing Course",
      lessons: "6",
      duration: "3h 56m",
      level: "Beginner",
      teacher: "Ali Turfan",
      price: "179",
      discount: "79",
    },
  ];

  return (
    <div className="wrapper mt-10 pb-10">
      <div className="contain justify-center items-center flex-col gap-5">
        <div className="flex justify-center items-center text-center flex-col gap-2">
          <h2 className="title">Our Most Popular Courses</h2>
          <p className="sub">10,000+ unique online course list designs</p>
        </div>
        <div className="flex w-full justify-center sm:flex-row flex-col items-center gap-5 mt-5">
          <PopularDropDown
            name="Category"
            options={["Web Dev", "Photoshop", "Drawing"]}
          />
          <PopularDropDown
            name="Rating"
            options={["5", "4.5", "4", "3", "2", "1"]}
          />
          <PopularDropDown
            name="Difficulty"
            options={["Hard", "Medium", "Beginner"]}
          />
        </div>
        <div className="w-full grid auto-rows-fr mt-3 grid-cols-fluid gap-6">
          {DATA.map((elem) => {
            return <PopularCourseBox {...elem} key={elem.title} />;
          })}
        </div>
        <button className="rounded-lg mt-6 text-nightBlue text-base font-normal bg-transparent hover:bg-[#ededed]  border-2 border-[#ededed] border-solid w-[228px] h-[60px] transition-all duration-300">
          View All Courses
        </button>
      </div>
    </div>
  );
};

export default Popular;

const PopularDropDown = ({ name, options }) => {
  const [activeDrop, setActiveDrop] = useState(false);
  const [dropVal, setDropVal] = useState(name);
  const handleClickOutside = () => {
    setActiveDrop(false);
  };
  const dropRef = useOutsideClick(handleClickOutside);
  return (
    <div className="relative flex w-full sm:w-auto justify-center items-center flex-col">
      <button
        onClick={() => setActiveDrop((prev) => !prev)}
        className="w-full sm:w-[143px] h-[40px] flex justify-between items-center px-3 bg-[#EEF2F6] rounded-lg text-nightBlue text-sm font-normal border-none capitalize "
      >
        {dropVal}{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-3 h-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
      {activeDrop && (
        <div
          ref={dropRef}
          className="flex absolute top-full left-0 w-full justify-start items-start flex-col bg-[#EEF2F6] rounded-br-lg rounded-bl-lg  px-2 py-2"
        >
          {options.map((elem, idx) => {
            return (
              <p
                key={idx + elem + new Date()}
                onClick={(e) => {
                  setActiveDrop(false);
                  setDropVal(e.target.innerText);
                }}
                className="text-sm cursor-pointer hover:bg-nightBlue hover:text-white transition-all duration-150 w-full rounded-lg text-nightBlue capitalize px-2 py-2"
              >
                {elem}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};
