import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const navlinks = [
    { link: "/", children: "Most Popular" },
    { link: "/top-rated", children: "Top Rated" },
    { link: "/upcoming", children: "Upcoming" },
  ];
  return (
    <div className="sidebar bg-black  h-[100vh] sticky top-0  ">
      {navlinks.map((item, i) => {
        return (
          <NavLink
            to={item.link}
            key={i}
            className={`flex justify-between p-3 items-center text-white hover:bg-slate-800 cursor-pointer hover:text-red-500 ${({
              isActive,
              isPending,
            }) =>
              isPending
                ? "pending"
                : !isActive
                ? "text-white"
                : "text-red-500"} `}
          >
            <NavLink
              to={`${item.link}`}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : !isActive
                  ? "text-white"
                  : "text-red-500"
              }
            >
              {item.children}{" "}
            </NavLink>{" "}
            <FaLongArrowAltRight className="text-gray-500" />{" "}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Sidebar;
