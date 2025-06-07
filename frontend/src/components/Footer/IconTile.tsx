import React from "react";
import { FacebookIcon, InstagramIcon, Mail, Dribbble } from "lucide-react";

interface dataTypes {
  name: string;
  icon: React.ReactNode;
  link?: string;
}

const data: dataTypes[] = [
  {
    name: "Facebook",
    icon: <FacebookIcon />,
  },
  {
    name: "Instagram",
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/_f0rsak3n/",
  },
  { name: "Mail", icon: <Mail /> },
  { name: "Dribble", icon: <Dribbble /> },
];

const IconTile: React.FC = () => {
  return (
    <div className="flex gap-5 pt-2">
      {data.map((el: dataTypes) => (
        <a
          href={el.link}
          target="_blank"
          className=" text-primary/70 hover:text-figmaPrimary transition-colors ease-linear duration-200 cursor-pointer"
          key={el.name}
        >
          {el.icon}
        </a>
      ))}
    </div>
  );
};

export default IconTile;
