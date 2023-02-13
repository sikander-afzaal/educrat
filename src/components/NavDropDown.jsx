const NavDropDown = ({ name }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <button className="flex justify-center items-center gap-1 bg-transparent border-none text-lg lg:text-[15px] font-normal text-nightBlue">
        {name}
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
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default NavDropDown;
