import hamburger from "../images/hamburger.png";
const Header = () => {
  const openHamburger = () => {
    const mobileMenu = document.getElementById("mobilemenu");
    mobileMenu.classList.toggle("hidden");
  };

  return (
    <div>
      <div className="flex justify-between items-center w-10/12 mx-auto mt-10">
        <nav className="flex items-center justify-between ">
          <span className="text-3xl font-bold md:mr-10">Shortly</span>
          <div className=" hidden md:block space-x-4">
            <span className="text-slate-400 cursor-pointer hover:text-black">
              Features
            </span>
            <span className="text-slate-400 cursor-pointer hover:text-black">
              Pricing
            </span>
            <span className="text-slate-400 cursor-pointer hover:text-black">
              Resources
            </span>
          </div>
        </nav>
        <div className="hidden md:block space-x-4">
          <span className="cursor-pointer">Login</span>
          <button className="text-white text-sm rounded-full py-2 px-6 bg-cyan-400 hover:opacity-50">
            Sign Up
          </button>
        </div>
        <img
          className="md:hidden"
          id="hamburgermenu"
          onClick={openHamburger}
          src={hamburger}
        />
      </div>

      {/**Mobile Menu */}
      <nav
        id="mobilemenu"
        className="hidden bg-violet-900 text-center w-10/12 absolute left-8  mt-2 rounded-md py-10 px-4"
      >
        <div className="flex flex-col space-y-6 ">
          <span className="text-white cursor-pointer hover:text-black text-lg">
            Features
          </span>
          <span className="text-white cursor-pointer hover:text-black text-lg">
            Pricing
          </span>
          <span className="text-white cursor-pointer hover:text-black text-lg">
            Resources
          </span>
        </div>
        <hr className="my-6" />
        <div className="flex flex-col space-y-6">
          <span className="cursor-pointer text-white text-lg">Login</span>
          <button className="text-xl text-white text-sm rounded-full py-2 px-6 bg-cyan-400 hover:opacity-50">
            Sign Up
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
