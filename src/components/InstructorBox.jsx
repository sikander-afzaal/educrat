const InstructorBox = ({
  img,
  urls: { twitter, linkedin, fb, insta },
  name,
  role,
  rating,
  students,
  courses,
}) => {
  return (
    <div className="flex justify-start items-center flex-col gap-3">
      <div className="relative group">
        <img
          src={img}
          className="aspect-square rounded-full w-[180px]"
          alt=""
        />
        <div className="opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 bg-[#1a064f99] absolute inset-0 z-20 rounded-full flex justify-around items-center px-3">
          <a href={fb} target={"blank"}>
            <img src="/fb.png" className="object-contain " alt="" />
          </a>
          <a href={twitter} target={"blank"}>
            <img src="/twitter.png" className="object-contain " alt="" />
          </a>
          <a href={insta} target={"blank"}>
            <img src="/insta.png" className="object-contain " alt="" />
          </a>
          <a href={linkedin} target={"blank"}>
            <img src="/linkedin.png" className="object-contain " alt="" />
          </a>
        </div>
      </div>
      <div className="text-[#E59819] flex justify-center items-center gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-[10px] h-[10px]"
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clipRule="evenodd"
          />
        </svg>
        <p className="text-inherit text-sm">{rating}</p>
      </div>
      <h4 className="capitalize text-[17px] text-nightBlue font-normal">
        {name}
      </h4>
      <h4 className="text-[15px] -mt-2 text-dusk font-normal">{role}</h4>
      <div className="flex justify-center items-center gap-4">
        <div className="flex justify-center items-center gap-2">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.5312 15.0625H13.4688V10.4688C13.4688 9.95181 13.0482 9.53125 12.5312 9.53125H11.8343C11.6507 8.73003 11.2851 8.04209 10.7637 7.52528C10.4356 7.2 10.0541 6.95144 9.631 6.78422C10.5378 6.00178 11.1297 4.64916 11.1297 3.42706C11.1297 2.31806 10.8212 1.44766 10.2128 0.840125C9.66244 0.2905 8.89728 0 8 0C7.10275 0 6.33756 0.2905 5.78719 0.840125C5.17878 1.44766 4.87028 2.31806 4.87028 3.42706C4.87028 4.64913 5.46213 6.00178 6.36897 6.78422C5.94591 6.95144 5.56441 7.2 5.23628 7.52528C4.71494 8.04209 4.34934 8.73006 4.16572 9.53125H3.46875C2.95181 9.53125 2.53125 9.95181 2.53125 10.4688V15.0625H0.46875C0.209875 15.0625 0 15.2724 0 15.5312C0 15.7901 0.209875 16 0.46875 16H15.5312C15.7901 16 16 15.7901 16 15.5312C16 15.2724 15.7901 15.0625 15.5312 15.0625ZM8 0.9375C8.68844 0.9375 9.76894 1.16634 10.0955 2.52691C9.61775 2.46616 9.34494 2.33119 9.13141 2.22553C8.92209 2.12197 8.68484 2.00456 8.39531 2.07094C8.16028 2.12481 7.99225 2.25741 7.82978 2.38566C7.53369 2.61938 7.10141 2.95981 5.82469 3.02875C5.98366 1.22053 7.23434 0.9375 8 0.9375ZM5.855 3.96587C7.44709 3.88203 8.04175 3.41275 8.41066 3.12153C8.46406 3.07934 8.53281 3.02513 8.57537 2.99916C8.613 3.01503 8.66853 3.0425 8.71566 3.06581C8.99109 3.20209 9.42356 3.41597 10.191 3.47872C10.1788 4.16894 9.92216 4.93447 9.49809 5.53762C9.06534 6.15319 8.51928 6.50625 8 6.50625C7.48072 6.50625 6.93466 6.15319 6.50187 5.53762C6.17578 5.07378 5.94828 4.51375 5.855 3.96587ZM7.75 7.46875H8.25C9.55087 7.46875 10.4998 8.22937 10.868 9.53125H5.132C5.50019 8.22937 6.44913 7.46875 7.75 7.46875ZM3.46875 15.0625V10.4688H12.5312V15.0625H3.46875Z"
              fill="#6A7A99"
            />
            <path
              d="M8 12.9686C8.25888 12.9686 8.46875 12.7588 8.46875 12.4999C8.46875 12.241 8.25888 12.0311 8 12.0311C7.74112 12.0311 7.53125 12.241 7.53125 12.4999C7.53125 12.7588 7.74112 12.9686 8 12.9686Z"
              fill="#6A7A99"
            />
          </svg>
          <p className="text-dusk text-sm">{students} Students</p>
        </div>
        <div className="flex text-dusk justify-center items-center gap-2">
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
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
            />
          </svg>

          <p className="text-dusk text-sm">{courses} Courses</p>
        </div>
      </div>
    </div>
  );
};

export default InstructorBox;
