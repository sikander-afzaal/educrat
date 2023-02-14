import Categories from "./Categories";
import Hero from "./Hero";
import Trusted from "./Trusted";

const Landing = () => {
  return (
    <div className="w-full lg:mt-[50px] 2xl:mt-[100px]">
      <Hero />
      <Categories />
      <Trusted />
    </div>
  );
};

export default Landing;
