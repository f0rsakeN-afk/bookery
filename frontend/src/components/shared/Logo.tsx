import { LogoImage } from "@/utils/ImageExports";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <div className="h-10 w-28 flex items-center">
      <NavLink to="/" className="flex items-center space-x-1">
        <img src={LogoImage} alt="logo image" className="h-6" />
        <span className="text-xs font-semibold text-gray-500">BETA</span>
      </NavLink>
    </div>
  );
};

export default Logo;
