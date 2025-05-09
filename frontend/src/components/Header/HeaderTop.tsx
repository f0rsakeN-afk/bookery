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
    <div className="bg-gray-100 dark:bg-background hidden xl:block">
      <div className="container mx-auto max-w-6xl flex space-x-6 py-1.5 font-inter px-4 xl:px-0">
        {data.map((el: dataProps) => (
          <NavLink
            to={el.path}
            key={el.name}
            className={({ isActive }) => `
              text-[13px] tracking-wider transition-colors duration-200 font-inter
              ${isActive 
                ? 'text-figmaPrimary dark:text-primary font-semibold' 
                : 'text-gray-600 dark:text-gray-400 hover:text-figmaPrimary dark:hover:text-primary hover:font-semibold'
              }
            `}
          >
            {el.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default HeaderTop;
