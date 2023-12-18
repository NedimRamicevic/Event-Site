import { NavLink, useMatch } from "react-router-dom";
import Categories from "../../components/category";
import { CiCircleList } from "react-icons/ci";
import { BiCalendar, BiCategoryAlt } from "react-icons/bi";

const Category = () => {
  const matchEvents = useMatch("/events");
  const matchCategory = useMatch("/category");
  const matchCalendar = useMatch("/calendar");
  const activeClassEvents = matchEvents ? "text-yellow-500" : "";
  const activeClassCategory = matchCategory ? "text-yellow-500" : "";
  const activeClassCalendar = matchCalendar ? "text-yellow-500" : "";
  return (
    <div className="bg-no-repeat bg-contain bg-background-image-4">
      <div className="px-0 sm:px-20 pt-28">
        <h1 className="mb-4 text-2xl font-extrabold text-white font-raleway">
          Category
        </h1>
        <div className="flex items-center justify-end gap-4 px-10 mb-6 border-b border-white sm:py-2">
          <NavLink
            to={"/events"}
            className={`text-white flex items-center text-lg ${activeClassEvents}`}
          >
            <CiCircleList className={`w-4 h-4 ${activeClassEvents}`} />
            List
          </NavLink>
          <NavLink
            to={"/categories"}
            className={`text-white flex items-center text-lg ${activeClassCategory}`}
          >
            <BiCategoryAlt className={`w-4 h-3 ${activeClassCategory}`} />
            Category
          </NavLink>
          <NavLink
            to={"/calendar"}
            className={`text-white flex items-center text-lg ${activeClassCalendar}`}
          >
            <BiCalendar className={`w-4 h-4 ${activeClassCalendar}`} />
            Calendar
          </NavLink>
        </div>

        {/* kategori */}

        <div className="w-full">
          <Categories />
        </div>
      </div>
    </div>
  );
};

export default Category;
