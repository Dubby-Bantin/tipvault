import { Link } from "react-router-dom";
import { footerIcons, footerLinks } from "../utils";
import logo from "../assets/logo.jpeg";

const Footer = () => {
  return (
    <div className="bg-secondary lg:py-0 py-10 min-h-[50dvh] text-white flex items-center justify-between lg:px-20 px-10 flex-wrap">
      <div className="flex flex-col gap-5 relative  flex-wrap">
        <Link to={"/"}>
          <img src={logo} alt="" className="h-10 w-[2.5rem] rounded-[50%] object-cover" />
        </Link>
        <div className="flex items-center text-white gap-5">
          {footerIcons?.map((Icon, i) => (
            <button key={i} className="bg-slate-950 p-3 rounded-full">
              <Icon />
            </button>
          ))}
        </div>
        <p className=" relative">
          copyright @2022 TIP-VAULT. All right reserved
        </p>
      </div>

      <div className="flex lg:gap-32 gap-20 flex-wrap">
        {footerLinks?.map(({ header, children }) => (
          <div key={header} className="flex flex-col gap-3">
            <h3 className="font-bold text-[24px]">{header}</h3>
            <ul className="flex flex-col">
              {children.map((child, i) => (
                <li key={i}>{child}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
