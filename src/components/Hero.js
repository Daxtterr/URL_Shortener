import working from "../images/illustration-working.svg";
const Hero = () => {
  return (
    <div className=" overflow-hidden  mx-auto flex flex-col-reverse items-center justify-between lg:ml-28 lg:flex-row lg:w-auto">
      <div className="space-y-6 w-10/12 text-center lg:w-auto lg:text-left">
        <p className="text-4xl font-bold lg:text-6xl ">
          More than just <br /> shorter links
        </p>
        <p className="text-slate-400">
          Build your brand's recognition and
          <br className="lg:hidden" /> get detailed{" "}
          <br className="hidden lg:block" /> insights on how your{" "}
          <br className="lg:hidden" />
          links are performing
        </p>
        <button className="text-white text-sm rounded-full py-2 px-6 bg-cyan-400 hover:opacity-50">
          Get started
        </button>
      </div>
      <div>
        <img
          src={working}
          className="ml-10 md:h-[38rem] lg:h-[28rem] mt-10 mb-10 lg:ml-0  lg:mb-0"
        ></img>
      </div>
    </div>
  );
};

export default Hero;
