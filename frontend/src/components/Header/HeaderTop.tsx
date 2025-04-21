import { NavLink } from "react-router-dom";

interface dataProps {
  name: string;
  path: string;
}

const data: dataProps[] = [
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
  {
    name: "Privacy Policy",
    path: "/privacypolicy",
  },
];

const HeaderTop = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl flex space-x-6 py-1 font-inter ">
        {data.map((el) => (
          <NavLink
            to={el.path}
            className="text-[13px] tracking-wider text-gray-600 dark:text-gray-400"
          >
            {el.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default HeaderTop;
