const PopularCourseBox = ({
  banner,
  stars,
  rating,
  title,
  lessons,
  duration,
  level,
  teacher,
  price,
  discount,
}) => {
  return (
    <div className="flex bg-white shadow-shadow1 justify-start items-start flex-col gap-3 rounded-lg overflow-hidden border border-solid border-[#ededed]">
      <img src={banner} className="w-full h-[210px] object-cover" alt="" />
      <div className="w-full px-5 pb-4 flex justify-start items-start flex-col gap-2">
        <div className="flex justify-start items-center gap-2">
          <p className="text-[#E59819] text-sm ">{rating}</p>
          <div className="flex justify-center items-center gap-[2px]">
            {Array(stars)
              .fill(false)
              .map((elem, idx) => {
                return (
                  <svg
                    key={title + idx}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#E59819"
                    className="w-3 h-3"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                );
              })}
          </div>
          <p className="text-dusk text-[13px]">(1991)</p>
        </div>
        <h3 className="text-nightBlue text-[17px] font-normal">{title}</h3>
        <div className="flex mt-1 justify-between w-full items-center gap-2">
          <div className="flex text-dusk justify-center items-center gap-1">
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
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              />
            </svg>
            <p className="text-sm">{lessons} Lessons</p>
          </div>
          <div className="flex text-dusk justify-center items-center gap-1">
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
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-sm">{duration}</p>
          </div>
          <div className="flex text-dusk justify-center items-center gap-1">
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
                d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
              />
            </svg>
            <p className="text-sm capitalize">{level}</p>
          </div>
        </div>
        <div className="border-t pt-3 mt-1 border-solid border-[#EDEDED] w-full flex justify-between items-center gap-1">
          <div className="flex justify-start items-center gap-2">
            <img src="/user.png" className="w-[30px] object-contain" alt="" />
            <p className="text-dusk text-sm">{teacher}</p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <p className="text-[15px] line-through text-dusk">${price}</p>
            <p className="text-lg  text-nightBlue">${discount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCourseBox;
