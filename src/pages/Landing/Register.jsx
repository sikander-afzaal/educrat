import { useState, useEffect, useRef } from "react";

const Register = () => {
  //form state
  const [formData, setFormData] = useState({ email: "", pwd: "" });
  //timer states
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");
  let interval = useRef();
  //form input handler
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  // timer functionality -----------
  const startTimer = () => {
    let end = new Date("3/25/2023 3:00 PM");
    interval = setInterval(() => {
      let _second = 1000;
      let _minute = _second * 60;
      let _hour = _minute * 60;
      let _day = _hour * 24;
      let now = new Date();
      let nowUTC = new Date(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate(),
        now.getUTCHours(),
        now.getUTCMinutes(),
        now.getUTCSeconds()
      );
      let distance = end - nowUTC;
      var days = Math.floor(distance / _day);
      var hours = Math.floor((distance % _day) / _hour);
      var minutes = Math.floor((distance % _hour) / _minute);
      var seconds = Math.floor((distance % _minute) / _second);
      if (distance < 0) {
        clearInterval(interval.current);
        return;
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <div className="lg:pb-[190px] relative isolate py-[80px] lg:pt-[120px] bg-purple maskTrusted wrapper mt-20">
      <div className="contain lg:flex-row flex-col-reverse justify-between items-center gap-16 lg:gap-10">
        <form className="w-full max-w-[470px] flex justify-center items-center flex-col gap-5 bg-white rounded-2xl p-6 sm:p-10">
          <h3 className="text-nightBlue text-center capitalize text-xl">
            Create your <span className="text-purple">free account</span>
          </h3>
          <div className="flex w-full text-justify items-start flex-col gap-1">
            <label
              htmlFor="email"
              className="text-nightBlue text-base font-normal"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full border border-solid border-[#DDDDDD] transition-all duration-150 focus:border-nightBlue pl-2 outline-none h-[55px] rounded-lg text-nightBlue text-[15px]"
              value={formData.email}
              onChange={inputHandler}
            />
          </div>
          <div className="flex w-full text-justify items-start flex-col gap-1">
            <label
              htmlFor="pwd"
              className="text-nightBlue text-base font-normal"
            >
              Password
            </label>
            <input
              type="password"
              name="pwd"
              id="pwd"
              className="w-full border border-solid border-[#DDDDDD] transition-all duration-150 focus:border-nightBlue pl-2 outline-none h-[55px] rounded-lg text-nightBlue text-[15px]"
              value={formData.pwd}
              onChange={inputHandler}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple rounded-lg text-white h-[60px] border-solid border-2 border-purple hover:bg-transparent hover:text-purple transition-all duration-300 text-base font-medium"
          >
            Start learning for free
          </button>
          <p className="text-dusk text-[13px] text-left">
            By continuing, you accept our Terms of Use, our Privacy Policy and
            that your data is stored in the USA. You confirm you are at least 16
            years old (13 if you are an authorized Classrooms user).
          </p>
        </form>
        <div className="flex justify-start max-w-[507px] items-center text-center lg:text-left lg:items-start flex-col gap-5 lg:gap-10">
          <div className="flex justify-start items-center lg:items-start flex-col gap-1">
            <h3 className="text-white font-bold text-[30px]">
              Register Now and Get a 70% Discount
            </h3>
            <p className="text-white text-[15px]">
              Get 100 Online Courses For Free
            </p>
          </div>
          <div className="flex justify-start items-center gap-10">
            <div className=" flex justify-center items-center text-center flex-col">
              <h4 className="text-white font-bold text-[45px]">{timerDays}</h4>
              <p className="text-white text-[15px]">Days</p>
            </div>
            <div className=" flex justify-center items-center text-center flex-col">
              <h4 className="text-white font-bold text-[45px]">{timerHours}</h4>
              <p className="text-white text-[15px]">Hours</p>
            </div>
            <div className=" flex justify-center items-center text-center flex-col">
              <h4 className="text-white font-bold text-[45px]">
                {timerMinutes}
              </h4>
              <p className="text-white text-[15px]">Minutes</p>
            </div>
            <div className=" flex justify-center items-center text-center flex-col">
              <h4 className="text-white font-bold text-[45px]">
                {timerSeconds}
              </h4>
              <p className="text-white text-[15px]">Seconds</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
