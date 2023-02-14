import Categories from "./Categories";
import Hero from "./Hero";
import Instructors from "./Instructors";
import Learn from "./Learn";
import Popular from "./Popular";
import Skills from "./Skills";
import Trusted from "./Trusted";

const Landing = () => {
  return (
    <div className="w-full lg:mt-[50px] 2xl:mt-[100px]">
      <Hero />
      <Categories />
      <Trusted />
      <Popular />
      <Learn />
      <Skills />
      <Instructors />
    </div>
  );
};

export default Landing;
