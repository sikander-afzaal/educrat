import Categories from "./Categories";
import Events from "./Events";
import Hero from "./Hero";
import Instructors from "./Instructors";
import Learn from "./Learn";
import Popular from "./Popular";
import Register from "./Register";
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
      <Register />
      <Events />
    </div>
  );
};

export default Landing;
