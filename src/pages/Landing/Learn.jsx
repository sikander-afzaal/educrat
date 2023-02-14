import ReviewBox from "../../components/ReviewBox";
//slider-------
import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";
import { useRef, useState } from "react";

const Learn = () => {
  const slides = [
    {
      name: "Courtney Henry",
      role: "Web Designer",
      img: "/user.png",
      review:
        " “I think Educrat is the best theme I ever seen this year. Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance”",
      title: "Great Work",
    },
    {
      name: "Courtney Henry",
      role: "Web Designer",
      img: "/user.png",
      review:
        " “I think Educrat is the best theme I ever seen this year. Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance”",
      title: "Great Work",
    },
    {
      name: "Courtney Henry",
      role: "Web Designer",
      img: "/user.png",
      review:
        " “I think Educrat is the best theme I ever seen this year. Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance”",
      title: "Great Work",
    },
    {
      name: "Courtney Henry",
      role: "Web Designer",
      img: "/user.png",
      review:
        " “I think Educrat is the best theme I ever seen this year. Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance”",
      title: "Great Work",
    },
    {
      name: "Courtney Henry",
      role: "Web Designer",
      img: "/user.png",
      review:
        " “I think Educrat is the best theme I ever seen this year. Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance”",
      title: "Great Work",
    },
  ];
  const ref = useRef();
  const [currentSlideIdx, setCurrentSlideIdx] = useState(0);

  return (
    <div className="lg:pb-[220px] relative isolate py-[80px] lg:pt-[120px] bg-darkIndigo maskTrusted wrapper mt-16">
      <div className="contain flex-col gap-8 justify-center items-center">
        <div className="w-full flex justify-between items-center gap-12 lg:flex-row flex-col lg:gap-16">
          <div className="flex justify-start items-center lg:items-start flex-col lg:text-left text-center gap-10 lg:gap-16">
            <div className="flex justify-start items-center lg:items-start flex-col">
              <h3 className="text-white text-[30px] font-bold">
                People Love To Learn With Educrat
              </h3>
              <p className="text-white text-[15px]">
                Lorem ipsum dolor sit amet, consectetur.
              </p>
            </div>
            <div className="flex justify-start items-center gap-10">
              <div className="flex justify-start items-center lg:items-start flex-col gap-2">
                <h3 className="font-bold text-[45px] text-white">9/10</h3>
                <p className="text-[15px] text-white max-w-[270px]">
                  9/10 users reported better learning outcomes.
                </p>
              </div>
              <div className="flex justify-start items-center lg:items-start flex-col gap-2">
                <h3 className="font-bold text-[45px] text-white">85%</h3>
                <p className="text-[15px] text-white max-w-[270px]">
                  85% of students see their course through to completion
                </p>
              </div>
            </div>
          </div>
          {/* //clasess --- className="w-full max-w-[610px]" */}
          <div className="w-full max-w-[610px] relative">
            <div className="absolute z-20 top-full sm:bottom-0 left-1/2 -translate-x-1/2 flex justify-center items-center gap-3">
              <svg
                onClick={() => ref.current.swipeTo(-1)}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-6 h-6 cursor-pointer select-none"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
              {slides.map((elem, idx) => {
                return (
                  <div
                    onClick={() => ref.current.swipeTo(idx)}
                    key={idx}
                    className={`w-[8px] cursor-pointer aspect-square rounded-full ${
                      idx === currentSlideIdx ? "bg-purple" : "bg-[#FFFFFF80]"
                    } `}
                  ></div>
                );
              })}
              <svg
                onClick={() => ref.current.swipeTo(1)}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-6 h-6 cursor-pointer select-none"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
            <ResponsiveContainer
              carouselRef={ref}
              render={(parentWidth, carouselRef) => {
                let currentVisibleSlide = 3;
                if (parentWidth <= 1280) currentVisibleSlide = 3;
                if (parentWidth <= 720) currentVisibleSlide = 1;
                return (
                  <StackedCarousel
                    ref={carouselRef}
                    slideComponent={ReviewBox}
                    slideWidth={parentWidth <= 430 ? parentWidth : 430}
                    carouselWidth={parentWidth}
                    data={slides}
                    maxVisibleSlide={3}
                    height={350}
                    useGrabCursor
                    onActiveSlideChange={(newCenterDataIndex) =>
                      setCurrentSlideIdx(newCenterDataIndex)
                    }
                    swipeThreshold={100}
                    // currentVisibleSlide={currentVisibleSlide}
                  />
                );
              }}
            />
          </div>
        </div>
        <div className="flex justify-center w-full items-center flex-col text-center gap-10 sm:gap-16 mt-10">
          <p className="text-white font-sofia text-[15px]">
            Trusted by the world's best
          </p>
          <div className="flex justify-center sm:justify-between items-center gap-10 w-full flex-wrap">
            <img src="/amazon.png" className="object-contain " alt="" />
            <img src="/amd.png" className="object-contain " alt="" />
            <img src="/cisco.png" className="object-contain " alt="" />
            <img src="/dropcam.png" className="object-contain " alt="" />
            <img src="/logitech.png" className="object-contain " alt="" />
            <img src="/spotify.png" className="object-contain " alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
