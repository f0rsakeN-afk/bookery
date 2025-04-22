import React from "react";
import { FacebookIcon, InstagramIcon, Mail, Dribbble } from "lucide-react";

interface dataTypes {
  name: string;
  icon: React.ReactNode;
}

const data: dataTypes[] = [
  {
    name: "Facebook",
    icon: <FacebookIcon />,
  },
  {
    name: "Instagram",
    icon: <InstagramIcon />,
  },
  { name: "Mail", icon: <Mail /> },
  { name: "Dribble", icon: <Dribbble /> },
];

const IconTile: React.FC = () => {
  return (
    <div className="flex gap-5 pt-2">
      {data.map((el:dataTypes) => (
        <span
          className=" text-primary/70 hover:text-figmaPrimary transition-colors ease-linear duration-200 cursor-pointer"
          key={el.name}
        >
          {el.icon}
        </span>
      ))}
    </div>
  );
};

export default IconTile;
