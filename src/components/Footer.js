import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import pinterest from "../images/icon-pinterest.svg";
import instagram from "../images/icon-instagram.svg";
const Footer = () => {
  return (
    <div className="bg-gray-900">
      <div className="pb-10 w-10/12 mx-auto flex flex-col text-center lg:text-left lg:flex-row justify-between pt-10">
        <p className="font-bold text-2xl text-white mb-6 lg:mb-0">Shortly</p>
        <div className="space-y-2 mb-6 lg:mb-0">
          <p className="text-white font-bold mb-4">Features</p>
          <p className="text-white text-xs text-slate-600 cursor-pointer hover:text-cyan-400">
            Link shortening
          </p>
          <p className="text-white text-xs text-slate-600 cursor-pointer hover:text-cyan-400">
            Branded Links
          </p>
          <p className="text-white text-xs text-slate-600 cursor-pointer hover:text-cyan-400">
            Analytics
          </p>
        </div>
        <div className="space-y-2 mb-6 lg:mb-0">
          <p className="text-white font-bold mb-4">Resources</p>
          <p className="text-white text-xs text-slate-600 cursor-pointer hover:text-cyan-400">
            Blog
          </p>
          <p className="text-white text-xs text-slate-600 cursor-pointer hover:text-cyan-400">
            Developers
          </p>
          <p className="text-white text-xs text-slate-600 cursor-pointer hover:text-cyan-400">
            Support
          </p>
        </div>
        <div className="space-y-2 mb-8 lg:mb-0">
          <p className="text-white font-bold mb-4">Company</p>
          <p className="text-white text-xs text-slate-600 cursor-pointer hover:text-cyan-400">
            About
          </p>
          <p className="text-white text-xs text-slate-600 cursor-pointer hover:text-cyan-400">
            Our Team
          </p>
          <p className="text-white text-xs text-slate-600 cursor-pointer hover:text-cyan-400">
            Careers
          </p>
          <p className="text-white text-xs text-slate-600 cursor-pointer hover:text-cyan-400">
            Contact
          </p>
        </div>
        <div className="flex space-x-4 mx-auto lg:mx-0">
          <img className="h-5" src={facebook} />
          <img className="h-5" src={twitter} />
          <img className="h-5" src={pinterest} />
          <img className="h-5" src={instagram} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
