import { LogoImage } from "@/utils/ImageExports";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <div className="h-10 w-28 flex items-center">
      <NavLink to='/' >
      <img src={LogoImage} alt="logo image"  />
      </NavLink>
    </div>
  );
};

export default Logo;
