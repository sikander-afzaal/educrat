const CategoryBox = ({ img, name, courses }) => {
  return (
    <div className="flex group px-3 justify-start gap-4 items-center bg-white w-full h-full rounded-lg border border-solid border-[#ededed]">
      <div className="flex justify-center transition-all duration-300 group-hover:bg-purple  items-center w-[80px] aspect-square rounded-full bg-[#eef2f6]">
        <img
          src={img}
          className="w-[34px] group-hover:brightness-0 group-hover:invert transition-all duration-300 object-contain "
          alt=""
        />
      </div>
      <div className="flex justify-start items-start flex-col gap-1">
        <h5 className="text-[17px] group-hover:text-purple transition-all duration-300 text-nightBlue font-normal">
          {name}
        </h5>
        <p className="text-dusk text-sm font-normal">{courses} Courses</p>
      </div>
    </div>
  );
};

export default CategoryBox;
