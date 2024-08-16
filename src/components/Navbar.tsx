import { MdOutlineDarkMode } from "react-icons/md";
import logo from "../assets/download.jpeg";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex z-50 justify-between items-center py-2 px-10 sticky top-0 backdrop-blur-lg">
      <Link to={"/"} className="flex items-center gap-10">
        <img className="h-14 w-[3.5rem] rounded-full" src={logo} alt="" />
        <span className="text-white font-heading text-[1.5rem] font-semibold">
          tipvault
        </span>
      </Link>
      <div className="text-gray-400 text-[1.5rem] flex gap-10 items-center">
        <Link to={"/tips"} className="text-primary">
          tips
        </Link>
        <MdOutlineDarkMode />
        <FaGithub />
      </div>
    </div>
  );
};

export default Navbar;
