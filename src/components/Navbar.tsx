import { MdOutlineDarkMode } from "react-icons/md";
import logo from "../assets/logo.jpeg";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex z-50 justify-between items-center py-4 md:px-10 px-1 sticky top-0 backdrop-blur-lg">
      <Link to={"/"} className="flex items-center gap-5">
        <img
          className="h-10 w-[2.5rem] rounded-[50%] object-cover"
          src={logo}
          alt=""
        />
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
