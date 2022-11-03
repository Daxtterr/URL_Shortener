import brand from "../images/icon-brand-recognition.svg";
import detailed from "../images/icon-detailed-records.svg";
import fully from "../images/icon-fully-customizable.svg";
const AdvancedStatistics = () => {
  return (
    <div className="pt-2 pb-56 bg-slate-100">
      <div className="w-10/12 mx-auto mt-20 ">
        <p className="font-bold text-2xl text-center ">Advanced Statistics</p>
        <p className="text-slate-400 text-center mt-6">
          Track how your links are performing across the web with <br className="hidden lg:block"/> our
          advanced <br className="lg:hidden"/>statistics dashboard
        </p>
        <hr className="hidden lg:block translate-y-56 border border-4 border-cyan-400"/>
        <div className="flex flex-col lg:flex-row space-y-10 lg:space-y-0 justify-between mt-20 ">
          <div className="text-center lg:text-left z-50 mx-auto lg:mx-0 md:w-6/12 lg:w-auto bg-white px-6 pb-10 rounded-md">
            <div className="lg:mx-0 mx-auto -translate-y-8 bg-violet-900 w-3/12 p-4 rounded-full flex justify-center">
              <img src={brand} />
            </div>
            <p className="font-bold text-lg mb-4">Brand Recognition</p>
            <p className="text-slate-400 text-sm">
              Boost your brand recognition with <br />
              each click. Generic links don't<br className="lg:hidden"/> mean a<br className="hidden lg:block"/> thing. Branded links
              help<br className="lg:hidden"/>  instil
              <br className="hidden lg:block"/> confidence in your content.
            </p>
          </div>
          <div className="mx-auto md:w-6/12  text-center  bg-white px-6 pb-10 rounded-md translate-y-10 lg:mx-0 lg:text-left lg:w-auto">
            <div className="mx-auto -translate-y-8 bg-violet-900 w-3/12 p-4 rounded-full flex justify-center lg:mx-0 ">
              <img src={detailed} />
            </div>
            <p className="font-bold text-lg mb-4">Detailed Records</p>
            <p className="text-slate-400 text-sm">
              Gain insights into who is clicking<br className="lg:hidden"/>  your
              <br className="hidden lg:block"/> links. Knowing when and<br className="lg:hidden"/>  where
              <br className="hidden lg:block"/>
              people engage with your<br className="lg:hidden"/>  content <br className="hidden lg:block"/>
              helps inform better<br className="lg:hidden"/>  decisions.
            </p>
          </div>
          <div className="mx-auto md:w-6/12  text-center bg-white px-6 pb-10 rounded-md translate-y-20 lg:mx-0 lg:w-auto lg:text-left">
            <div className=" mx-auto -translate-y-8 bg-violet-900 w-3/12 p-4 rounded-full flex justify-center lg:mx-0">
              <img src={fully} />
            </div>
            <p className="font-bold text-lg mb-4">Fully Customizable</p>
            <p className="text-slate-400 text-sm">
              Improve your brand awareness and <br /> content discoverability
              through <br />
              customizable liks, supercharging <br/>audience engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedStatistics;
