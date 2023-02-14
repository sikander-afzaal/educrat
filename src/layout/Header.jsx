import { useState } from "react";
import NavDropDown from "../components/NavDropDown";

const Header = () => {
  const [headerToggle, setHeaderToggle] = useState(false);
  return (
    <div className="wrapper bg-white shadow-shadow1 fixed py-3 top-0 left-0 z-[50]">
      {headerToggle && (
        <div
          onClick={() => setHeaderToggle(false)}
          className="lg:hidden block fixed top-0 left-0 bg-black opacity-60 z-[88] w-full h-full"
        ></div>
      )}
      <div className="flex justify-between items-center gap-5 w-[90%]">
        <nav className="flex justify-start items-center gap-5 2xl:gap-10">
          <div className="flex justify-center items-center gap-3">
            <img src="/logo.png" className="w-[47px] object-contain" alt="" />
            <h3 className="font-bold text-xl text-nightBlue">Educrat</h3>
          </div>
          <div
            className={`flex justify-start lg:justify-center items-center sm:items-start lg:items-center lg:overflow-visible overflow-y-auto gap-6 lg:gap-3 2xl:gap-6 fixed top-0 ${
              headerToggle ? "right-0" : "-right-[900px]"
            } lg:static h-full w-full max-w-[450px] lg:w-auto lg:h-auto lg:max-w-none lg:flex-row flex-col lg:p-0 px-[3rem] py-[5rem] transition-all duration-1000 z-[90] lg:bg-transparent bg-white border-l-2 border-solid border-nightBlue lg:border-none`}
          >
            <NavDropDown name="Home" />
            <NavDropDown name="Courses" />
            <NavDropDown name="Events" />
            <NavDropDown name="Blog" />
            <NavDropDown name="Pages" />
            <a
              onClick={() => setHeaderToggle(false)}
              href="#"
              className="text-nightBlue font-normal text-lg lg:text-[15px]"
            >
              Contact
            </a>
            <div className="flex flex-col lg:hidden justify-center items-center gap-6">
              <a href="#" className="text-lg font-normal text-darkIndigo">
                Log in
              </a>
              <button className="text-darkIndigo font-normal text-lg bg-sunglow rounded-lg w-[140px] h-[50px] border-2 border-solid border-sunglow hover:bg-transparent transition-all duration-300 ">
                Sign Up
              </button>
            </div>
          </div>
        </nav>
        <div className="flex justify-start items-center gap-6">
          <div className="hidden xl:flex justify-start bg-white items-center gap-3 border border-mercury border-solid rounded px-3 w-[250px] 2xl:w-[450px] h-[50px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#949DA6"
              className="min-w-5 min-h-5 max-h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <input
              type="text"
              placeholder="What Do You Want To Learn"
              className="text-[#77838F] bg-transparent w-full text-base font-normal border-none outline-none h-full"
            />
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#1A064F"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
          {headerToggle ? (
            <svg
              onClick={() => setHeaderToggle(false)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#1A064F"
              className="w-6 h-6 z-[91] relative cursor-pointer lg:hidden block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              onClick={() => setHeaderToggle(true)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#1A064F"
              className="w-6 h-6 z-[91] relative cursor-pointer lg:hidden block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          )}
          <div className="hidden lg:flex justify-center items-center gap-6">
            <a
              href="#"
              className="text-[15px] min-w-max font-normal text-darkIndigo"
            >
              Log in
            </a>
            <button className="text-darkIndigo font-normal text-[15px] bg-sunglow rounded-lg w-[140px] h-[50px] border-2 border-solid border-sunglow hover:bg-transparent transition-all duration-300 ">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
