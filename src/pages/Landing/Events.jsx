import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useEffect, useRef } from "react";
import EventBox from "../../components/EventBox";

const Events = () => {
  const DUMMY__DATA = [
    {
      location: "London, UK",
      date: "15 JUNE",
      title: "Medical Chemistry: The Molecular Basis",
    },
    {
      location: "London, UK",
      date: "15 JUNE",
      title: "Medical Chemistry: The Molecular Basis",
    },
    {
      location: "London, UK",
      date: "15 JUNE",
      title: "Medical Chemistry: The Molecular Basis",
    },
    {
      location: "London, UK",
      date: "15 JUNE",
      title: "Medical Chemistry: The Molecular Basis",
    },
    {
      location: "London, UK",
      date: "15 JUNE",
      title: "Medical Chemistry: The Molecular Basis",
    },
    {
      location: "London, UK",
      date: "15 JUNE",
      title: "Medical Chemistry: The Molecular Basis",
    },
    {
      location: "London, UK",
      date: "15 JUNE",
      title: "Medical Chemistry: The Molecular Basis",
    },
  ];
  const container = useRef();
  const leftArrow = useRef();
  const rightArrow = useRef();
  useEffect(() => {
    const ArrowTranslationCalculation = () => {
      const dotsContainer = document.querySelector(
        ".event-slider .splide__pagination"
      );
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
    <div className="wrapper mt-16">
      <div className="contain justify-start items-start flex-col ">
        <div className="flex w-full justify-between sm:flex-row flex-col items-center gap-4">
          <div className="flex justify-start items-start flex-col gap-1">
            <h3 className="title">Upcoming Events</h3>
            <p className="sub">10,000+ unique online course list designs</p>
          </div>
          <button className="bg-[#6440FB12] hover:bg-purple hover:text-white transition-all duration-300 rounded-full h-[50px] w-[220px]  px-[29px] border-none flex justify-around items-center gap-4 text-purple text-[15px] font-normal">
            Browse Event
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
        <div
          ref={container}
          className="w-full mt-10 overflow-hidden pb-[100px]"
        >
          <Splide
            options={{
              pauseOnHover: false,
              perPage: 4,
              gap: "30px",
              width: "100%",
              autoplay: true,
              //   autoWidth: true,
              pagination: true,
              arrows: true,
              type: "loop",
              perMove: 1,
              breakpoints: {
                1280: {
                  perPage: 3,
                },
                970: {
                  perPage: 2,
                },
                650: {
                  perPage: 1,
                },
              },
            }}
            hasTrack={false}
            className="event-slider"
          >
            <SplideTrack>
              {DUMMY__DATA.map((elem, idx) => {
                return (
                  <SplideSlide key={idx + new Date() + "event"}>
                    <EventBox {...elem} />
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

export default Events;
