import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useEffect, useRef } from "react";
import InstructorBox from "../../components/InstructorBox";

const Instructors = () => {
  const DUMMY__DATA = [
    {
      img: "/user.png",
      urls: { twitter: "#", linkedin: "#", fb: "#", insta: "#" },
      name: "Floyed Miles",
      role: "President of Sales",
      rating: "4.5",
      students: "692",
      courses: "15",
    },
    {
      img: "/user.png",
      urls: { twitter: "#", linkedin: "#", fb: "#", insta: "#" },
      name: "Floyed Miles",
      role: "President of Sales",
      rating: "4.5",
      students: "692",
      courses: "15",
    },
    {
      img: "/user.png",
      urls: { twitter: "#", linkedin: "#", fb: "#", insta: "#" },
      name: "Floyed Miles",
      role: "President of Sales",
      rating: "4.5",
      students: "692",
      courses: "15",
    },
    {
      img: "/user.png",
      urls: { twitter: "#", linkedin: "#", fb: "#", insta: "#" },
      name: "Floyed Miles",
      role: "President of Sales",
      rating: "4.5",
      students: "692",
      courses: "15",
    },
    {
      img: "/user.png",
      urls: { twitter: "#", linkedin: "#", fb: "#", insta: "#" },
      name: "Floyed Miles",
      role: "President of Sales",
      rating: "4.5",
      students: "692",
      courses: "15",
    },
    {
      img: "/user.png",
      urls: { twitter: "#", linkedin: "#", fb: "#", insta: "#" },
      name: "Floyed Miles",
      role: "President of Sales",
      rating: "4.5",
      students: "692",
      courses: "15",
    },
    {
      img: "/user.png",
      urls: { twitter: "#", linkedin: "#", fb: "#", insta: "#" },
      name: "Floyed Miles",
      role: "President of Sales",
      rating: "4.5",
      students: "692",
      courses: "15",
    },
    {
      img: "/user.png",
      urls: { twitter: "#", linkedin: "#", fb: "#", insta: "#" },
      name: "Floyed Miles",
      role: "President of Sales",
      rating: "4.5",
      students: "692",
      courses: "15",
    },
    {
      img: "/user.png",
      urls: { twitter: "#", linkedin: "#", fb: "#", insta: "#" },
      name: "Floyed Miles",
      role: "President of Sales",
      rating: "4.5",
      students: "692",
      courses: "15",
    },
    {
      img: "/user.png",
      urls: { twitter: "#", linkedin: "#", fb: "#", insta: "#" },
      name: "Floyed Miles",
      role: "President of Sales",
      rating: "4.5",
      students: "692",
      courses: "15",
    },
  ];
  const container = useRef();
  const leftArrow = useRef();
  const rightArrow = useRef();
  useEffect(() => {
    const ArrowTranslationCalculation = () => {
      const dotsContainer = document.querySelector(".splide__pagination");
      const dotsContainerWidth = dotsContainer.clientWidth;
      const widthToBeMoved = dotsContainerWidth + leftArrow.current.clientWidth;
      const widthOfContainer = container.current.clientWidth;
      leftArrow.current.style.left = `${
        widthOfContainer / 2 - widthToBeMoved
      }px`;
      rightArrow.current.style.right = `${
        widthOfContainer / 2 - widthToBeMoved
      }px`;
    };
    ArrowTranslationCalculation();
    window.addEventListener("resize", ArrowTranslationCalculation);
    return () => {
      window.removeEventListener("resize", ArrowTranslationCalculation);
    };
  }, []);

  return (
    <div className="wrapper mt-24">
      <div className="contain lg:flex-row flex-col justify-between items-center lg:items-start gap-[50px] sm:gap-[100px]">
        <div className="gap-5 flex justify-start items-center lg:items-start lg:text-left text-center flex-col max-w-[340px]">
          <h3 className="title">Learn from the best instructors</h3>
          <p className="sub">
            Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit.
            Felis donec massa aliquam id dolor .
          </p>
          <button className="text-orange bg-[#E8543E26] w-[220px] h-[50px] border-0 hover:bg-orange hover:text-white transition-all duration-300 rounded-lg text-base flex justify-center items-center gap-3">
            View All İnstructors{" "}
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
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </button>
        </div>
        <div
          ref={container}
          className="flex overflow-x-hidden pb-[100px] justify-center items-center w-full"
        >
          <Splide
            options={{
              perPage: 3,
              gap: "20px",
              width: "100%",
              pagination: true,
              arrows: true,
              type: "loop",
              perMove: 1,
              breakpoints: {
                1280: {
                  perPage: 2,
                },
                510: {
                  perPage: 1,
                },
              },
            }}
            hasTrack={false}
          >
            <SplideTrack>
              {DUMMY__DATA.map((elem, idx) => {
                return (
                  <SplideSlide key={idx + new Date()}>
                    <InstructorBox {...elem} />
                  </SplideSlide>
                );
              })}
            </SplideTrack>
            <div className="splide__arrows">
              <button
                ref={leftArrow}
                className="splide__arrow splide__arrow--prev rotate-180 -translate-y-1/2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#1A064F"
                  className="w-6 h-6 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
              </button>
              <button
                ref={rightArrow}
                className="splide__arrow splide__arrow--next"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#1A064F"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </Splide>
        </div>
      </div>
    </div>
  );
};

export default Instructors;
