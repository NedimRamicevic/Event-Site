import { Link, NavLink } from "react-router-dom";
import { mainMenu } from "../../../constant";
import classNames from "classnames";
import Logo from "../logo";
import { BiCalendar, BiSearchAlt } from "react-icons/bi";
import MuiButton from "../../_coreComponent/mui/button";
import { useEffect, useState } from "react";
import { RiMenuUnfoldLine, RiMenuFoldLine } from "react-icons/ri";
import SearchModal from "../../modals/searchModal";
import Location from "./location";

interface SideBarProps {
  setIsMenuOpen: (value: boolean) => void;
  isMenuOpen: boolean;
}

const Menu: React.FC<SideBarProps> = ({
  setIsMenuOpen,
  isMenuOpen,
}: SideBarProps) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const toogleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <nav
      className={`flex justify-between transition-all duration-500  fixed w-full py-4 bg-black  border-b-2 border-yellow-500 ease-in-out z-50`}
    >
      <Logo />
      {/* PC MENU */}
      <header className="flex-row items-center justify-between hidden w-full md:flex">
        <div className="flex items-center px-5 ">
          {mainMenu.map((item, index) => (
            <NavLink key={index} to={item.path}>
              {({ isActive }) => (
                <div
                  className={classNames(
                    "flex items-center   px-4     text-gray-500 transition-all duration-500 hover:text-white group-active:scale-95 font-raleway font-bold text-[13px]",
                    {
                      "  font-raleway text-white ": isActive,
                    }
                  )}
                >
                  <div className="">
                    <div className="">{item.title}</div>
                  </div>
                </div>
              )}
            </NavLink>
          ))}
        </div>
        <div className="flex items-center gap-5 px-10 ">
          <button onClick={() => setIsSearchOpen(true)}>
            <BiSearchAlt className="w-6 h-6 text-white " />
          </button>
          <SearchModal
            isModalOpen={isSearchOpen}
            onClose={() => setIsSearchOpen(false)}
          />
          {/* LOCATİON  => */} <Location />
           <Link to="/calendar"> <BiCalendar className="w-6 h-6 text-white" /></Link>
          <div className="w-px h-10 bg-white " />
          <Link to={"https://bileton-admin.vercel.app/"} target="_blank">
        <MuiButton
            size="small"
            variant="contained"
            className="text-black lowercase "
          >
            Admin
          </MuiButton>
        </Link>
        </div>
      </header>
      {/* MOBİLE MENU */}
      <header className={`md:hidden  ${isMenuOpen ? "block " : "hidden"}`}>
        <div className="flex flex-col items-center gap-3 px-5 mt-3 mb-5 ">
          {mainMenu.map((item, index) => (
            <NavLink key={index} to={item.path}>
              {({ isActive }) => (
                <div
                  className={classNames(
                    "flex items-center   px-4     text-gray-500 transition-all duration-500 hover:text-white group-active:scale-95 font-raleway font-bold text-[13px]",
                    {
                      "  font-raleway text-white  ": isActive,
                    }
                  )}
                >
                  <div className="">
                    <div className="">{item.title}</div>
                  </div>
                </div>
              )}
            </NavLink>
          ))}
        </div>
        <div className="flex items-center gap-3 px-1 sm:gap-5 sm:px-10">
          <button onClick={() => setIsSearchOpen(true)}>
            <BiSearchAlt className="w-6 h-6 text-white " />
          </button>
          <SearchModal
            isModalOpen={isSearchOpen}
            onClose={() => setIsSearchOpen(false)}
          />
          {/* LOCATİON  => */} <Location />
          <Link to="/calendar"> <BiCalendar className="w-6 h-6 text-white" /></Link>
          <div className="w-px h-10 bg-white " />
        <Link to={"https://bileton-admin.vercel.app/"} target="_blank">
        
        <MuiButton
            size="small"
            variant="contained"
            className="text-black lowercase "
          >
            Admin
          </MuiButton>
        </Link>
        </div>
      </header>
      {/* AÇMA KAPAMA */}
      <div className="mt-3 mr-10 md:hidden">
        <button onClick={toogleMenu}>
          {isMenuOpen ? (
            <RiMenuUnfoldLine className="w-6 h-6 text-white" />
          ) : (
            <RiMenuFoldLine className="w-6 h-6 text-white" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Menu;
